import{_ as s,c as n,a5 as p,o as e}from"./chunks/framework.Dzz2jpra.js";const u=JSON.parse('{"title":"文本","description":"","frontmatter":{"title":"文本","sidebar_position":2},"headers":[],"relativePath":"nitwikit/docs/contribution/writing-specification/text.md","filePath":"nitwikit/docs/contribution/writing-specification/text.md","lastUpdated":1727754229000}'),t={name:"nitwikit/docs/contribution/writing-specification/text.md"};function i(l,a,c,o,d,h){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h1><h2 id="字间距" tabindex="-1">字间距 <a class="header-anchor" href="#字间距" aria-label="Permalink to &quot;字间距&quot;">​</a></h2><p>(1)全角中文字符与半角英文字符之间，应有一个半角空格。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：本文介绍如何快速启动Windows系统。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：本文介绍如何快速启动 Windows 系统。</span></span></code></pre></div><p>(2)全角中文字符与半角阿拉伯数字之间，有没有半角空格都可，但必须保证风格统一，不能两种风格混杂。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>正确：2011年5月15日，我订购了5台笔记本电脑与10台平板电脑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：2011 年 5 月 15 日，我订购了 5 台笔记本电脑与 10 台平板电脑。</span></span></code></pre></div><p>半角的百分号，视同阿拉伯数字。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>正确：今年我国经济增长率是6.5%。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：今年我国经济增长率是 6.5%。</span></span></code></pre></div><p>(3)英文单位若不翻译，单位前的阿拉伯数字与单位符号之间，应留出适当的空隙。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>例1：一部容量为 16 GB 的智能手机</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例2：1 h = 60 min = 3，600 s</span></span></code></pre></div><p>(4)半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：他的电脑是 MacBook Air 。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：他的电脑是 MacBook Air。</span></span></code></pre></div><h2 id="句子" tabindex="-1">句子 <a class="header-anchor" href="#句子" aria-label="Permalink to &quot;句子&quot;">​</a></h2><p>(1)避免使用长句。</p><p>不包含任何标点符号的单个句子，或者以逗号分隔的句子构件，长度尽量保持在 20 个字以内；20～29 个字的句子，可以接受；30～39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，任何情况下都不能接受。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：本产品适用于多种体系结构。无论是由一台服务器(单一节点结构)，还是由多台服务器(并行处理结构)进行动作控制，均可以使用本产品。</span></span></code></pre></div><p>逗号分割的长句，总长度不应该超过 100 字或者正文的 3 行。</p><p>(2)尽量使用简单句和并列句，避免使用复合句。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>并列句：他昨天生病了，没有参加会议。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>复合句：那个昨天生病的人没有参加会议。</span></span></code></pre></div><p>(3)同样一个意思，尽量使用肯定句表达，不使用否定句表达。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：请确认没有接通装置的电源。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：请确认装置的电源已关闭。</span></span></code></pre></div><p>(4)避免使用双重否定句。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：没有删除权限的用户，不能删除此文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：用户必须拥有删除权限，才能删除此文件。</span></span></code></pre></div><h2 id="写作风格" tabindex="-1">写作风格 <a class="header-anchor" href="#写作风格" aria-label="Permalink to &quot;写作风格&quot;">​</a></h2><p>(1)尽量不使用被动语态，改为使用主动语态。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：假如此软件尚未被安装，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：假如尚未安装这个软件，</span></span></code></pre></div><p>(2)不使用非正式的语言风格。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：无法参加本次活动，我深感遗憾。</span></span></code></pre></div><p>(3)不使用冷僻、生造或者文言文的词语，而要使用现代汉语的常用表达方式。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：这是唯二的快速启动的方法。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：这是仅有的两种快速启动的方法。</span></span></code></pre></div><p>(4)用对“的”、“地”、“得”。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>她露出了开心的笑容。</span></span>
<span class="line"><span>(形容词＋的＋名词)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>她开心地笑了。</span></span>
<span class="line"><span>(副词＋地＋动词)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>她笑得很开心。</span></span>
<span class="line"><span>(动词＋得＋副词)</span></span></code></pre></div><p>(5)使用代词时(比如“其”、“该”、“此”、“这”等词)，必须明确指代的内容，保证只有一个含义。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：从管理系统可以监视中继系统和受其直接控制的分配系统。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。</span></span></code></pre></div><p>(6)名词前不要使用过多的形容词。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>错误：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。</span></span></code></pre></div><h2 id="英文处理" tabindex="-1">英文处理 <a class="header-anchor" href="#英文处理" aria-label="Permalink to &quot;英文处理&quot;">​</a></h2><p>(1)英文原文如果使用了复数形式，翻译成中文时，应该将其还原为单数形式。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>英文：...information stored in random access memory (RAMs)...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中文：⋯⋯存储在随机存取存储器(RAM)里的信息⋯⋯</span></span></code></pre></div><p>(2)外文缩写可以使用半角圆点(<code>.</code>)表示缩写。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>U.S.A.</span></span>
<span class="line"><span>Apple， Inc.</span></span></code></pre></div><p>(3)表示中文时，英文省略号(<code>...</code>)应改为中文省略号(<code>⋯⋯</code>)。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>英文：5 minutes later...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中文：5 分钟过去了⋯⋯</span></span></code></pre></div><p>(4)英文书名或电影名改用中文表达时，双引号应改为书名号。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>英文：He published an article entitled &quot;The Future of the Aviation&quot;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中文：他发表了一篇名为《航空业的未来》的文章。</span></span></code></pre></div><p>(5)第一次出现英文词汇时，在括号中给出中文标注。此后再次出现时，直接使用英文缩写即可。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>IOC(International Olympic Committee，国际奥林匹克委员会)。这样定义后，便可以直接使用“IOC”了。</span></span></code></pre></div><p>(6)专有名词中每个词第一个字母均应大写，非专有名词则不需要大写。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>“American Association of Physicists in Medicine”(美国医学物理学家协会)是专有名词，需要大写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>“online transaction processing”(在线事务处理)不是专有名词，不应大写。</span></span></code></pre></div><h2 id="名词" tabindex="-1">名词 <a class="header-anchor" href="#名词" aria-label="Permalink to &quot;名词&quot;">​</a></h2><h3 id="专有名词使用正确的大小写" tabindex="-1">专有名词使用正确的大小写 <a class="header-anchor" href="#专有名词使用正确的大小写" aria-label="Permalink to &quot;专有名词使用正确的大小写&quot;">​</a></h3><p>大小写相关用法原属于英文书写范畴，不属于本 Wiki 讨论内容，在这里只对部分易错用法进行简述。</p><p>正确：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>使用 GitHub 登录</span></span>
<span class="line"><span>我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook， Inc.。</span></span></code></pre></div><p>错误：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>使用 github 登录</span></span>
<span class="line"><span>使用 GITHUB 登录</span></span>
<span class="line"><span>使用 GitHub 登录</span></span>
<span class="line"><span>使用 gitHub 登录</span></span>
<span class="line"><span>使用 gｲんĤЦ8 登录</span></span>
<span class="line"><span>我们的客户有 github、foursquare、microsoft corporation、google、facebook， inc.。</span></span>
<span class="line"><span>我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK， INC.。</span></span>
<span class="line"><span>我们的客户有 GitHub、FourSquare、MicroSoft Corporation、Google、FaceBook， Inc.。</span></span>
<span class="line"><span>我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook， Inc.。</span></span>
<span class="line"><span>我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к， IПᄃ.。</span></span></code></pre></div><p>注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标淮的大小写规范进行书写；并通过 text-transform: uppercase;／text-transform: lowercase; 对表现形式进行定义。</p><h3 id="不要使用不地道的缩写" tabindex="-1">不要使用不地道的缩写 <a class="header-anchor" href="#不要使用不地道的缩写" aria-label="Permalink to &quot;不要使用不地道的缩写&quot;">​</a></h3><p>正确：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架(如 Backbone.js、AngularJS、React 等)的前端开发者。</span></span></code></pre></div><p>错误：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我们需要一位熟悉 Js、h5，至少理解一种框架(如 backbone、angular、RJS 等)的 FED。</span></span></code></pre></div>`,62)]))}const g=s(t,[["render",i]]);export{u as __pageData,g as default};