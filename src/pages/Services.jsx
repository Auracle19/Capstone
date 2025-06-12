// Services page. Lists AI-powered services offered by the app.

function Services() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">AI-Powered Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Service 1 */}
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Instant Code Feedback</h3>
                    <p className="mb-2 sm:mb-4 text-center">Get real-time feedback on your code as you type. Our AI reviews your solutions and suggests improvements instantly.</p>
                    <a href="#" className="text-fuchsia-400 font-semibold group relative">
                        <span className="linkS">
                            Try Now
                        </span>
                    </a>
                </div>
                {/* Service 2 */}
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">AI Learning Assistant</h3>
                    <p className="mb-2 sm:mb-4 text-center">Ask questions anytime! The AI assistant can explain concepts, debug code, and guide you through exercises step by step.</p>
                    <a href="#" className="text-fuchsia-400 font-semibold group relative">
                        <span className="linkS">
                            Chat with AI
                        </span>
                    </a>
                </div>
                {/* Service 3 */}
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Personalized Learning Path</h3>
                    <p className="mb-2 sm:mb-4 text-center">Our AI analyzes your progress and recommends the next best lessons and challenges for you.</p>
                    <a href="#" className="text-fuchsia-400 font-semibold group relative">
                        <span className="linkS">
                            See Suggestions
                        </span>
                    </a>
                </div>
                {/* Service 4 */}
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Automated Code Review</h3>
                    <p className="mb-2 sm:mb-4 text-center">Submit your projects and get detailed AI-powered code reviews with suggestions for best practices and improvements.</p>
                    <a href="#" className="text-fuchsia-400 font-semibold group relative">
                        <span className="linkS">
                            Submit Code
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services