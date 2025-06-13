// Navigation bar component. Handles navigation links, user profile, and sign out.
// Shows/hides links based on authentication state.

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav({ user, onSignOut }) {
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate()

    const handleProfileClick = () => setDropdown((d) => !d)
    const handleSignOutClick = async () => {
        setDropdown(false)
        await onSignOut()
        navigate('/')
    }

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
                    <div className="hidden sm:block flex-1 max-w-[140px] md:max-w-[180px] lg:max-w-md mx-2 md:mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm md:text-base"
                            />
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden sm:flex items-center gap-4 md:gap-5 lg:gap-6">
                        <Link to="/" className="nav-underline">Home</Link>
                        {user && <Link to="/tutorials" className="nav-underline">Tutorials</Link>}
                        {user && <Link to="/exercises" className="nav-underline">Exercises</Link>}
                        {!user ? (
                            <Link to="/signin" className="hoverbtn lg:p-2">Sign In</Link>
                        ) : (
                            <div className="relative">
                                <button onClick={handleProfileClick} className="flex items-center focus:outline-none">
                                    <img
                                        src={user.photoURL || '/src/assets/react.svg'}
                                        alt="Profile"
                                        className="w-9 h-9 rounded-full border-2 border-fuchsia-400 shadow"
                                    />
                                </button>
                                {dropdown && (
                                    <div className="absolute right-0 mt-2 w-40 bg-slate-700 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                                        <div className="px-4 py-2 text-slate-200 text-sm border-b border-slate-600">{user.displayName || 'User'}</div>
                                        <button
                                            onClick={handleSignOutClick}
                                            className="w-full text-left px-4 py-2 text-fuchsia-400 hover:bg-slate-600 hover:text-fuchsia-200 text-sm"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
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
                        {user && <Link to="/tutorials" className="text-slate-200 hover:text-fuchsia-400 px-2 py-1" onClick={() => setOpen(false)}>Tutorials</Link>}
                        {user && <Link to="/exercises" className="text-slate-200 hover:text-fuchsia-400 px-2 py-1" onClick={() => setOpen(false)}>Exercises</Link>}
                        {!user ? (
                            <Link to="/signin" className="btn1 w-full text-center" onClick={() => setOpen(false)}>Sign In</Link>
                        ) : (
                            <button
                                onClick={handleSignOutClick}
                                className="btn1 w-full text-center mt-2"
                            >Sign Out</button>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav