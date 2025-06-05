function Tutorials() {
    return (
        <div className="container mx-auto p-4 mt-16">
            <h1 className="text-4xl font-bold mb-6">Tutorials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">JavaScript Basics</h3>
                    <p className="mb-4">Learn the fundamentals of JavaScript programming.</p>
                    <button className="btn1">Start Learning</button>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">React Essentials</h3>
                    <p className="mb-4">Master modern React development.</p>
                    <button className="btn1">Start Learning</button>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Web Development</h3>
                    <p className="mb-4">Build responsive and modern websites.</p>
                    <button className="btn1">Start Learning</button>
                </div>
            </div>
        </div>
    )
}

export default Tutorials