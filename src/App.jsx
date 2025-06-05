import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Nav from './Nav'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Services from './pages/Services'
import Exercises from './pages/Exercises'
import SignIn from './pages/SignIn'
import { auth } from './firebase'

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
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
