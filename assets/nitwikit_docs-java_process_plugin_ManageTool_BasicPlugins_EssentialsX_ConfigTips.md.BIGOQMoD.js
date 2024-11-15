import{_ as a,c as i,a5 as e,o as t}from"./chunks/framework.Dzz2jpra.js";const r=JSON.parse('{"title":"Config 快速指南","description":"","frontmatter":{"title":"Config 快速指南","sidebar_position":2},"headers":[],"relativePath":"nitwikit/docs-java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips.md","filePath":"nitwikit/docs-java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips.md","lastUpdated":1727754229000}'),l={name:"nitwikit/docs-java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips.md"};function n(p,s,h,d,o,k){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="config-快速指南" tabindex="-1">Config 快速指南 <a class="header-anchor" href="#config-快速指南" aria-label="Permalink to &quot;Config 快速指南&quot;">​</a></h1><p>我们为懒人列出了配置文件那些比较重要的选项 (善用 CTRL + F ) ：</p><h2 id="传送" tabindex="-1">传送 <a class="header-anchor" href="#传送" aria-label="Permalink to &quot;传送&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-cooldown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span></code></pre></div><p>传送功能的冷却时间(以秒为单位)，如/home， /tp， etc 等命令。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span></code></pre></div><p>传送延迟时间(以秒为单位)，在玩家被确实传送之前的时间.如果玩家在该时间内移动了或者受到攻击，传送将取消。</p><h2 id="礼包-工具包" tabindex="-1">礼包/工具包 <a class="header-anchor" href="#礼包-工具包" aria-label="Permalink to &quot;礼包/工具包&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">skip-used-one-time-kits-from-kit-list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><p>当该选项开启后 (例如. delay &lt; 0) 则玩家使用过一次该项工具包以后，将从玩家的kit列表中删去该项可用工具包。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kit-auto-equip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><p>启用后，只要玩家的盔甲槽是空的，就会自动装备领取的kit包中的盔甲。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use-nbt-serialization-in-createkit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><p>默认为false。</p><p>应该是说，开启后 kit 可以存 nbt 的东西了。</p><h2 id="afk-使用命令-afk-暂时离开" tabindex="-1">AFK - 使用命令 /afk 暂时离开 <a class="header-anchor" href="#afk-使用命令-afk-暂时离开" aria-label="Permalink to &quot;AFK - 使用命令 /afk 暂时离开&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auto-afk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span></span></code></pre></div><p>在超时(以秒为单位)后，用户将被设置为 AFK。 此功能需要玩家拥有 essentials.afk.auto 权限。 设置为 -1 表示不会超时。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auto-afk-kick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span></code></pre></div><p>在超时(以秒为单位)后，用户将被踢出服务器。 拥有 essentials.afk.kickexempt 权限可以避免被踢出。 设置为 -1 表示不会超时。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">afk-list-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;挂机中&quot;</span></span></code></pre></div><p>设置玩家AFK时的列表名称。 默认情况下为 none 。</p><h2 id="杂项" tabindex="-1">杂项 <a class="header-anchor" href="#杂项" aria-label="Permalink to &quot;杂项&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">death-messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>你可以在此处禁用原版的死亡消息。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">custom-join-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e[&amp;a+&amp;e]&amp;6比驿站丑的 {USERNAME} 加入了游戏&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">custom-quit-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e[&amp;c-&amp;e]&amp;6比驿站丑的 {USERNAME} 退出了游戏&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">custom-new-username-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e[&amp;a+&amp;e]&amp;6比驿站丑的新玩家 {USERNAME} 加入了游戏&quot;</span></span></code></pre></div><p>你可以在此处设置自定义加入和退出消息。</p><p>将此设置为 none 以使用默认的原版消息。</p><h2 id="家" tabindex="-1">家 <a class="header-anchor" href="#家" aria-label="Permalink to &quot;家&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spawn-if-no-home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p>玩家执行了/home ，但他没有设置家。</p><p>如果此项设置为 true ，玩家将会传送回出生点。</p><p>如果此项设置为 false ，玩家不会被传送。</p><h2 id="经济" tabindex="-1">经济 <a class="header-anchor" href="#经济" aria-label="Permalink to &quot;经济&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">starting-balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span></code></pre></div><p>设置新玩家进服的启动资金。</p><h2 id="essentialsx-spawn-new-players" tabindex="-1">EssentialsX Spawn + New Players <a class="header-anchor" href="#essentialsx-spawn-new-players" aria-label="Permalink to &quot;EssentialsX Spawn + New Players&quot;">​</a></h2><p>注意：你需要安装 EssentialsX Spawn 才可以使用。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">announce-format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7[&amp;b驿站&amp;7]&amp;a欢迎大傻蛋来服务器！&#39;</span></span></code></pre></div><p>设置玩家进服的欢迎语。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tools</span></span></code></pre></div><p>是否想要玩家第一次进入服务器时赠送新手礼物？</p><p>设置为 &#39;&#39; 可禁用此功能。</p><h2 id="essentialsx-chat" tabindex="-1">EssentialsX Chat <a class="header-anchor" href="#essentialsx-chat" aria-label="Permalink to &quot;EssentialsX Chat&quot;">​</a></h2><p>注意：你需要安装 EssentialsX Chat 才可以使用，推荐用别的聊天插件...</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;{DISPLAYNAME}&gt; {MESSAGE}&#39;</span></span></code></pre></div><p>设置玩家聊天的公屏显示格式</p><h2 id="essentialsx-protect" tabindex="-1">EssentialsX Protect <a class="header-anchor" href="#essentialsx-protect" aria-label="Permalink to &quot;EssentialsX Protect&quot;">​</a></h2><p>注意：你需要安装 EssentialsX Protect 才可以使用，同样推荐用别的插件...</p><p>太多东西了，自己看着调。</p><h2 id="essentialsx-antibuild" tabindex="-1">EssentialsX AntiBuild <a class="header-anchor" href="#essentialsx-antibuild" aria-label="Permalink to &quot;EssentialsX AntiBuild&quot;">​</a></h2><p>注意：你需要安装 EssentialsX AntiBuild 才可以使用，同样推荐用别的插件...</p><p>太多东西了，自己看着调。</p>`,53)]))}const g=a(l,[["render",n]]);export{r as __pageData,g as default};