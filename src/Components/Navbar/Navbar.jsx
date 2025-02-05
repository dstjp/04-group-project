import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import favoriteIcon from "../../assets//NavbarIcons/navbarStar.png";
import homeIcon from "../../assets//NavbarIcons/navbarHome.png";
import watchIcon from "../../assets//NavbarIcons/navbarEye.png";
import searchIcon from "../../assets/NavbarIcons/navbarSearch.svg";
import BlackLogoIcon from "../../assets/LogoIcons/logoBlack.svg";
import { SearchBar } from "../SearchBar/SearchBar";

function Nav() {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [mobileSearchbar, setMobileSearchbar] = useState(
    window.innerWidth <= 1024
  );

  const handleShowSearchbar = () => {
    setShowSearchbar((search) => !search);
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
                <img
                  className="nav-icon home-icon"
                  srcSet={homeIcon}
                  alt="home icon"
                />
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/watchlist">
                <img
                  className="nav-icon watch-icon"
                  srcSet={watchIcon}
                  alt="watchlist icon"
                />
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/favorites">
                <img
                  className="nav-icon favorite-icon"
                  srcSet={favoriteIcon}
                  alt="favorite icon"
                />
              </NavLink>
            </li>
            <li className="nav-link">
              <button onClick={handleShowSearchbar}>
                <img
                  className="nav-icon search-icon"
                  srcSet={searchIcon}
                  alt="search icon"
                />
              </button>
            </li>
          </ul>
          <img className="navbar-logo" src={BlackLogoIcon} alt="mdbLogo" />
        </nav>
        {mobileSearchbar && <SearchBar showSearchbar={showSearchbar} />}
      </div>
    </>
  );
}

export default Nav;
