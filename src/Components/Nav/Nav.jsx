import { NavLink } from "react-router"

function Nav() {
    return (

        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/watchlist">Watch List</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Nav;