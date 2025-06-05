function Home() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Welcome to LearnDev</h1>
            <p className="text-base sm:text-lg mb-6 text-center">Start your coding journey today with our comprehensive tutorials and exercises.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
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
            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-slate-200 mb-10">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl mb-1">{'>'}</span>
                    <span className="font-bold text-lg">Interactive Learning</span>
                    <span className="text-sm">Write code in your browser and get immediate feedback if your solution is correct.</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl mb-1" role="img" aria-label="book">📖</span>
                    <span className="font-bold text-lg">Beginner Friendly</span>
                    <span className="text-sm">No worries if you have no knowledge about programming yet, we will teach you the basics.</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl mb-1" role="img" aria-label="lightning">⚡</span>
                    <span className="font-bold text-lg">All Skill Levels</span>
                    <span className="text-sm">Whether you are a beginner or advanced programmer, we offer the right courses for your needs.</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl mb-1" role="img" aria-label="profile">👤</span>
                    <span className="font-bold text-lg">Personal Profile</span>
                    <span className="text-sm">All your progress will be tracked and displayed in your personal profile area.</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl mb-1" role="img" aria-label="ai">🤖</span>
                    <span className="font-bold text-lg">Powered by AI</span>
                    <span className="text-sm">Ask your personal AI assistant anytime you need help.</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl mb-1">{'<>'}</span>
                    <span className="font-bold text-lg">Build Real Projects</span>
                    <span className="text-sm">Create your own projects with our coding playground.</span>
                </div>
            </div>
        </div>
    )
}

export default Home