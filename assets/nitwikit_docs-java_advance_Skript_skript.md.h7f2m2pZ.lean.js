import{_ as s,c as i,a5 as t,o as e}from"./chunks/framework.Dzz2jpra.js";const c=JSON.parse('{"title":"Skript 概览","description":"","frontmatter":{"slug":"/plugins/other/Skript","title":"Skript 概览","sidebar_position":11},"headers":[],"relativePath":"nitwikit/docs-java/advance/Skript/skript.md","filePath":"nitwikit/docs-java/advance/Skript/skript.md","lastUpdated":1727754229000}'),p={name:"nitwikit/docs-java/advance/Skript/skript.md"};function n(r,a,l,h,k,o){return e(),i("div",null,a[0]||(a[0]=[t(`<h1 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>本文档大量参考了其他作者的教程，目前属于 <strong>不可读</strong> 状态</p><p>引用的内容主要来源于</p><p>TUCAOEVER 在 mcbbs 的教程</p><p>法棍 在 CSKB 发布的 <a href="https://kb.corona.studio/zhCN/skript/startup.html" target="_blank" rel="noreferrer">sk 教程</a></p></div><p>Skript 是一个脚本插件，取名来自 &quot;script&quot;。是一个面向 Bukkit 的编程语言，缩写为 SK。</p><p>因为其语法简单而受到很多中小型服主的青睐，很多人多多少少对这块有一些了解，</p><p>但是毕竟受众人群小，很多时候也会出现想学却无从下手，有问题却无处可问的尴尬境地。</p><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><h3 id="简单易上手" tabindex="-1">简单易上手 <a class="header-anchor" href="#简单易上手" aria-label="Permalink to &quot;简单易上手&quot;">​</a></h3><p>举一个简单的例子，为了实现玩家每次进入服务器就给有 &quot;xxx&quot; 权限的玩家 64 钻石的功能。</p><p>使用 Java 时的代码:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EventHandler</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onPlayerJoin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PlayerJoinEvent evt) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Player player </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> evt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 玩家加入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ItemStack itemstack </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ItemStack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Material.DIAMOND, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义钻石</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 权限判断</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        inventory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(itemstack); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 给予钻石</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;欢迎你加入服务器!你获得了64枚钻石!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用 Skript 时的代码:</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>on join:</span></span>
<span class="line"><span>    if player has permission &quot;xxx&quot;: // 权限判断</span></span>
<span class="line"><span>        message &quot;欢迎你加入服务器!你获得了64枚钻石!&quot; // 发送消息</span></span>
<span class="line"><span>        give 64 diamond to player // 给予钻石</span></span></code></pre></div><p>在大多数情况下， Skript 不会在意大小写、定冠词 &quot;the&quot;，只需要符合英语语法和基本的缩进。</p><p>即使使用了错误的语法，报错时也基本会提示具体错误类型。</p><h3 id="拓展插件多" tabindex="-1">拓展插件多 <a class="header-anchor" href="#拓展插件多" aria-label="Permalink to &quot;拓展插件多&quot;">​</a></h3><p>使用 Skript 时如果遇到 Skript 不包含的语法，可以使用其他拓展插件如 <a href="https://github.com/ShaneBeee/SkBee" target="_blank" rel="noreferrer">Skbee</a>、<a href="https://github.com/SkriptLang/skript-reflect" target="_blank" rel="noreferrer">Skript-reflect</a> 等插件拓展。</p><h3 id="性能较低" tabindex="-1">性能较低 <a class="header-anchor" href="#性能较低" aria-label="Permalink to &quot;性能较低&quot;">​</a></h3><p>相较使用 Java 编写的插件，进行相同的操作时， Skript 的性能会略低于 Java。</p><p>但大多数情况下性能和代码本身的质量有巨大的关系。代码质量差对于性能的影响远大于使用 Skript 对性能的影响。</p><h2 id="下载及安装" tabindex="-1">下载及安装 <a class="header-anchor" href="#下载及安装" aria-label="Permalink to &quot;下载及安装&quot;">​</a></h2><p>下载链接：</p><p>1.7.10 2.1.2 <a href="https://dev.bukkit.org/projects/skript/files/779542/download" target="_blank" rel="noreferrer">https://dev.bukkit.org/projects/skript/files/779542/download</a></p><p>1.8.8-1.12.2 2.2dev37c <a href="https://github.com/SkriptLang/Skript/releases/download/dev37c/Skript.jar" target="_blank" rel="noreferrer">https://github.com/SkriptLang/Skript/releases/download/dev37c/Skript.jar</a></p><p>最新版 <a href="https://github.com/SkriptLang/Skript/releases" target="_blank" rel="noreferrer">https://github.com/SkriptLang/Skript/releases</a></p><p>将 <code>Skript.jar</code> 以及你需要的拓展插件如 <code>Skbee.jar</code> 安装到 <code>/plugins</code> 文件夹中即可。</p><h2 id="基础教程" tabindex="-1">基础教程 <a class="header-anchor" href="#基础教程" aria-label="Permalink to &quot;基础教程&quot;">​</a></h2><p>见<a href="./BasicTutorials.html">“基础教程”</a>。</p><h2 id="进阶教程" tabindex="-1">进阶教程 <a class="header-anchor" href="#进阶教程" aria-label="Permalink to &quot;进阶教程&quot;">​</a></h2><p>见<a href="./AdvancedTutorials.html">“高级教程”</a>。</p>`,29)]))}const g=s(p,[["render",n]]);export{c as __pageData,g as default};