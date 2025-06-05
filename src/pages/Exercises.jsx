function Exercises() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Coding Exercises</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Beginner</h3>
                    <p className="mb-2 sm:mb-4">Start with basic programming challenges.</p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-slate-400">10 exercises</span>
                        <button className="btn1">Start</button>
                    </div>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Intermediate</h3>
                    <p className="mb-2 sm:mb-4">Tackle more complex programming problems.</p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-slate-400">15 exercises</span>
                        <button className="btn1">Start</button>
                    </div>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Advanced</h3>
                    <p className="mb-2 sm:mb-4">Challenge yourself with advanced algorithms.</p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-slate-400">8 exercises</span>
                        <button className="btn1">Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercises