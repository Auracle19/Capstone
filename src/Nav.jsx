import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-slate-800 fixed top-0 left-0 right-0 shadow-lg z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-fuchsia-500 font-bold text-xl hover:text-fuchsia-400">
                        LearnDev    
                    </Link>
                    {/* Hamburger menu for mobile */}
                    <button className="sm:hidden ml-2 text-slate-200 focus:outline-none" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {/* Search Bar */}
                    <div className="hidden sm:block flex-1 max-w-md mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            />
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden sm:flex items-center gap-6">
                        <Link to="/" className="text-slate-200 linkS">Home</Link>
                        <Link to="/tutorials" className="text-slate-200 linkS">Tutorials</Link>
                        <Link to="/services" className="text-slate-200 linkS">Services</Link>
                        <Link to="/exercises" className="text-slate-200 linkS">Exercises</Link>
                        <Link to="/signin" className="hoverbtn">Sign In</Link>
                    </div>
                </div>
                {/* Mobile menu */}
                {open && (
                    <div className="sm:hidden flex flex-col gap-2 pb-2 animate-fade-in">
                        <div className="flex-1 max-w-md mx-auto w-full mb-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-700 text-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            />
                        </div>
                        <Link to="/" className="text-slate-200 hover:text-fuchsia-400 px-2 py-1" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/tutorials" className="text-slate-200 hover:text-fuchsia-400 px-2 py-1" onClick={() => setOpen(false)}>Tutorials</Link>
                        <Link to="/services" className="text-slate-200 hover:text-fuchsia-400 px-2 py-1" onClick={() => setOpen(false)}>Services</Link>
                        <Link to="/exercises" className="text-slate-200 hover:text-fuchsia-400 px-2 py-1" onClick={() => setOpen(false)}>Exercises</Link>
                        <Link to="/signin" className="btn1 w-full text-center" onClick={() => setOpen(false)}>Sign In</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav