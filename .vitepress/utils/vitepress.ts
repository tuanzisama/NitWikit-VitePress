import fs from "fs";
import glob from "tiny-glob";
import frontMatter from "front-matter";
import { DefaultTheme } from "vitepress";
import { cloneDeep, omit, pull } from "lodash-es";

export async function getSidebar(dir: string, pagePath: string): Promise<DefaultTheme.SidebarItem[]> {
  const files = await glob(`**/*.md`, { cwd: dir });
  const filesAsTree = buildTree(files, dir);

  function flatmap(tree: TreeNode[]) {
    return tree
      .map((item) => {
        return {
          text: item?.attributes?.title ?? item.name ?? "Unknown",
          items: flatmap(item.children ?? []),
          link: pagePath + "/" + item.path.replaceAll("\\", "/").replace(/\.md$/, ""),
          meta: item,
          collapsed: true,
        };
      })
      .sort((a, b) => {
        return a.meta.attributes.sidebar_position > b.meta.attributes.sidebar_position ? 1 : -1;
      });
  }

  return flatmap(cloneDeep(filesAsTree));
}

function buildTree(paths: string[], cwd: string): TreeNode[] {
  const root: TreeNode = { name: "", path: "", children: [] };

  function addToTree(node: TreeNode, pathParts: string[], parentPath: string): void {
    if (pathParts.length === 0) {
      return;
    }

    const [currentPart, ...remainingParts] = pathParts;
    let childNode = node.children?.find((child) => child.name === currentPart);

    if (!childNode) {
      childNode = { name: currentPart, path: parentPath };
      node.children = node.children || [];
      node.children.push(childNode);
    }

    const attributes = getMarkdownAttributes(`${cwd}/${childNode.path}`);
    // same as parent page
    if (node.name === childNode?.name.replace(/\.md$/, "")) {
      node = Object.assign(node, {
        ...omit(childNode, "name"),
        attributes,
      });
      pull(node.children ?? [], childNode);
    }

    childNode.attributes = attributes;

    addToTree(childNode, remainingParts, parentPath);
  }

  for (const path of paths) {
    const parts = path.split(/[\/\\\\]/g);
    addToTree(root, parts, path);
  }

  return root.children as TreeNode[];
}

function getMarkdownAttributes(path) {
  const fm = frontMatter<NodeAttribute>(fs.readFileSync(path, { encoding: "utf-8" }));
  return fm.attributes;
}

interface TreeNode {
  name: string;
  path: string;
  children?: TreeNode[];
  attributes?: NodeAttribute;
}

interface NodeAttribute {
  title?: string;
  slug?: string;
  sidebar_position?: string;
}