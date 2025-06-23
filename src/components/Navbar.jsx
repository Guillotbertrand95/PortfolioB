import { NavLink } from "react-router-dom";
import "../styles/layout/_navbar.scss";

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<ul className="navbar__list">
					<li className="navbar__item">
						<NavLink to="/">Accueil</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/projets">Projets</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
