import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Play from './pages/Play/Play'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useNavigate } from 'react'
import { auth } from './firebase'


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/")
      } else {
        navigate("/login")
      }
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/play/:id' element={<Play />} />
      </Routes>
    </>
  )
}

export default App
