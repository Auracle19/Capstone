// Home page. Welcome message, feature highlights.
function Home() {
    return (
        <>
            {/* Hero Section with Background Image - flush under nav */}
            <div className="relative w-full overflow-hidden mb-0 max-w-[100vw]">
                <img src="/Homepage.jpg" alt="Homepage background" className="imgHeroBg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
                    <h1 className="heroT">
                        Unlock Your Coding Journey
                    </h1>
                    <p className="heroD">
                        Learn, practice, and build real projects with interactive tutorials, AI-powered tools, and a vibrant community. Start mastering web development today!
                    </p>
                </div>
            </div>
            {/* Main Content below hero image */}
            <div className="container mx-auto px-4 pt-0 pb-8 mt-6 sm:mt-10 md:mt-14">
                {/* Learn-Practice-Grow Section */}
                <div className="cardS">
                    <div className="cardF">
                        <h2 className="font-bold text-lg text-fuchsia-400">Learn</h2>
                        <p className="text-center">Access our extensive library of tutorials and courses.</p>
                    </div>
                    <div className="cardF">
                        <h2 className="font-bold text-lg text-fuchsia-400">Practice</h2>
                        <p className="text-center">Enhance your skills with hands-on exercises.</p>
                    </div>
                    <div className="cardF">
                        <h2 className="font-bold text-lg text-fuchsia-400">Grow</h2>
                        <p className="text-center">Track your progress and level up your abilities.</p>
                    </div>
                </div>
                {/* Features Section */}
                <div className="featuresS">
                    <div className="featureB">
                        <span className="text-3xl mb-1">{'>'}</span>
                        <span className="featureT">Interactive Learning</span>
                        <span className="featureD">Write code in your browser and get immediate feedback if your solution is correct.</span>
                    </div>
                    <div className="featureB">
                        <span className="text-3xl mb-1" role="img" aria-label="book">📖</span>
                        <span className="featureT">Beginner Friendly</span>
                        <span className="featureD">No worries if you have no knowledge about programming yet, we will teach you the basics.</span>
                    </div>
                    <div className="featureB">
                        <span className="text-3xl mb-1" role="img" aria-label="lightning">⚡</span>
                        <span className="featureT">All Skill Levels</span>
                        <span className="featureD">Whether you are a beginner or advanced programmer, we offer the right courses for your needs.</span>
                    </div>
                    <div className="featureB">
                        <span className="text-3xl mb-1" role="img" aria-label="profile">👤</span>
                        <span className="featureT">Personal Profile</span>
                        <span className="featureD">All your progress will be tracked and displayed in your personal profile area.</span>
                    </div>
                    <div className="featureB">
                        <span className="text-3xl mb-1" role="img" aria-label="ai">🤖</span>
                        <span className="featureT">Powered by AI</span>
                        <span className="featureD">Ask your personal AI assistant anytime you need help.</span>
                    </div>
                    <div className="featureB">
                        <span className="text-3xl mb-1">{'<>'}</span>
                        <span className="featureT">Build Real Projects</span>
                        <span className="featureD">Create your own projects with our coding playground.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home