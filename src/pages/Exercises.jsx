// Exercises page. Displays coding exercise categories.

function Exercises() {
    return (
        <div className="exercises-container mt-20 sm:mt-16">
            <h1 className="exercises-title">Coding Exercises</h1>
            <div className="exercises-grid">
                <div className="exercise-card">
                    <h3 className="exercise-card-title">Beginner</h3>
                    <p className="exercise-card-desc">Start with basic programming challenges.</p>
                    <div className="exercise-card-footer">
                        <span className="exercise-card-count">10 exercises</span>
                        <button className="border-2 font-semibold border-fuchsia-400 text-fuchsia-400 px-6 py-1 rounded-full flex items-center gap-2 hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-slate-900 cursor-pointer transition-all duration-300 ease-in-out">Start</button>
                    </div>
                </div>
                <div className="exercise-card">
                    <h3 className="exercise-card-title">Intermediate</h3>
                    <p className="exercise-card-desc">Tackle more complex programming problems.</p>
                    <div className="exercise-card-footer">
                        <span className="exercise-card-count">15 exercises</span>
                        <button className="border-2 font-semibold border-fuchsia-400 text-fuchsia-400 px-6 py-1 rounded-full flex items-center gap-2 hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-slate-900 cursor-pointer transition-all duration-300 ease-in-out">Start</button>
                    </div>
                </div>
                <div className="exercise-card">
                    <h3 className="exercise-card-title">Advanced</h3>
                    <p className="exercise-card-desc">Challenge yourself with advanced algorithms.</p>
                    <div className="exercise-card-footer">
                        <span className="exercise-card-count">8 exercises</span>
                        <button className="border-2 font-semibold border-fuchsia-400 text-fuchsia-400 px-6 py-1 rounded-full flex items-center gap-2 hover:bg-fuchsia-600 hover:border-fuchsia-600 hover:text-slate-900 cursor-pointer transition-all duration-300 ease-in-out">Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercises