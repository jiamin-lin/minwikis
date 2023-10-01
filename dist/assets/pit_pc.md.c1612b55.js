import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5035e6c.js";const d=JSON.parse('{"title":"PC 踩坑记录","description":"","frontmatter":{"outline":2},"headers":[],"relativePath":"pit/pc.md","lastUpdated":1695991067000}'),p={name:"pit/pc.md"},e=l(`<h1 id="pc-踩坑记录" tabindex="-1">PC 踩坑记录 <a class="header-anchor" href="#pc-踩坑记录" aria-label="Permalink to &quot;PC 踩坑记录&quot;">​</a></h1><h2 id="transform-导致字体不清晰" tabindex="-1"><code>transform</code> 导致字体不清晰 <a class="header-anchor" href="#transform-导致字体不清晰" aria-label="Permalink to &quot;\`transform\` 导致字体不清晰&quot;">​</a></h2><p><code>transform</code> 在<strong>渲染非整数的 <code>px</code> 时</strong>就会出现字体模糊</p><h4 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h4><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 方案一 */</span></span>
<span class="line"><span style="color:#BABED8;">目标元素 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-webkit-font-smoothing</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> antialiased</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 方案二 */</span></span>
<span class="line"><span style="color:#BABED8;">目标元素 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">perspective</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><a href="https://css-tricks.com/forums/topic/transforms-cause-font-smoothing-weirdness-in-webkit/" target="_blank" rel="noreferrer">详细说明 CSS-TRACKS</a></p><h2 id="删除-pwa-服务后-浏览器无法更新到最新页面" tabindex="-1">删除 <code>PWA</code> 服务后，浏览器无法更新到最新页面 <a class="header-anchor" href="#删除-pwa-服务后-浏览器无法更新到最新页面" aria-label="Permalink to &quot;删除 \`PWA\` 服务后，浏览器无法更新到最新页面&quot;">​</a></h2><p>本站之前使用了 <code>PWA</code>，在切换到 <code>vitepress</code> 后移除了 <code>PWA</code> 服务，在部署后浏览器仍然访问的是 <code>vuepress</code> 版本的</p><h4 id="解决方法-1" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法-1" aria-label="Permalink to &quot;解决方法&quot;">​</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 注销 PWA 服务 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> (window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">navigator </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> navigator</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">serviceWorker) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">serviceWorker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getRegistrations</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">registrations</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">registration</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">registrations</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">registration</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unregister</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 删除浏览器中的缓存 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">caches</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">in</span><span style="color:#BABED8;"> window) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">caches</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keyList</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">keyList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">caches</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,10),o=[e];function r(t,c,i,F,y,D){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};
