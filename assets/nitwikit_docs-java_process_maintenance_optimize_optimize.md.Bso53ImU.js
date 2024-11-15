import{_ as e,c as r,a5 as t,o as i}from"./chunks/framework.Dzz2jpra.js";const u=JSON.parse('{"title":"优化","description":"","frontmatter":{"slug":"/optimize","sidebar_position":1},"headers":[],"relativePath":"nitwikit/docs-java/process/maintenance/optimize/optimize.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/optimize.md","lastUpdated":1729683245000}'),o={name:"nitwikit/docs-java/process/maintenance/optimize/optimize.md"};function p(n,a,l,h,s,c){return i(),r("div",null,a[0]||(a[0]=[t('<h1 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h1><p>优化是做减法，清理服务器的卡顿因素，由于 Minecraft 本身的性能低下、部分插件作者并没有优化代码的意识、服务器实体过多等。</p><p>每个服务器可能有自己的卡顿原因，在这部分先做最基础的通用优化，如果你使用后作用不大请参考性能分析板块。</p><p>在此之前，请一定查看 <a href="./optimized-plugin.html">优化误区</a>，停止此类无效&quot;优化&quot;，然后根据下面的步骤进行操作。</p><h2 id="第一步-java-优化" tabindex="-1">第一步 - Java 优化 <a class="header-anchor" href="#第一步-java-优化" aria-label="Permalink to &quot;第一步 - Java 优化&quot;">​</a></h2><p>为什么选择 Java 优化作为第一步 - 几乎任何情况下，服务器都会因为合适的 Java 受益，</p><p>仅仅需要你下载一个小小的 Java 安装程序，或者更改 JVM 参数(大白话来说就是开服参数)。</p><h3 id="选择合适的-java" tabindex="-1">选择合适的 Java <a class="header-anchor" href="#选择合适的-java" aria-label="Permalink to &quot;选择合适的 Java&quot;">​</a></h3><p>参考<a href="https://nitwikit.yizhan.wiki/preparation/choose-and-download-and-install-java/" target="_blank" rel="noreferrer">Java 下载及安装</a>安装合适的 Java</p><h3 id="jvm-参数优化" tabindex="-1">JVM 参数优化 <a class="header-anchor" href="#jvm-参数优化" aria-label="Permalink to &quot;JVM 参数优化&quot;">​</a></h3><p>可以在 <a href="https://startmc.jakaco.xyz/" target="_blank" rel="noreferrer">JVM 参数生成器</a>生成适合你服务器的基本 JVM 参数，然后复制并保存到你的启动脚本里，然后重启就完成了</p><p>别急，还有一些更高阶的参数。<a href="./jvm/jvm.html">JVM 优化</a></p><h2 id="第二步-预生成" tabindex="-1">第二步 - 预生成 <a class="header-anchor" href="#第二步-预生成" aria-label="Permalink to &quot;第二步 - 预生成&quot;">​</a></h2><p>什么是预生成 - 预生成就是让服务器在玩家进入之前，预先生成区块对应方块、结构等。</p><p>在 Minecraft 服务器中，生成新区块会消耗大量服务器资源，如果要开启新的地图 / 服务器，建议先预生成地图。</p><p><a href="https://hangar.papermc.io/pop4959/Chunky" target="_blank" rel="noreferrer">Chunky</a> 是最常用的预生成插件。 通常与 <a href="https://modrinth.com/plugin/chunkyborder" target="_blank" rel="noreferrer">ChunkyBorder</a> 结合使用，你可以根据自己的喜好自定义边界及形状。</p><p>通常来说，即使你不设置边界，也务必进行预生成大约 1w x 1w 大小的世界。这对降低后期服务器负载很有效。</p><p>预生成时应该注意，默认情况 1.20 原版 1w x 1w 的地图需要 4-5 GB 硬盘。应根据硬盘大小选择世界的预生成大小。</p><h2 id="第三步-更换核心" tabindex="-1">第三步 - 更换核心 <a class="header-anchor" href="#第三步-更换核心" aria-label="Permalink to &quot;第三步 - 更换核心&quot;">​</a></h2><p>在插件和配置层面能进行的优化其实不多(受限于 API 还有服务端核心)，所以最好的方法是更换服务器核心。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>任何时候都不要再使用 CraftBukkit 和 Spigot 了。追求稳定/性能上 Purpur ，追求原版特性上 Leaves，性能上 Leaf</p></div><details><summary>选择更换的服务器核心</summary><p>此处只是作为最基础的核心选择推荐，完整版请查看<a href="/docs-java/start/server-core-choose.html">核心选择</a></p><h3 id="paper-追求极致稳定-推荐度-★★★★☆" tabindex="-1">Paper - 追求极致稳定 <em>推荐度 ★★★★☆</em> <a class="header-anchor" href="#paper-追求极致稳定-推荐度-★★★★☆" aria-label="Permalink to &quot;Paper - 追求极致稳定 _推荐度 ★★★★☆_&quot;">​</a></h3><p>如果是第一次开服，或者追求稳定，请使用 Paper 。任何时候想更换其他核心可以随时更换如 Purpur / Leaf 等核心。</p><h3 id="purpur-稳定性与性能最佳选择-推荐度-★★★★★" tabindex="-1">Purpur - 稳定性与性能最佳选择 <em>推荐度 ★★★★★</em> <a class="header-anchor" href="#purpur-稳定性与性能最佳选择-推荐度-★★★★★" aria-label="Permalink to &quot;Purpur - 稳定性与性能最佳选择 _推荐度 ★★★★★_&quot;">​</a></h3><p>如果你并不是追求更极致的性能，Purpur 你最好的选择，只需要替换掉核心就可以，Purpur 兼容全部插件!!</p><h3 id="leaf-极致性能-推荐度-★★★★☆" tabindex="-1">Leaf - 极致性能 <em>推荐度 ★★★★☆</em> <a class="header-anchor" href="#leaf-极致性能-推荐度-★★★★☆" aria-label="Permalink to &quot;Leaf - 极致性能 _推荐度 ★★★★☆_&quot;">​</a></h3><p>前往 Leaf 的 GitHub Action 下载最新核心，然后替换!!，Leaf 兼容你的绝大部分插件(已知仅有一个不兼容，但在插件的分支解决)</p><h3 id="folia-硬件利用率超高的高性能-但兼容性较差-推荐度-★★★☆☆" tabindex="-1">Folia - 硬件利用率超高的高性能，但兼容性较差 <em>推荐度 ★★★☆☆</em> <a class="header-anchor" href="#folia-硬件利用率超高的高性能-但兼容性较差-推荐度-★★★☆☆" aria-label="Permalink to &quot;Folia - 硬件利用率超高的高性能，但兼容性较差 _推荐度 ★★★☆☆_&quot;">​</a></h3><p>如果你的服务器对插件的需求不大，或者你的插件已全部兼容 Folia ，那你就可以选择切换到这个核心，你的 tps 有绝对巨大的提升(甚至超过了 Leaf )</p></details><h2 id="第四步-调整服务端配置" tabindex="-1">第四步 - 调整服务端配置 <a class="header-anchor" href="#第四步-调整服务端配置" aria-label="Permalink to &quot;第四步 - 调整服务端配置&quot;">​</a></h2><p>目前，Bilibili 上面的配置都是很老的，不推荐使用</p><p>文档里的 <a href="./go.html">调服务端配置</a> 比较新，非常推荐</p><h2 id="第五步-更换硬件" tabindex="-1">第五步 - 更换硬件 <a class="header-anchor" href="#第五步-更换硬件" aria-label="Permalink to &quot;第五步 - 更换硬件&quot;">​</a></h2><p><strong>不要无脑换硬件!</strong> 首先要知道自己的硬件瓶颈在哪里。如果 CPU 负荷过高，建议先排除 CPU 异常占用，再看 CPU 总体占用情况。 一般来说服务器卡顿换 CPU 是最有效的，单核性能和 MC 服务器 TPS 几乎呈线性相关，但是换 CPU 几乎就相当于要换一台机器，迁移对于新手来说并不是易事。</p><p>对于单端服务器来说，超过 8 核心的部分基本很难通过提升 CPU 核心数量提升 TPS 。不要动不动就买 E5 然后卡了就加 4 核 8G 内存，更多也没用的。</p><p>对于群组服务器来说，一般核心数量都会占用上，但是内存可能会有些捉急，对于每一个普通的生存服来说内存的推荐值为 8G - 20G 更多更少都是不推荐的。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果发现 CPU 占用和内存占用都不是很高但是服务器卡卡的，请考虑是不是服务器带宽受限导致玩家 ping 值突然升高的问题。请分清楚 TPS 低导致的卡顿，MSPT 高导致的卡顿，带宽占满导致的卡顿。</p></div><h2 id="第六步-更换操作系统" tabindex="-1">第六步 - 更换操作系统 <a class="header-anchor" href="#第六步-更换操作系统" aria-label="Permalink to &quot;第六步 - 更换操作系统&quot;">​</a></h2><p>无论在性能还是稳定性， Linux 都比 Windows 更适合用于开服，对于 Linux 根据自己的使用经验选择即可，如果没有使用经验可以先使用 Ubuntu 等主流系统。</p><p>如果想要了解更多请前往进阶 <a href="https://nitwikit.yizhan.wiki/Sundry/Advance/Linux" target="_blank" rel="noreferrer">Linux 开服教程</a></p><h2 id="第七步-性能分析" tabindex="-1">第七步 - 性能分析 <a class="header-anchor" href="#第七步-性能分析" aria-label="Permalink to &quot;第七步 - 性能分析&quot;">​</a></h2><blockquote><p>“马克思主义活的灵魂在于对具体问题作具体分析。” - 列宁</p></blockquote><p>通用优化已经差不多做好了，而每个服都有自己导致滞后的因素，可能是实体太多，可能是玩家机器多，也可能是某些插件写的太屎...</p><p>如此，那么应该如何知道服务器为何卡顿呢？</p><p>如果你是个完完全全的新手，或者懒得分析，想请教别人分析应该怎么办呢? 请转跳到 <a href="./ask-for-help.html">怎么让大佬帮我</a></p><p>如果你不想求助别人，亦或者你想有一些进步，请参考 <a href="./performance-analysis.html">性能分析</a></p>',39)]))}const m=e(o,[["render",p]]);export{u as __pageData,m as default};