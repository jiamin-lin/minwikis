import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.a5035e6c.js";const e="/assets/prototype.5e0ee628.png",l="/assets/constructor.30520a4c.png",p="/assets/proto__.907e6322.png",t="/assets/prototype-chain.1676a8ec.png",c="/assets/prototypes-1.9e629aa1.jpg",A=JSON.parse('{"title":"原型和原型链","description":"","frontmatter":{},"headers":[],"relativePath":"fe/javascript/prototype.md","lastUpdated":1695991067000}'),r={name:"fe/javascript/prototype.md"},i=o(`<h1 id="原型和原型链" tabindex="-1">原型和原型链 <a class="header-anchor" href="#原型和原型链" aria-label="Permalink to &quot;原型和原型链&quot;">​</a></h1><p>原型和原型链是 <code>JavaScript</code> 中非常重要的概念，其对于理解 <code>JavaScript</code> 的对象模型和继承非常重要。通过原型和原型链，我们可以实现基于原型的继承、寄生式继承、组合式继承等多种继承方式，从而使代码更加简洁、易读、易于维护。</p><h2 id="构造函数与实例" tabindex="-1">构造函数与实例 <a class="header-anchor" href="#构造函数与实例" aria-label="Permalink to &quot;构造函数与实例&quot;">​</a></h2><p>使用 <code>new</code> 运算符与构造函数是常用的创建对象的方式之一。构造函数是一种特殊的函数，用于创建新的对象实例，当我们使用 <code>new</code> 运算符调用一个函数时，它就成为了构造函数，因为它被用来构造一个新的对象实例</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 构造函数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对象实例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> person1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(person1) </span><span style="color:#676E95;font-style:italic;">// Person {name: &#39;maomao&#39;}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">构造函数的特征</p><ol><li>函数名通常以大写字母开头，以便将其与普通函数区分开来（本质上没有任何区别） <ol><li><strong>使用 <code>new</code> 运算符生成实例的函数就是构造函数</strong></li><li><strong>直接调用的函数就是普通函数</strong></li></ol></li><li>构造函数中通常使用 <code>this</code> 关键字来指代将要创建的对象实例</li><li>构造函数中通常使用属性或方法来定义新对象实例的状态和行为</li></ol></div><h2 id="prototype" tabindex="-1"><code>prototype</code> <a class="header-anchor" href="#prototype" aria-label="Permalink to &quot;\`prototype\`&quot;">​</a></h2><p>在 <code>JavaScript</code> 中，每个函数都有一个原型属性 <code>prototype</code>，其指向<strong>调用该构造函数而创建的实例的原型</strong>（原型可以是 <code>null</code> 或其他对象）</p><p><img src="`+e+`" alt="prototype"></p><p>在原型对象（<code>prototype</code>）上定义的属性和方法会被对象实例共享</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对象实例 person1</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> person1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对象实例 person2</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> person2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(person1</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> person2</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name) </span><span style="color:#676E95;font-style:italic;">// &#39;maomao&#39; &#39;maomao&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="constructor" tabindex="-1"><code>constructor</code> <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;\`constructor\`&quot;">​</a></h2><p>每一个原型对象 <code>prototype</code> 都有一个 <code>constructor</code> 属性，其<strong>指向原型的构造函数</strong></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// { constructor: ƒ Person(name) }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> Person </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="`+l+`" alt="constructor"></p><h2 id="proto" tabindex="-1"><code>__proto__</code> <a class="header-anchor" href="#proto" aria-label="Permalink to &quot;\`__proto__\`&quot;">​</a></h2><p>在 <code>JavaScript</code> 中，每个对象都有一个 <code>__proto__</code> 属性，其<strong>指向创建该对象的函数的 <code>prototype</code></strong>，即<strong>构造函数的原型</strong>（也称其为隐私原型）</p><div class="warning custom-block"><p class="custom-block-title"><code>__proto__</code> 注意点</p><p><code>__proto__</code> 用来读取或设置当前对象的原型对象，其本质上是一个内部属性，不是一个正式的对外的 <code>API</code>，只是由于浏览器广泛支持，才被加入了 <code>ES6</code> 以确保 <code>Web</code> 浏览器的兼容性，同时该属性已不推荐使用，在实际开发中更推荐使用 ES6 提供的 <code>JavaScript</code></p><ul><li>读取当前对象的原型对象 <ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" target="_blank" rel="noreferrer">Object.getPrototypeOf</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf" target="_blank" rel="noreferrer">Reflect.getPrototypeOf</a></li></ul></li><li>设置当前对象的原型对象 <ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noreferrer">Object.setPrototypeOf</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf" target="_blank" rel="noreferrer">Reflect.setPrototypeOf</a></li></ul></li></ul></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 构造函数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对象实例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> person </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maomao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#BABED8;">(person) </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">Reflect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#BABED8;">(person) </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="`+p+'" alt="proto"></p><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h2><p>每个对象都拥有一个原型对象，通过 <code>__proto__</code> 指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 <code>null</code>。这个<strong>链式结构</strong>被称为<strong>原型链</strong>。</p><p><img src="'+t+`" alt="prototype-chain"></p><div class="tip custom-block"><p class="custom-block-title"><code>Object.prototype.__proto__ === null</code></p><p><code>Object.prototype</code> 是 <code>JavaScript</code> 中所有对象的原型。其定义了所有 <code>JavaScript</code> 对象都可以使用的属性和方法，例如 <code>toString()</code> <code>hasOwnProperty()</code> 等<br> 同时 <code>Object.prototype</code> 自身也是一个对象，因此它也有一个原型，而该原型是 <code>null</code>，这是 <code>JavaScript</code> 原型链的顶部。因此 <code>Object.prototype.__proto__ === null</code>（为了让原型链有终点）</p></div><p>通过原型链一个对象会拥有定义在其他对象中的属性和方法，从而使得对象之间可以共享属性和方法，从而避免重复代码的出现。</p><p>所以当我们尝试访问一个对象的属性时，<code>JavaScript</code> 首先在对象本身中查找该属性。如果它没有找到该属性，它会继续在对象的原型中查找，然后在原型的原型中查找，以此类推，直到找到该属性或原型链的顶部</p><h2 id="object-和-function" tabindex="-1"><code>Object</code> 和 <code>Function</code> <a class="header-anchor" href="#object-和-function" aria-label="Permalink to &quot;\`Object\` 和 \`Function\`&quot;">​</a></h2><blockquote><p>都是给自己看的结论和总结</p></blockquote><h3 id="引用类型都是对象" tabindex="-1">引用类型都是对象 <a class="header-anchor" href="#引用类型都是对象" aria-label="Permalink to &quot;引用类型都是对象&quot;">​</a></h3><p>在 <code>JavaScript</code> 中<strong>一切引用类型都是对象（函数是一种函数对象）</strong>，对象是属性的集合</p><blockquote><p>即引用类型都是 <code>Object</code> 的子类</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 为对象定义属性 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">obj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 为数组定义属性 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> []</span></span>
<span class="line"><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// &#39;arr&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 为函数定义属性 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// &#39;fn&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="function" tabindex="-1"><code>Function</code> <a class="header-anchor" href="#function" aria-label="Permalink to &quot;\`Function\`&quot;">​</a></h3><p><code>ECMAScript</code> 上的定义（<a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.3" target="_blank" rel="noreferrer">15.3.3</a>）</p><blockquote><p>The Function constructor is itself a Function object and its [[Class]] is &quot;Function&quot;. The value of the [[Prototype]] internal property of the Function constructor is the standard built-in Function prototype object.</p></blockquote><p><code>Function</code> 构造函数是一个函数对象，其 <code>[[Class]]</code> 属性是 <code>Function</code>。<code>Function</code> 的 <code>[[Prototype]]</code>（即<code>__proto__</code>）属性指向了 <code>Function.prototype</code></p><div class="tip custom-block"><p class="custom-block-title"><code>Function.prototype</code> 注意点</p><p><code>Function.prototype</code> 是一个函数，但其没有 <code>prototype</code>，同时 <code>Function.prototype.bind()</code> 方法创建的函数对象也没有 <code>prototype</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// &#39;function&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ƒ () { [native code] }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fn</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>Function.prototype</code> 是引擎创建出来的函数，引擎认为不需要给这个函数对象添加 <code>prototype</code> 属性，不然 <code>Function.prototype.prototype</code> 将无休无止并且没有存在的意义</p></div><p>同时每个 <code>JavaScript</code> 函数实际上都是一个 <code>Function</code> 对象，即 <code>Function</code> 的实例</p><p>所以会有这些奇怪的现象</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">Function </span><span style="color:#89DDFF;">instanceof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实际如下</span></span>
<span class="line"><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">Object </span><span style="color:#89DDFF;">instanceof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实际如下</span></span>
<span class="line"><span style="color:#BABED8;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">Function </span><span style="color:#89DDFF;">instanceof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 实际如下</span></span>
<span class="line"><span style="color:#BABED8;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>经典图</p></blockquote><p><img src="`+c+'" alt="prototypes"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>所有的引用类型（数组、对象、函数）都是对象（对象是属性的集合）</li><li>所有的函数都是 <code>Function</code> 的实例</li><li><code>Object.prototype</code> 和 <code>Function.prototype</code> 均由引擎根据 <code>ECMAScript</code> 规范创建的两个特殊对象</li><li>所有的函数都有一个 <code>prototype</code> 属性（原型）指向调用该构造函数而创建的实例的原型</li><li>所有的对象都有一个 <code>__proto__</code> 属性（隐式原型）指向创建该对象的函数的 <code>prototype</code>（实例的隐式原型 === 构造函数的原型）</li><li>每个对象都拥有一个原型对象，通过 <code>__proto__</code> 指针指向上一个原型 ，同时原型对象也可能拥有原型，这样一层一层，最终指向 <code>null</code>。这个<strong>链式结构</strong>被称为<strong>原型链</strong></li></ul><h2 id="相关文章" tabindex="-1">相关文章 <a class="header-anchor" href="#相关文章" aria-label="Permalink to &quot;相关文章&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/wangfupeng1988/p/3977924.html" target="_blank" rel="noreferrer">深入理解 javascript 原型和闭包</a></li><li><a href="http://www.mollypages.org/tutorials/js.mp" target="_blank" rel="noreferrer">Javascript Object Hierarchy</a></li><li><a href="https://zhuanlan.zhihu.com/p/356980105" target="_blank" rel="noreferrer">JavaScript 世界万物诞生记</a></li><li><a href="https://github.com/jawil/blog/issues/13" target="_blank" rel="noreferrer">从探究 <code>Function.__proto__ === Function.prototype</code> 过程中的一些收获</a></li><li><a href="https://github.com/yygmind/blog/issues/35" target="_blank" rel="noreferrer">深入探究 Function &amp; Object 鸡蛋问题</a></li></ul>',46),y=[i];function D(d,F,B,b,u,m){return n(),a("div",null,y)}const h=s(r,[["render",D]]);export{A as __pageData,h as default};
