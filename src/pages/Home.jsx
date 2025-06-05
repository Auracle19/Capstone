function Home() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Welcome to Learning Hub</h1>
            <p className="text-base sm:text-lg mb-6 text-center">Start your coding journey today with our comprehensive tutorials and exercises.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Learn</h2>
                    <p className="text-center">Access our extensive library of tutorials and courses.</p>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Practice</h2>
                    <p className="text-center">Enhance your skills with hands-on exercises.</p>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Grow</h2>
                    <p className="text-center">Track your progress and level up your abilities.</p>
                </div>
            </div>
        </div>
    )
}

export default Home