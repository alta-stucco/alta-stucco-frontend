
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation/navigation'
import Home from './views/home/home'
import About from './views/about/about'
import Contact from './views/contact/contact'
import Footer from "./components/footer/footer.tsx";
import Faq from './views/faq/faq.tsx'

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
                      <Route path="/faq" element={<Faq />} />
                  </Routes>
                  <Footer />
              </div>
          </Router>
      </div>
  )
}

export default App
