import './index.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Services from './pages/Services'
import Exercises from './pages/Exercises'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>
      <Nav />
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
