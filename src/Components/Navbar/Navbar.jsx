import React from "react";
import { NavLink } from "react-router"
import "./Navbar.css"
import FAVORITE_ICON from "../../assets//NavbarIcons/navbarStar.png"
import HOME_ICON from "../../assets//NavbarIcons/navbarHome.png"
import WATCH_ICON from "../../assets//NavbarIcons/navbarEye.png"
import HAMBURGER_MENU from "../../assets/NavbarIcons/navbarHamburger.png"


function Nav() {

    /* const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    } */

    return (
        <>
            <div className="nav-container">
                <nav className="navbar-container" ref={null}>
                    <ul className="nav-list">
                        <li className="nav-link">
                            <NavLink to="/"><img className="nav-icon home-icon" srcSet={HOME_ICON} alt="" /></NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/watchlist"><img className="nav-icon watch-icon" srcSet={WATCH_ICON} alt="" /></NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/favorites"><img className="nav-icon favorite-icon" srcSet={FAVORITE_ICON} alt="" /></NavLink>
                        </li>
                    </ul>
                    {/* <img className="nav-hamburger nav-close" srcSet={HAMBURGER_MENU} alt="" onClick={null} /> */}
                </nav>
            </div>
        </>
    )
}

export default Nav;