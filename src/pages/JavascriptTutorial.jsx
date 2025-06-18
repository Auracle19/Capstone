import React from 'react';
import LiveHtmlEditor from '../components/LiveHtmlEditor';

export default function JavascriptTutorial() {
  return (
    <div className="min-h-screen bg-slate-900 flex pt-28">
      <aside className="hidden md:block w-64 pr-8 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-20 bg-slate-900 border-r border-slate-800">
        <nav className="pt-12">
          <ul className="flex flex-col gap-2 text-fuchsia-200 text-base">
            <li><a href="#home" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JavaScript Home</a></li>
            <li><a href="#intro" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Introduction</a></li>
            <li><a href="#syntax" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Syntax</a></li>
            <li><a href="#variables" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Variables</a></li>
            <li><a href="#operators" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Operators</a></li>
            <li><a href="#functions" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Functions</a></li>
            <li><a href="#events" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Events</a></li>
            <li><a href="#dom" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS DOM</a></li>
            <li><a href="#objects" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Objects</a></li>
            <li><a href="#arrays" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Arrays</a></li>
            <li><a href="#loops" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Loops</a></li>
            <li><a href="#conditionals" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Conditionals</a></li>
            <li><a href="#date" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Date</a></li>
            <li><a href="#math" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Math</a></li>
            <li><a href="#string" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS String</a></li>
            <li><a href="#number" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS Number</a></li>
            <li><a href="#json" className="block py-2 px-3 rounded hover:bg-slate-800 hover:text-fuchsia-400 transition">JS JSON</a></li>
          </ul>
        </nav>
      </aside>
      <div className="w-full flex justify-center">
        <div className="max-w-4xl flex-1 pt-28 px-4 sm:px-8 md:ml-64">
          <header className="mb-10 border-b border-fuchsia-600 pb-6" id="home">
            <h1 className="text-4xl font-bold text-fuchsia-400 mb-2">JavaScript Fundamentals</h1>
            <p className="text-lg text-fuchsia-200">Learn the basics of JavaScript and try out code live below!</p>
          </header>
          <section id="intro" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">JavaScript Introduction</h2>
            <p className="text-slate-200 mb-4">JavaScript is a programming language that lets you add interactivity to web pages.</p>
          </section>
          <section id="syntax" className="mb-10">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">JavaScript Syntax</h2>
            <LiveHtmlEditor initialCode={`<script>\ndocument.body.innerHTML = '<h1>Hello JavaScript!</h1><p>This is JS in action.</p>'\n<\/script>`} />
            <p className="text-slate-200">JavaScript syntax includes statements, variables, and functions.</p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
