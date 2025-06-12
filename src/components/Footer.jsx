import React from "react";

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<p>
					&copy; {new Date().getFullYear()} Mon Portfolio - Tous
					droits réservés.
				</p>
				<p>
					Design by <a href="#">Bertrand</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
