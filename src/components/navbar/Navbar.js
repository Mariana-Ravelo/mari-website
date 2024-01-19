import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import "./navbar.css"

export default function Navbar() {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.visibility = 'visible'
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.visibility = 'hidden'
    }

    return (
    <>
        <nav className="nav">
        <Link to="/" className="site-title">Mariana Ravelo</Link>
        <ul>
            <CustomLink to="/" className="hideOnMobile">Home</CustomLink>
            <CustomLink to="/about" className="hideOnMobile">About</CustomLink>
            <CustomLink to="/projects" className="hideOnMobile">Projects</CustomLink>
            <li className="menu-button" onClick={showSidebar}><a href="#"><FaBars/></a></li>
        </ul>
        <ul className="sidebar">
            <li onClick={hideSidebar}><a href="#"><FaXmark/></a></li>
            <CustomLink to="/" onClick={hideSidebar} >Home</CustomLink>
            <CustomLink to="/about" onClick={hideSidebar}>About</CustomLink>
            <CustomLink to="/projects" onClick={hideSidebar}>Projects</CustomLink>
        </ul>
        </nav>
    </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}