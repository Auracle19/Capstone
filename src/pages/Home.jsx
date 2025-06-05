function Home() {
    return (
        <div className="container mx-auto p-4 mt-16">
            <h1 className="text-4xl font-bold mb-6">Welcome to Learning Hub</h1>
            <p className="text-lg mb-4">Start your coding journey today with our comprehensive tutorials and exercises.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-3 text-fuchsia-400">Learn</h2>
                    <p>Access our extensive library of tutorials and courses.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-3 text-fuchsia-400">Practice</h2>
                    <p>Enhance your skills with hands-on exercises.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-3 text-fuchsia-400">Grow</h2>
                    <p>Track your progress and level up your abilities.</p>
                </div>
            </div>
        </div>
    )
}

export default Home