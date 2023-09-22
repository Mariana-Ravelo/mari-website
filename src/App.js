import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/projects": 
      Component = Projects
      break
    case "/contact":
      Component = Contact
      break
    default:
      Component = Home
      break
  }
  return (
  <>
    <Navbar />
    <div className="container">
    <Component />
    </div>
  </>
  )
}

export default App
