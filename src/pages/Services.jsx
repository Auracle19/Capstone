function Services() {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">One-on-One Mentoring</h3>
                    <p className="mb-2 sm:mb-4 text-center">Get personalized guidance from experienced developers.</p>
                    <button className="btn1 w-full lg:w-full">Learn More</button>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Code Review</h3>
                    <p className="mb-2 sm:mb-4 text-center">Get expert feedback on your code and projects.</p>
                    <button className="btn1 w-full lg:w-full">Learn More</button>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Project Assistance</h3>
                    <p className="mb-2 sm:mb-4 text-center">Get help with your coding projects and assignments.</p>
                    <button className="btn1 w-full lg:w-full">Learn More</button>
                </div>
                <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-fuchsia-400">Career Guidance</h3>
                    <p className="mb-2 sm:mb-4 text-center">Get advice on your programming career path.</p>
                    <button className="btn1 w-full lg:w-full">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Services