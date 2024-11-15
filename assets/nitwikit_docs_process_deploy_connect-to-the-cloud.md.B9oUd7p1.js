import{_ as e,c as t,a5 as o,o as r}from"./chunks/framework.Dzz2jpra.js";const s="/assets/1.DnUaAGnx.png",n="/assets/2.CDPuonfo.png",i="/assets/3.DYcVZ-9t.png",k=JSON.parse('{"title":"连接到云","description":"","frontmatter":{"title":"连接到云","sidebar_position":4},"headers":[],"relativePath":"nitwikit/docs/process/deploy/connect-to-the-cloud.md","filePath":"nitwikit/docs/process/deploy/connect-to-the-cloud.md","lastUpdated":1729683245000}'),p={name:"nitwikit/docs/process/deploy/connect-to-the-cloud.md"};function c(d,a,l,h,m,u){return r(),t("div",null,a[0]||(a[0]=[o('<h1 id="连接到云" tabindex="-1">连接到云 <a class="header-anchor" href="#连接到云" aria-label="Permalink to &quot;连接到云&quot;">​</a></h1><p>当你买好服务器后，你应该如何连接到服务器并部署你的服务端</p><h2 id="面板" tabindex="-1">面板 <a class="header-anchor" href="#面板" aria-label="Permalink to &quot;面板&quot;">​</a></h2><p>去骚扰卖你面板的人</p><h2 id="vps" tabindex="-1">vps <a class="header-anchor" href="#vps" aria-label="Permalink to &quot;vps&quot;">​</a></h2><details><summary>Windows远程桌面连接</summary><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>按下 <code>win键</code> + <code>R键</code></p><p><img src="'+s+'" alt=""></p><p>在弹出的窗口中输入 <code>mstsc</code></p><p>把卖你 vps 的人给你的信息照着填进去就可以连接到你的 vps 了。</p><p>你也可以在 vps 安装 <a href="https://www.todesk.com/download.html" target="_blank" rel="noreferrer">ToDesk</a> 或 <a href="https://sunlogin.oray.com/" target="_blank" rel="noreferrer">向日葵远程控制</a> 等软件</p><h4 id="映射驱动器" tabindex="-1">映射驱动器 <a class="header-anchor" href="#映射驱动器" aria-label="Permalink to &quot;映射驱动器&quot;">​</a></h4><p>可以在 vps 中点击 <code>此电脑</code> 看到本地的 <strong>驱动器</strong>(c 盘 d 盘的，这下听懂了吧)</p><p>方便你传输文件</p><p>或者，你也可以 <code>Ctrl c</code> + <code>Ctrl v</code> 来传文件</p><p><img src="'+n+'" alt=""></p><p><img src="'+i+'" alt=""></p><h3 id="macos-和手机" tabindex="-1">MacOS 和手机 <a class="header-anchor" href="#macos-和手机" aria-label="Permalink to &quot;MacOS 和手机&quot;">​</a></h3><p>在 iOS 和 macOS 上，需要在 App Store 登录海外的 Apple ID ，然后搜索 Microsoft Remote Desktop ，就可以找到这个应用。 在安卓手机上需要在 Google play 上搜索 Microsoft Remote Desktop 就可以找到这个应用，如果手机无法使用 Google play ，也可以在网上搜索安装包下载。 打开应用后，点击加号，点击 <strong>Add PC</strong> ，选择或输入那台电脑上的那串代码，然后点击添加或保存。随后点击或双击添加的那台电脑，然后输入帐号和密码，就可以连接到那台电脑。</p></details><p><a href="./../../advance/Linux/Connect-to-server.html">Linux ssh</a></p><h4 id="放行端口" tabindex="-1">放行端口 <a class="header-anchor" href="#放行端口" aria-label="Permalink to &quot;放行端口&quot;">​</a></h4><p>然后你需要在防火墙放行你 mc 服务端使用的端口，可参考教程：<a href="https://blog.csdn.net/aa1213366512/article/details/119964839" target="_blank" rel="noreferrer">https://blog.csdn.net/aa1213366512/article/details/119964839</a> 。</p><p>如果你使用的是家宽公网，你需要在路由器里后台放行远程桌面使用的端口，协议同时选择 TCP 和 UDP 。远程桌面使用的端口为 3389 ，所以你需要把服务器的 <strong>3389</strong> 端口映射到外网。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>配置直接在公网使用3389端口连接服务器远程桌面<strong>会导致严重的安全性问题</strong>，详见 <a href="./../maintenance/how-to-defend-against-cyber-attacks.html">如何抵御网络攻击</a>。</p></div><p>接着用外网地址连接你的服务器。注意，除非你直接在外网使用 3389 端口，否则连接服务器时需要使用外网端口连接，比如服务器 IP 是 yizhan.wiki，外网使用的是 41982 端口，你就需要连接 <code>yizhan.wiki:41982</code>，而不是<code>yizhan.wiki</code>。</p><p><strong>举例，不一定正确：</strong></p><p>你远程桌面连接用的是 <code>yizhan.wiki:12345</code></p><p>你的服务商告诉你，除了<code>12345</code>，你可以使用 <code>12346</code> 端口</p><p>那你就把你服务端的 <a href="https://nitwikit.yizhan.wiki/Java/start/connect-to-server#%E7%AB%AF%E5%8F%A3" target="_blank" rel="noreferrer">端口</a> 设置为 <code>12346</code> ，记得 <a href="#放行端口">放行端口</a></p><p>然后在你的游戏客户端里添加服务器，填地址为 <code>yizhan.wiki:12346</code></p><h2 id="家里云" tabindex="-1">家里云 <a class="header-anchor" href="#家里云" aria-label="Permalink to &quot;家里云&quot;">​</a></h2><details><summary>我有公网 IP</summary><p>按照上文 VPS 的方式打开电脑的远程桌面或 SSH 服务即可。<strong>如果要公网访问，记得在路由器里配置端口映射，把电脑的远程控制端口开放到公网</strong></p></details><details><summary>我没有/不知道啥是公网 IP</summary><p><a href="./apply-for-public-ip-address.html">申请公网ip</a></p><p>如果申请不到，那么为了在没有公网IP的情况下连接到你的内外机器，你需要 <strong>内网穿透(Frp)</strong></p><p><a href="./intranet-penetration.html">内网穿透</a></p><p><a href="./../../advance/Linux/frp.html">Linux | 搭建内网穿透(Frp)</a></p></details><h2 id="独立机" tabindex="-1">独立机 <a class="header-anchor" href="#独立机" aria-label="Permalink to &quot;独立机&quot;">​</a></h2><p>机房的运维一般会帮你设置。如果你用的是第三方远程桌面，但是服务器本身又有远程控制的条件，按照上文中 VPS 的方式操作即可。</p><h2 id="开服器" tabindex="-1">开服器 <a class="header-anchor" href="#开服器" aria-label="Permalink to &quot;开服器&quot;">​</a></h2><p>不教，自己查开服器的食用方式。</p>',24)]))}const g=e(p,[["render",c]]);export{k as __pageData,g as default};