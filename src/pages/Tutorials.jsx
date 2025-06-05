function Tutorials() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Tutorials</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">JavaScript Basics</h3>
                    <p className="mb-2 sm:mb-4 text-center">Learn the fundamentals of JavaScript programming.</p>
                    <button className="btn1 w-full lg:w-full">Start Learning</button>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">React Essentials</h3>
                    <p className="mb-2 sm:mb-4 text-center">Master modern React development.</p>
                    <button className="btn1 w-full lg:w-full">Start Learning</button>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Web Development</h3>
                    <p className="mb-2 sm:mb-4 text-center">Build responsive and modern websites.</p>
                    <button className="btn1 w-full lg:w-full">Start Learning</button>
                </div>
            </div>
        </div>
    )
}

export default Tutorials