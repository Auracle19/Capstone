// Main application entry point. Sets up routes and authentication state.
// Uses PrivateRoute to protect certain pages for signed-in users only.

import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Services from './pages/Services'
import Exercises from './pages/Exercises'
import SignIn from './pages/SignIn'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'

function PrivateRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/signin" replace />
  }
  return children
}

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleSignOut = () => signOut(auth)

  return (
    <>
      <Nav user={user} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={
          <PrivateRoute user={user}>
            <Tutorials />
          </PrivateRoute>
        } />
        <Route path="/exercises" element={
          <PrivateRoute user={user}>
            <Exercises />
          </PrivateRoute>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
