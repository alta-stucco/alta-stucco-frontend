
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation/navigation'
import Home from './views/home/home'
import About from './views/about/about'
import Contact from './views/contact/contact'
import Footer from "./components/footer/footer.tsx";
import Faq from './views/faq/faq.tsx'
import {Helmet} from "react-helmet";

function App() {


  return (
      <div className="app-container">
          <Helmet>
                <title>Alta Stucco</title>
                <meta name="description" content="Alta Stucco is a family-owned business dedicated to restoring and transforming residential and commercial exteriors into stunning and durable spaces. Contact us for a free consultation and estimate" />
          </Helmet>
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
