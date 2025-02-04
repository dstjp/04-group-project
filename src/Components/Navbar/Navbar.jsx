import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import FAVORITE_ICON from "../../assets//NavbarIcons/navbarStar.png";
import HOME_ICON from "../../assets//NavbarIcons/navbarHome.png";
import WATCH_ICON from "../../assets//NavbarIcons/navbarEye.png";
import SEARCH_ICON from "../../assets/NavbarIcons/navbarSearch.svg";
import BlackLogo from "../../assets/LogoIcons/logoBlack.svg";
import { SearchBar } from "../SearchBar/SearchBar";

function Nav() {
	const [showSearchbar, setShowSearchbar] = useState(false);
	const [mobileSearchbar, setMobileSearchbar] = useState(
		window.innerWidth <= 1024
	);

	const handleShowSearchbar = () => {
		setShowSearchbar((prev) => !prev);
	};

	useEffect(() => {
		const handleResizeSearchbar = () =>
			setMobileSearchbar(window.innerWidth <= 1024);
		window.addEventListener("resize", handleResizeSearchbar);
		return () => window.removeEventListener("resize", handleResizeSearchbar);
	}, []);

	return (
		<>
			<div className="nav-container">
				<nav className="navbar-container" ref={null}>
					<ul className="nav-list">
						<li className="nav-link">
							<NavLink to="/">
								<img className="nav-icon home-icon" srcSet={HOME_ICON} alt="" />
							</NavLink>
						</li>
						<li className="nav-link">
							<NavLink to="/watchlist">
								<img
									className="nav-icon watch-icon"
									srcSet={WATCH_ICON}
									alt=""
								/>
							</NavLink>
						</li>
						<li className="nav-link">
							<NavLink to="/favorites">
								<img
									className="nav-icon favorite-icon"
									srcSet={FAVORITE_ICON}
									alt=""
								/>
							</NavLink>
						</li>
						<li className="nav-link">
							<button onClick={handleShowSearchbar}>
								<img
									className="nav-icon search-icon"
									srcSet={SEARCH_ICON}
									alt=""
								/>
							</button>
						</li>
					</ul>
					<img className="navbar-logo" src={BlackLogo} />
				</nav>
				{mobileSearchbar && <SearchBar showSearchbar={showSearchbar} />}
			</div>
		</>
	);
}

export default Nav;
