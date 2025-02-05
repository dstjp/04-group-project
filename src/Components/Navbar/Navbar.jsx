import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import favoriteIcon from "../../assets//NavbarIcons/navbarStar.png";
import homeIcon from "../../assets//NavbarIcons/navbarHome.png";
import watchIcon from "../../assets//NavbarIcons/navbarEye.png";
import BlackLogoIcon from "../../assets/LogoIcons/logoBlack.svg";

function Nav() {
	return (
		<>
			<div className="nav-container">
				<nav className="navbar-container" ref={null}>
					<ul className="nav-list">
						<li className="nav-link">
							<NavLink to="/">
								<img className="nav-icon home-icon" srcSet={homeIcon} alt="" />
							</NavLink>
						</li>
						<li className="nav-link">
							<NavLink to="/watchlist">
								<img
									className="nav-icon watch-icon"
									srcSet={watchIcon}
									alt=""
								/>
							</NavLink>
						</li>
						<li className="nav-link">
							<NavLink to="/favorites">
								<img
									className="nav-icon favorite-icon"
									srcSet={favoriteIcon}
									alt=""
								/>
							</NavLink>
						</li>
					</ul>
					<img className="navbar-logo" src={BlackLogoIcon} alt="logo"/>
				</nav>
			</div>
		</>
	);
}

export default Nav;
