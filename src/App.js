import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Footer from "./components/footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App
