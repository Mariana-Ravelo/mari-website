import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  <>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
    </head>
    <body>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer/>
    </body>

  </>
  )
}

export default App
