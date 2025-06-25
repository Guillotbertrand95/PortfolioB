import React from "react";
import Skills from "../components/Skills.jsx";
import photo from "../assets/images/photo-profil.webp";

function Home() {
	return (
		<div className="home">
			<div className="home__image">
				<img src={photo} alt="Portrait de Bertrand" />
			</div>
			<div className="home__intro">
				<div className="homeTitle">
					<h2>GUILLOT BERTRAND</h2>
				</div>
				<p>
					Bonjour, je m’appelle Bertrand et je suis actuellement en
					reconversion professionnelle vers le développement web.
					Passionné par la création digitale, j’ai décidé de me lancer
					dans cette nouvelle aventure pour allier créativité et
					technique. J’ai déjà acquis de bonnes bases en HTML, CSS,
					JavaScript et React, et je continue de progresser chaque
					jour pour devenir un développeur complet. J’attache
					également beaucoup d’importance à la qualité du
					référencement naturel, conscient que c’est un levier
					essentiel pour la visibilité des sites web. Ce portfolio est
					l’occasion de vous présenter mes projets et mes compétences,
					ainsi que ma démarche d’apprentissage. N’hésitez pas à me
					contacter pour échanger ou collaborer!
				</p>
			</div>

			<div className="home__skills">
				<Skills />
			</div>
		</div>
	);
}

export default Home;
