import React from 'react';
import LiveHtmlEditor from '../components/LiveHtmlEditor';

export default function CssTutorial() {
  return (
    <div className="min-h-screen bg-slate-900 flex pt-28">
      <aside className="hidden md:block w-64 pr-8 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-20 bg-slate-900 border-r border-slate-800">
        <nav className="pt-12">
          <ul className="flex flex-col gap-2 text-fuchsia-200 text-base">
            <li><a href="#home" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Home</a></li>
            <li><a href="#intro" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Introduction</a></li>
            <li><a href="#syntax" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Syntax</a></li>
            <li><a href="#selectors" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Selectors</a></li>
            <li><a href="#colors" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Colors</a></li>
            <li><a href="#backgrounds" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Backgrounds</a></li>
            <li><a href="#borders" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Borders</a></li>
            <li><a href="#margins" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Margins</a></li>
            <li><a href="#padding" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Padding</a></li>
            <li><a href="#heightwidth" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Height/Width</a></li>
            <li><a href="#boxmodel" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Box Model</a></li>
            <li><a href="#text" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Text</a></li>
            <li><a href="#fonts" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Fonts</a></li>
            <li><a href="#links" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Links</a></li>
            <li><a href="#lists" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Lists</a></li>
            <li><a href="#tables" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Tables</a></li>
            <li><a href="#display" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Display</a></li>
            <li><a href="#position" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Position</a></li>
            <li><a href="#zindex" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Z-index</a></li>
            <li><a href="#overflow" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Overflow</a></li>
            <li><a href="#float" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Float</a></li>
            <li><a href="#inlineblock" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Inline-block</a></li>
            <li><a href="#align" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Align</a></li>
            <li><a href="#combinators" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Combinators</a></li>
            <li><a href="#pseudo" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Pseudo</a></li>
            <li><a href="#opacity" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Opacity</a></li>
            <li><a href="#navbars" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Navbars</a></li>
            <li><a href="#dropdowns" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Dropdowns</a></li>
            <li><a href="#forms" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Forms</a></li>
            <li><a href="#animations" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Animations</a></li>
            <li><a href="#transitions" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Transitions</a></li>
            <li><a href="#variables" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">CSS Variables</a></li>
          </ul>
        </nav>
      </aside>
      <div className="w-full flex justify-center">
        <div className="max-w-4xl flex-1 pt-28 px-4 sm:px-8 md:ml-64">
          <header className="mb-10 border-b border-fuchsia-600 pb-6" id="home">
            <h1 className="text-4xl font-bold text-fuchsia-400 mb-2">CSS Fundamentals</h1>
            <p className="text-lg text-fuchsia-200">Learn how to style and layout web pages using CSS. Try editing the code and see the result live!</p>
          </header>
          <section id="intro" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">CSS Introduction</h2>
            <p className="text-slate-200 mb-4">CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the color, font, spacing, and positioning of elements.</p>
          </section>
          <section id="syntax" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">CSS Syntax</h2>
            <LiveHtmlEditor initialCode={`<style>\nh1 { color: #a21caf; }\np { color: #e0e7ff; }\n</style>\n<h1>Hello CSS!</h1>\n<p>This is styled with CSS.</p>`} />
            <p className="text-slate-200">CSS syntax consists of selectors and declaration blocks.</p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
