import React from "react";
import { NavLink } from "react-router"
import "./Navbar.css"
import FAVORITE_ICON from "./NavbarPics/FAVORITE_ICON.png"
import HOME_ICON from "./NavbarPics/HOME_ICON.png"
import WATCH_ICON from "./NavbarPics/WATCH_ICON.png"


function Nav() {
    return (
        <>
            <div className="nav-container">
                <nav className="navbar-container">
                    <ul>
                        <li className="nav-link">
                            <NavLink to="/"><img className="icon home-icon" srcSet={HOME_ICON} alt="" /></NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/watchlist"><img className="icon watch-icon" srcSet={WATCH_ICON} alt="" /></NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/favorites"><img className="icon favorite-icon" srcSet={FAVORITE_ICON} alt="" /></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav;