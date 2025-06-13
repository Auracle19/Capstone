// Tutorials page. Shows cards for each front-end technology.
// Uses local SVGs for tech logos.

function Tutorials() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Tutorials</h1>
            <h2 className="text-lg text-slate-400 mb-8 text-center">Master the essential front-end technologies for modern web development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* HTML */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src="/assets/html.svg" alt="HTML5 Logo" className="w-14 h-14 mb-3" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-400">HTML Fundamentals</h3>
                    <p className="mb-4 text-center text-slate-300">Learn the building blocks of web pages with HTML.</p>
                    <button className="hoverbtn px-6 py-1 text-base rounded-full flex items-center gap-2">Learn More <span className="text-lg">→</span></button>
                </div>
                {/* CSS */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src="/assets/css.svg" alt="CSS Logo" className="w-14 h-14 mb-3" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-400">CSS Styling</h3>
                    <p className="mb-4 text-center text-slate-300">Style and layout your websites using modern CSS.</p>
                    <button className="hoverbtn px-6 py-1 text-base rounded-full flex items-center gap-2">Learn More <span className="text-lg">→</span></button>
                </div>
                {/* JavaScript */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src="/assets/javascript.svg" alt="JavaScript Logo" className="w-14 h-14 mb-3" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-400">JavaScript Basics</h3>
                    <p className="mb-4 text-center text-slate-300">Add interactivity and logic to your web projects.</p>
                    <button className="hoverbtn px-6 py-1 text-base rounded-full flex items-center gap-2">Learn More <span className="text-lg">→</span></button>
                </div>
                {/* PHP */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src="/assets/php.svg" alt="PHP Logo" className="w-14 h-14 mb-3" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-400">PHP for Beginners</h3>
                    <p className="mb-4 text-center text-slate-300">Get started with server-side scripting using PHP.</p>
                    <button className="hoverbtn px-6 py-1 text-base rounded-full flex items-center gap-2">Learn More <span className="text-lg">→</span></button>
                </div>
                {/* Bootstrap */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src="/assets/bootstrap.svg" alt="Bootstrap Logo" className="w-14 h-14 mb-3" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-400">Bootstrap Framework</h3>
                    <p className="mb-4 text-center text-slate-300">Quickly design responsive sites with Bootstrap.</p>
                    <button className="hoverbtn px-6 py-1 text-base rounded-full flex items-center gap-2">Learn More <span className="text-lg">→</span></button>
                </div>
                {/* Tailwind CSS */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src="/assets/tailwindcss.svg" alt="Tailwind CSS Logo" className="w-14 h-14 mb-3" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-400">Tailwind CSS</h3>
                    <p className="mb-4 text-center text-slate-300">Build modern UIs efficiently with Tailwind CSS.</p>
                    <button className="hoverbtn px-6 py-1 text-base rounded-full flex items-center gap-2">Learn More <span className="text-lg">→</span></button>
                </div>
            </div>
        </div>
    )
}

export default Tutorials