// HTML Tutorial page styled like Tailwind docs
import React from 'react';
import LiveHtmlEditor from '../components/LiveHtmlEditor';

export default function HtmlTutorial() {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 pr-8 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-20 bg-slate-900 border-r border-slate-800">
        <nav className="pt-12">
          <ul className="flex flex-col gap-1 text-fuchsia-200 text-base">
            <li><a href="#home" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Home</a></li>
            <li><a href="#intro" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Introduction</a></li>
            <li><a href="#editors" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Editors</a></li>
            <li><a href="#basic" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Basic</a></li>
            <li><a href="#elements" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Elements</a></li>
            <li><a href="#attributes" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Attributes</a></li>
            <li><a href="#headings" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Headings</a></li>
            <li><a href="#paragraphs" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Paragraphs</a></li>
            <li><a href="#styles" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Styles</a></li>
            <li><a href="#formatting" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Formatting</a></li>
            <li><a href="#quotations" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Quotations</a></li>
            <li><a href="#comments" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Comments</a></li>
            <li><a href="#colors" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Colors</a></li>
            <li><a href="#links" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Links</a></li>
            <li><a href="#images" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Images</a></li>
            <li><a href="#tables" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Tables</a></li>
            <li><a href="#lists" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Lists</a></li>
            <li><a href="#forms" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Forms</a></li>
            <li><a href="#block-inline" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Block & Inline</a></li>
            <li><a href="#classes" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Classes</a></li>
            <li><a href="#id" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Id</a></li>
            <li><a href="#iframes" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Iframes</a></li>
            <li><a href="#javascript" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML JavaScript</a></li>
            <li><a href="#filepaths" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML File Paths</a></li>
            <li><a href="#head" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Head</a></li>
            <li><a href="#layout" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Layout</a></li>
            <li><a href="#responsive" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Responsive</a></li>
            <li><a href="#computercode" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Computercode</a></li>
            <li><a href="#semantics" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Semantics</a></li>
            <li><a href="#styleguide" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Style Guide</a></li>
            <li><a href="#entities" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Entities</a></li>
            <li><a href="#symbols" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Symbols</a></li>
            <li><a href="#emojis" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">HTML Emojis</a></li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="w-full flex justify-center">
        <div className="max-w-4xl flex-1 pt-28 px-4 sm:px-8 md:ml-64">
          <header className="mb-10 border-b border-fuchsia-600 pb-6">
            <h1 className="text-4xl font-bold text-fuchsia-400 mb-2" id="home">HTML Fundamentals</h1>
            <p className="text-lg text-fuchsia-200">Learn the building blocks of the web. This guide covers the basics of HTML, its structure, and how to create your first web page.</p>
          </header>
          {/* Introduction */}
          <section id="intro" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Introduction</h2>
            <p className="text-slate-200 mb-4">HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.</p>
          </section>
          {/* Editors */}
          <section id="editors" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Editors</h2>
            <p className="text-slate-200 mb-4">You can write HTML using any text editor, such as Notepad, VS Code, or Sublime Text. Save your file with a <code className="bg-slate-700 px-1 rounded">.html</code> extension and open it in your browser to view the result.</p>
          </section>
          {/* Basic */}
          <section id="basic" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Basic</h2>
            <LiveHtmlEditor initialCode={`<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>This is my first HTML page.</p>\n  </body>\n</html>`} />
            <p className="text-slate-200">This is the basic structure of an HTML document.</p>
          </section>
          {/* Elements */}
          <section id="elements" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Elements</h2>
            <p className="text-slate-200 mb-4">HTML elements are the building blocks of web pages. An element usually consists of an opening tag, content, and a closing tag. For example, <code className="bg-slate-700 px-1 rounded">&lt;p&gt;This is a paragraph.&lt;/p&gt;</code> creates a paragraph element. Elements can also be nested inside each other.</p>
            <LiveHtmlEditor initialCode={`<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<a href='https://www.example.com'>This is a link</a>`} />
            <ul className="list-disc pl-6 text-slate-200 mb-2">
              <li>Most elements have an opening and closing tag (e.g., <code className="bg-slate-700 px-1 rounded">&lt;h1&gt;...&lt;/h1&gt;</code>).</li>
              <li>Some elements are self-closing (e.g., <code className="bg-slate-700 px-1 rounded">&lt;img /&gt;</code>).</li>
              <li>Elements can contain text, other elements, or both.</li>
            </ul>
          </section>
          {/* Attributes */}
          <section id="attributes" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Attributes</h2>
            <p className="text-slate-200 mb-4">Attributes provide extra information about HTML elements. They are always included in the opening tag and usually come in name/value pairs like <code className="bg-slate-700 px-1 rounded">name="value"</code>. For example, the <code className="bg-slate-700 px-1 rounded">href</code> attribute in an anchor tag specifies the link's destination.</p>
            <LiveHtmlEditor initialCode={`<a href='https://www.google.com' target='_blank'>Visit Google</a>\n<br />\n<img src='https://placehold.co/150x80/8b5cf6/fff?text=Sample+Image' alt='Placeholder image' style='margin-top:10px;border-radius:8px;' />`} />
            <ul className="list-disc pl-6 text-slate-200 mb-2">
              <li>Common attributes: <code className="bg-slate-700 px-1 rounded">href</code>, <code className="bg-slate-700 px-1 rounded">src</code>, <code className="bg-slate-700 px-1 rounded">alt</code>, <code className="bg-slate-700 px-1 rounded">title</code>, <code className="bg-slate-700 px-1 rounded">id</code>, <code className="bg-slate-700 px-1 rounded">class</code>.</li>
              <li>Attribute values should be enclosed in quotes.</li>
            </ul>
          </section>
          {/* Headings */}
          <section id="headings" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Headings</h2>
            <p className="text-slate-200 mb-4">Headings are defined with <code className="bg-slate-700 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-slate-700 px-1 rounded">&lt;h6&gt;</code> tags. <code className="bg-slate-700 px-1 rounded">&lt;h1&gt;</code> is the most important, and <code className="bg-slate-700 px-1 rounded">&lt;h6&gt;</code> is the least. Use headings to structure your content and improve accessibility and SEO.</p>
            <LiveHtmlEditor initialCode={`<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection</h3>`} />
            <ul className="list-disc pl-6 text-slate-200 mb-2">
              <li>Use only one <code className="bg-slate-700 px-1 rounded">&lt;h1&gt;</code> per page for the main title.</li>
              <li>Headings help users and search engines understand your page structure.</li>
            </ul>
          </section>
          {/* Paragraphs */}
          <section id="paragraphs" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Paragraphs</h2>
            <p className="text-slate-200 mb-4">Paragraphs are defined with the <code className="bg-slate-700 px-1 rounded">&lt;p&gt;</code> tag. Browsers automatically add some space before and after each paragraph.</p>
            <LiveHtmlEditor initialCode={`<p>This is a simple paragraph of text in HTML.</p>\n<p>Paragraphs make your content easier to read.</p>`} />
            <ul className="list-disc pl-6 text-slate-200 mb-2">
              <li>Paragraphs cannot be nested inside each other.</li>
              <li>Use paragraphs to break up long blocks of text.</li>
            </ul>
          </section>
          {/* Styles */}
          <section id="styles" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Styles</h2>
            <p className="text-slate-200 mb-4">You can style HTML elements directly using the <code className="bg-slate-700 px-1 rounded">style</code> attribute. This allows you to set CSS properties like color, font, and background for individual elements. For larger projects, it's better to use a separate CSS file.</p>
            <LiveHtmlEditor initialCode={`<p style='color: #a21caf; background: #f3e8ff; padding: 8px; border-radius: 6px;'>Styled paragraph using the style attribute.</p>`} />
            <ul className="list-disc pl-6 text-slate-200 mb-2">
              <li>Inline styles override external and internal CSS.</li>
              <li>Use inline styles for quick demos, not for production code.</li>
            </ul>
          </section>
          {/* Formatting */}
          <section id="formatting" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Formatting</h2>
            <p className="text-slate-200 mb-4">Formatting tags help you emphasize or style text. Common tags include <code className="bg-slate-700 px-1 rounded">&lt;b&gt;</code> (bold), <code className="bg-slate-700 px-1 rounded">&lt;i&gt;</code> (italic), <code className="bg-slate-700 px-1 rounded">&lt;u&gt;</code> (underline), <code className="bg-slate-700 px-1 rounded">&lt;mark&gt;</code> (highlight), and <code className="bg-slate-700 px-1 rounded">&lt;small&gt;</code> (smaller text).</p>
            <LiveHtmlEditor initialCode={`<b>Bold text</b> <i>Italic text</i> <u>Underlined text</u> <mark>Highlighted</mark> <small>Small text</small>`} />
            <ul className="list-disc pl-6 text-slate-200 mb-2">
              <li>Use formatting tags to improve readability and highlight important content.</li>
            </ul>
          </section>
          {/* Quotations */}
          <section id="quotations" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Quotations</h2>
            <p className="text-slate-200 mb-4">Use <code className="bg-slate-700 px-1 rounded">&lt;blockquote&gt;</code> for long quotations, <code className="bg-slate-700 px-1 rounded">&lt;q&gt;</code> for short inline quotes, and <code className="bg-slate-700 px-1 rounded">&lt;cite&gt;</code> for citing sources.</p>
            <LiveHtmlEditor initialCode={`<blockquote cite='https://www.example.com'>This is a blockquote from an external source.</blockquote>\n<p>He said, <q>This is an inline quote.</q></p>\n<cite>— Source Name</cite>`} />
          </section>
          {/* Comments */}
          <section id="comments" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Comments</h2>
            <p className="text-slate-200 mb-4">Comments are not displayed in the browser. Use them to leave notes in your code. Syntax: <code className="bg-slate-700 px-1 rounded">&lt;!-- This is a comment --&gt;</code></p>
            <LiveHtmlEditor initialCode={`<!-- This is a comment -->\n<p>Comments are not visible in the output.</p>`} />
          </section>
          {/* Colors */}
          <section id="colors" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Colors</h2>
            <p className="text-slate-200 mb-4">You can set colors using names (<code>red</code>), HEX codes (<code>#ff0000</code>), RGB (<code>rgb(255,0,0)</code>), or HSL (<code>hsl(0, 100%, 50%)</code>).</p>
            <LiveHtmlEditor initialCode={`<p style='color: red;'>Red text</p>\n<p style='color: #a21caf;'>Fuchsia text (HEX)</p>\n<p style='color: rgb(34,197,94);'>Green text (RGB)</p>\n<p style='color: hsl(220, 98%, 61%);'>Blue text (HSL)</p>`} />
          </section>
          {/* Links */}
          <section id="links" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Links</h2>
            <p className="text-slate-200 mb-4">Links are created with the <code className="bg-slate-700 px-1 rounded">&lt;a&gt;</code> tag.</p>
          </section>
          {/* Images */}
          <section id="images" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Images</h2>
            <p className="text-slate-200 mb-4">Images are displayed with the <code className="bg-slate-700 px-1 rounded">&lt;img&gt;</code> tag.</p>
          </section>
          {/* Tables */}
          <section id="tables" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Tables</h2>
            <p className="text-slate-200 mb-4">Tables are created with <code className="bg-slate-700 px-1 rounded">&lt;table&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;tr&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;td&gt;</code>, and <code className="bg-slate-700 px-1 rounded">&lt;th&gt;</code> tags.</p>
          </section>
          {/* Lists */}
          <section id="lists" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Lists</h2>
            <p className="text-slate-200 mb-4">Lists are created with <code className="bg-slate-700 px-1 rounded">&lt;ul&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;ol&gt;</code>, and <code className="bg-slate-700 px-1 rounded">&lt;li&gt;</code> tags.</p>
          </section>
          {/* Forms */}
          <section id="forms" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Forms</h2>
            <p className="text-slate-200 mb-4">Forms are created with the <code className="bg-slate-700 px-1 rounded">&lt;form&gt;</code> tag and various input elements.</p>
          </section>
          {/* Block & Inline */}
          <section id="block-inline" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Block & Inline</h2>
            <p className="text-slate-200 mb-4">Block elements start on a new line (e.g., <code className="bg-slate-700 px-1 rounded">&lt;div&gt;</code>), while inline elements do not (e.g., <code className="bg-slate-700 px-1 rounded">&lt;span&gt;</code>).</p>
          </section>
          {/* Classes */}
          <section id="classes" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Classes</h2>
            <p className="text-slate-200 mb-4">The <code className="bg-slate-700 px-1 rounded">class</code> attribute is used to define equal styles for elements with the same class name.</p>
          </section>
          {/* Id */}
          <section id="id" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Id</h2>
            <p className="text-slate-200 mb-4">The <code className="bg-slate-700 px-1 rounded">id</code> attribute specifies a unique id for an element.</p>
          </section>
          {/* Iframes */}
          <section id="iframes" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Iframes</h2>
            <p className="text-slate-200 mb-4">Iframes are used to embed another document within the current HTML document using the <code className="bg-slate-700 px-1 rounded">&lt;iframe&gt;</code> tag.</p>
          </section>
          {/* JavaScript */}
          <section id="javascript" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML JavaScript</h2>
            <p className="text-slate-200 mb-4">JavaScript can be added to HTML pages using the <code className="bg-slate-700 px-1 rounded">&lt;script&gt;</code> tag.</p>
          </section>
          {/* File Paths */}
          <section id="filepaths" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML File Paths</h2>
            <p className="text-slate-200 mb-4">File paths specify the location of files, such as images or scripts, used in your HTML.</p>
          </section>
          {/* Head */}
          <section id="head" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Head</h2>
            <p className="text-slate-200 mb-4">The <code className="bg-slate-700 px-1 rounded">&lt;head&gt;</code> element contains meta-information about the HTML document.</p>
          </section>
          {/* Layout */}
          <section id="layout" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Layout</h2>
            <p className="text-slate-200 mb-4">Layout elements include <code className="bg-slate-700 px-1 rounded">&lt;div&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;header&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;footer&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;section&gt;</code>, and <code className="bg-slate-700 px-1 rounded">&lt;article&gt;</code>.</p>
          </section>
          {/* Responsive */}
          <section id="responsive" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Responsive</h2>
            <p className="text-slate-200 mb-4">Responsive web design makes your web page look good on all devices using CSS and meta tags.</p>
          </section>
          {/* Computercode */}
          <section id="computercode" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Computercode</h2>
            <p className="text-slate-200 mb-4">Tags like <code className="bg-slate-700 px-1 rounded">&lt;code&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;pre&gt;</code>, and <code className="bg-slate-700 px-1 rounded">&lt;kbd&gt;</code> are used to display computer code.</p>
          </section>
          {/* Semantics */}
          <section id="semantics" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Semantics</h2>
            <p className="text-slate-200 mb-4">Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples: <code className="bg-slate-700 px-1 rounded">&lt;article&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;section&gt;</code>, <code className="bg-slate-700 px-1 rounded">&lt;nav&gt;</code>.</p>
          </section>
          {/* Style Guide */}
          <section id="styleguide" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Style Guide</h2>
            <p className="text-slate-200 mb-4">A style guide helps you write consistent, readable HTML code. Use proper indentation, lowercase tags, and meaningful names.</p>
          </section>
          {/* Entities */}
          <section id="entities" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Entities</h2>
            <p className="text-slate-200 mb-4">Entities are used to display reserved characters. Example: <code className="bg-slate-700 px-1 rounded">&amp;lt;</code> for <code className="bg-slate-700 px-1 rounded">&lt;</code>.</p>
          </section>
          {/* Symbols */}
          <section id="symbols" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Symbols</h2>
            <p className="text-slate-200 mb-4">HTML symbols include mathematical, currency, and other special characters using entities.</p>
          </section>
          {/* Emojis */}
          <section id="emojis" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">HTML Emojis</h2>
            <p className="text-slate-200 mb-4">You can add emojis to your HTML using Unicode or emoji entities.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
