
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation/navigation'
import Home from './views/home/home'
import About from './views/about/about'
import Contact from './views/contact/contact'
import Portfolio from './views/portfolio/portfolio'

function App() {


  return (
      <div className="app-container">
          <Router>
              <Navigation />
              <div className="main-content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                  </Routes>
              </div>
          </Router>
      </div>
  )
}

export default App
