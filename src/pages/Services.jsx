function Services() {
    return (
        <div className="container mx-auto p-4 mt-16">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">One-on-One Mentoring</h3>
                    <p className="mb-4">Get personalized guidance from experienced developers.</p>
                    <button className="btn1">Learn More</button>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Code Review</h3>
                    <p className="mb-4">Get expert feedback on your code and projects.</p>
                    <button className="btn1">Learn More</button>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Project Assistance</h3>
                    <p className="mb-4">Get help with your coding projects and assignments.</p>
                    <button className="btn1">Learn More</button>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Career Guidance</h3>
                    <p className="mb-4">Get advice on your programming career path.</p>
                    <button className="btn1">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Services