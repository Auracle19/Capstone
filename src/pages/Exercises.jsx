function Exercises() {
    return (
        <div className="container mx-auto p-4 mt-16">
            <h1 className="text-4xl font-bold mb-6">Coding Exercises</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Beginner</h3>
                    <p className="mb-4">Start with basic programming challenges.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">10 exercises</span>
                        <button className="btn1">Start</button>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Intermediate</h3>
                    <p className="mb-4">Tackle more complex programming problems.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">15 exercises</span>
                        <button className="btn1">Start</button>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Advanced</h3>
                    <p className="mb-4">Challenge yourself with advanced algorithms.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">8 exercises</span>
                        <button className="btn1">Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercises