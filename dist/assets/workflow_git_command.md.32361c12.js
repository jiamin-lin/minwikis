import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5035e6c.js";const D=JSON.parse('{"title":"Git 命令清单","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/git/command.md","lastUpdated":1695991067000}'),p={name:"workflow/git/command.md"},e=l(`<h1 id="git-命令清单" tabindex="-1">Git 命令清单 <a class="header-anchor" href="#git-命令清单" aria-label="Permalink to &quot;Git 命令清单&quot;">​</a></h1><h2 id="_1-新建-git-仓库" tabindex="-1">1. 新建 git 仓库 <a class="header-anchor" href="#_1-新建-git-仓库" aria-label="Permalink to &quot;1. 新建 git 仓库&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 在当前目录新建一个 Git 仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个目录，将其初始化为 Git 仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span><span style="color:#BABED8;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> [url]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-配置" tabindex="-1">2. 配置 <a class="header-anchor" href="#_2-配置" aria-label="Permalink to &quot;2. 配置&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> [--global] user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">名称</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> [--global] user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">邮箱地址</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-向暂存区添加-删除文件" tabindex="-1">3. 向暂存区添加 / 删除文件 <a class="header-anchor" href="#_3-向暂存区添加-删除文件" aria-label="Permalink to &quot;3. 向暂存区添加 / 删除文件&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 添加指定文件或指定目录到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [文件路径 </span><span style="color:#C3E88D;">/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">目录路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加所有文件到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止追踪指定文件并保留在工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#BABED8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除工作区文件并且提交到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#BABED8;"> [文件路径]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-代码提交" tabindex="-1">4. 代码提交 <a class="header-anchor" href="#_4-代码提交" aria-label="Permalink to &quot;4. 代码提交&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> [提交信息]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> [提交信息]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5-分支" tabindex="-1">5. 分支 <a class="header-anchor" href="#_5-分支" aria-label="Permalink to &quot;5. 分支&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> [分支名] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">commit id</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--track</span><span style="color:#BABED8;"> [分支名] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">远程分支名</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个空白分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--orphan</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--delete</span><span style="color:#BABED8;"> [分支名]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-dr</span><span style="color:#BABED8;"> [remote/分支名]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_6-标签" tabindex="-1">6. 标签 <a class="header-anchor" href="#_6-标签" aria-label="Permalink to &quot;6. 标签&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 列出所有 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 根据当前 commit 创建一个 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#BABED8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 根据指定 commit 创建一个 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#BABED8;"> [tag] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">commit id</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除本地 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#BABED8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 tag 信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交指定 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> [remote] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交所有 tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#BABED8;"> [分支名] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_7-查看信息" tabindex="-1">7. 查看信息 <a class="header-anchor" href="#_7-查看信息" aria-label="Permalink to &quot;7. 查看信息&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示变更的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#BABED8;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--follow</span><span style="color:#BABED8;"> [文件路径]</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">whatchanged</span><span style="color:#BABED8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-5</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--pretty</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">shortlog</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">blame</span><span style="color:#BABED8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示工作区与当前分支最新 commit 之间的差异</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--shortstat</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@{0 day ago}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reflog</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_8-提交" tabindex="-1">8. 提交 <a class="header-anchor" href="#_8-提交" aria-label="Permalink to &quot;8. 提交&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#BABED8;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">show</span><span style="color:#BABED8;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [name] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看远程仓库地址</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">get-url</span><span style="color:#BABED8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#BABED8;"> [remote] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> [remote] </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">push</span><span style="color:#BABED8;"> [remote] --all</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_9-撤销" tabindex="-1">9. 撤销 <a class="header-anchor" href="#_9-撤销" aria-label="Permalink to &quot;9. 撤销&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#BABED8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置暂存区与工作区，与上一次 commit 保持一致</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#BABED8;"> [commit </span><span style="color:#C3E88D;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#BABED8;"> [commit </span><span style="color:#C3E88D;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--keep</span><span style="color:#BABED8;"> [commit </span><span style="color:#C3E88D;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#BABED8;"> [commit </span><span style="color:#C3E88D;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 暂存操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 只暂存被追踪的文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 暂存所有文件并添加说明</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> [save </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">说明信息</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#BABED8;"> [-u]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 stash 列表</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取出最近一次的 stash</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apply</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取出 stash 列表里对应数字的暂存</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apply</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">数字</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取出并删除最近一次的 stash</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清空所有 stash</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clear</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_10-日志" tabindex="-1">10. 日志 <a class="header-anchor" href="#_10-日志" aria-label="Permalink to &quot;10. 日志&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看提交过的完整日志</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看精简日志（精简版本号和提交信息）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看精简日志（完整版本号和提交信息）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">log</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--pretty=oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reflog</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a href="https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noreferrer">参考地址：阮一峰 -- 常用 Git 命令清单</a></p>`,22),o=[e];function c(r,t,i,y,B,b){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{D as __pageData,m as default};
