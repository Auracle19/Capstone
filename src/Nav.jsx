import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-slate-800 fixed top-0 left-0 right-0 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-fuchsia-500 font-bold text-xl hover:text-fuchsia-400">
                        CodeCraft
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-slate-200 hover:text-fuchsia-400">Home</Link>
                        <Link to="/tutorials" className="text-slate-200 hover:text-fuchsia-400">Tutorials</Link>
                        <Link to="/services" className="text-slate-200 hover:text-fuchsia-400">Services</Link>
                        <Link to="/exercises" className="text-slate-200 hover:text-fuchsia-400">Exercises</Link>
                        <Link to="/signin" className="btn1">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav