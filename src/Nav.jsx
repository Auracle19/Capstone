// Navigation bar component. Handles navigation links, user profile, and sign out.
// Shows/hides links based on authentication state.

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SEARCH_DATA = [
  // HTML Sections
  { label: 'HTML Tutorial', path: '/tutorials/html' },
  { label: 'HTML Introduction', path: '/tutorials/html#intro' },
  { label: 'HTML Editors', path: '/tutorials/html#editors' },
  { label: 'HTML Basic', path: '/tutorials/html#basic' },
  { label: 'HTML Elements', path: '/tutorials/html#elements' },
  { label: 'HTML Attributes', path: '/tutorials/html#attributes' },
  { label: 'HTML Headings', path: '/tutorials/html#headings' },
  { label: 'HTML Paragraphs', path: '/tutorials/html#paragraphs' },
  { label: 'HTML Styles', path: '/tutorials/html#styles' },
  { label: 'HTML Formatting', path: '/tutorials/html#formatting' },
  { label: 'HTML Quotations', path: '/tutorials/html#quotations' },
  { label: 'HTML Comments', path: '/tutorials/html#comments' },
  { label: 'HTML Colors', path: '/tutorials/html#colors' },
  { label: 'HTML Links', path: '/tutorials/html#links' },
  { label: 'HTML Images', path: '/tutorials/html#images' },
  { label: 'HTML Tables', path: '/tutorials/html#tables' },
  { label: 'HTML Lists', path: '/tutorials/html#lists' },
  { label: 'HTML Forms', path: '/tutorials/html#forms' },
  { label: 'HTML Block & Inline', path: '/tutorials/html#block-inline' },
  { label: 'HTML Classes', path: '/tutorials/html#classes' },
  { label: 'HTML Id', path: '/tutorials/html#id' },
  { label: 'HTML Iframes', path: '/tutorials/html#iframes' },
  { label: 'HTML JavaScript', path: '/tutorials/html#javascript' },
  { label: 'HTML File Paths', path: '/tutorials/html#filepaths' },
  { label: 'HTML Head', path: '/tutorials/html#head' },
  { label: 'HTML Layout', path: '/tutorials/html#layout' },
  { label: 'HTML Responsive', path: '/tutorials/html#responsive' },
  { label: 'HTML Computercode', path: '/tutorials/html#computercode' },
  { label: 'HTML Semantics', path: '/tutorials/html#semantics' },
  { label: 'HTML Style Guide', path: '/tutorials/html#styleguide' },
  { label: 'HTML Entities', path: '/tutorials/html#entities' },
  { label: 'HTML Symbols', path: '/tutorials/html#symbols' },
  { label: 'HTML Emojis', path: '/tutorials/html#emojis' },
  // CSS Sections
  { label: 'CSS Tutorial', path: '/tutorials/css' },
  { label: 'CSS Introduction', path: '/tutorials/css#intro' },
  { label: 'CSS Syntax', path: '/tutorials/css#syntax' },
  { label: 'CSS Selectors', path: '/tutorials/css#selectors' },
  { label: 'CSS Colors', path: '/tutorials/css#colors' },
  { label: 'CSS Backgrounds', path: '/tutorials/css#backgrounds' },
  { label: 'CSS Borders', path: '/tutorials/css#borders' },
  { label: 'CSS Margins', path: '/tutorials/css#margins' },
  { label: 'CSS Padding', path: '/tutorials/css#padding' },
  { label: 'CSS Height/Width', path: '/tutorials/css#heightwidth' },
  { label: 'CSS Box Model', path: '/tutorials/css#boxmodel' },
  { label: 'CSS Text', path: '/tutorials/css#text' },
  { label: 'CSS Fonts', path: '/tutorials/css#fonts' },
  { label: 'CSS Links', path: '/tutorials/css#links' },
  { label: 'CSS Lists', path: '/tutorials/css#lists' },
  { label: 'CSS Tables', path: '/tutorials/css#tables' },
  { label: 'CSS Display', path: '/tutorials/css#display' },
  { label: 'CSS Position', path: '/tutorials/css#position' },
  { label: 'CSS Z-index', path: '/tutorials/css#zindex' },
  { label: 'CSS Overflow', path: '/tutorials/css#overflow' },
  { label: 'CSS Float', path: '/tutorials/css#float' },
  { label: 'CSS Inline-block', path: '/tutorials/css#inlineblock' },
  { label: 'CSS Align', path: '/tutorials/css#align' },
  { label: 'CSS Combinators', path: '/tutorials/css#combinators' },
  { label: 'CSS Pseudo', path: '/tutorials/css#pseudo' },
  { label: 'CSS Opacity', path: '/tutorials/css#opacity' },
  { label: 'CSS Navbars', path: '/tutorials/css#navbars' },
  { label: 'CSS Dropdowns', path: '/tutorials/css#dropdowns' },
  { label: 'CSS Forms', path: '/tutorials/css#forms' },
  { label: 'CSS Animations', path: '/tutorials/css#animations' },
  { label: 'CSS Transitions', path: '/tutorials/css#transitions' },
  { label: 'CSS Variables', path: '/tutorials/css#variables' },
  // JavaScript Sections
  { label: 'JavaScript Tutorial', path: '/tutorials/javascript' },
  { label: 'JavaScript Introduction', path: '/tutorials/javascript#intro' },
  { label: 'JavaScript Syntax', path: '/tutorials/javascript#syntax' },
  { label: 'JavaScript Variables', path: '/tutorials/javascript#variables' },
  { label: 'JavaScript Operators', path: '/tutorials/javascript#operators' },
  { label: 'JavaScript Functions', path: '/tutorials/javascript#functions' },
  { label: 'JavaScript Events', path: '/tutorials/javascript#events' },
  { label: 'JavaScript DOM', path: '/tutorials/javascript#dom' },
  { label: 'JavaScript Objects', path: '/tutorials/javascript#objects' },
  { label: 'JavaScript Arrays', path: '/tutorials/javascript#arrays' },
  { label: 'JavaScript Loops', path: '/tutorials/javascript#loops' },
  { label: 'JavaScript Conditionals', path: '/tutorials/javascript#conditionals' },
  { label: 'JavaScript Date', path: '/tutorials/javascript#date' },
  { label: 'JavaScript Math', path: '/tutorials/javascript#math' },
  { label: 'JavaScript String', path: '/tutorials/javascript#string' },
  { label: 'JavaScript Number', path: '/tutorials/javascript#number' },
  { label: 'JavaScript JSON', path: '/tutorials/javascript#json' },
  // General
  { label: 'Home', path: '/' },
  { label: 'Tutorials', path: '/tutorials' },
  { label: 'Exercises', path: '/exercises' },
];

function Nav({ user, onSignOut }) {
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const navigate = useNavigate()

    const handleProfileClick = () => setDropdown((d) => !d)
    const handleSignOutClick = async () => {
        setDropdown(false)
        await onSignOut()
        navigate('/')
    }
    const handleSearchChange = (e) => {
      const value = e.target.value
      setSearch(value)
      if (value.length > 0) {
        setSuggestions(
          SEARCH_DATA.filter(item =>
            value
              .toLowerCase()
              .split(' ')
              .every(word => item.label.toLowerCase().includes(word))
          )
        )
      } else {
        setSuggestions([])
      }
    }
    const handleSearchSelect = (path) => {
      setSearch('')
      setSuggestions([])
      navigate(path)
    }
    const handleSearchKeyDown = (e) => {
      if (e.key === 'Enter' && suggestions.length > 0) {
        handleSearchSelect(suggestions[0].path)
      }
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
                    <div className="hidden sm:block flex-1 max-w-[140px] md:max-w-[180px] lg:max-w-md mx-2 md:mx-4 relative">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm md:text-base"
                                value={search}
                                onChange={handleSearchChange}
                                onKeyDown={handleSearchKeyDown}
                            />
                            {suggestions.length > 0 && (
                              <ul className="absolute left-0 right-0 bg-slate-800 border border-slate-700 rounded mt-1 z-50">
                                {suggestions.map((item, idx) => (
                                  <li key={item.path}>
                                    <button
                                      className="w-full text-left px-3 py-2 hover:bg-fuchsia-700/20 text-slate-200"
                                      onClick={() => handleSearchSelect(item.path)}
                                    >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden sm:flex items-center gap-4 md:gap-5 lg:gap-6">
                        <Link to="/" className="nav-underline">Home</Link>
                        {user && <Link to="/tutorials" className="nav-underline">Tutorials</Link>}
                        {user && <Link to="/exercises" className="nav-underline">Exercises</Link>}
                        {!user ? (
                            <Link to="/signin" className="btn1h lg:p-2">Sign In</Link>
                        ) : (
                            <div className="relative">
                                <button onClick={handleProfileClick} className="flex items-center focus:outline-none cursor-pointer">
                                    <img
                                        src={user.photoURL || '/src/assets/react.svg'}
                                        alt="Profile"
                                        className="w-9 h-9 rounded-full border-2 border-fuchsia-400 shadow"
                                    />
                                </button>
                                {dropdown && (
                                    <div className="dd">
                                        <button
                                            onClick={() => { setDropdown(false); navigate('/profile'); }}
                                            className="ddbtn"
                                        >
                                            {user.displayName || 'User'}
                                        </button>
                                        <button
                                            onClick={handleSignOutClick}
                                            className="ddbtn"
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
                        {/* Profile links for mobile menu */}
                        {user && (
                          <div className="flex flex-col gap-1 mt-2">
                            <Link to="/profile/edit" className="text-fuchsia-400 hover:text-fuchsia-200 px-2 py-1" onClick={() => setOpen(false)}>Edit Profile</Link>
                            <Link to="/profile/progress" className="text-fuchsia-400 hover:text-fuchsia-200 px-2 py-1" onClick={() => setOpen(false)}>Progress</Link>
                            <Link to="/profile/settings" className="text-fuchsia-400 hover:text-fuchsia-200 px-2 py-1" onClick={() => setOpen(false)}>Settings</Link>
                          </div>
                        )}
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