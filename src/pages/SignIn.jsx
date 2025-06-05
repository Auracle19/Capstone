function SignIn() {
    return (
        <div className="container mx-auto p-4 mt-16">
            <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full btn1">
                        Sign In
                    </button>
                    <p className="text-center text-sm text-slate-400 mt-4">
                        Don't have an account? <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignIn