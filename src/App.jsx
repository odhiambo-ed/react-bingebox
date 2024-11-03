import './App.css'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
