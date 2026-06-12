import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Landing from './pages/Landing.jsx'
import Galeria from './pages/Galeria.jsx'
import Obra from './pages/Obra.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="atmosphere">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/obra/:slug" element={<Obra />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
