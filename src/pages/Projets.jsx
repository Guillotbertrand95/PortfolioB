import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";
const projects = [
	{
		title: "Booki",
		description: "Site de réservation d'hébergement et d'activités.",
		tech: [
			{ icon: "html", label: "HTML" },
			{ icon: "css", label: "CSS" },
		],
		url: "https://guillotbertrand95.github.io/booki-starter-code/",
		difficulties: [
			"Mon tout premier projet consistait à créer un site vitrine statique en HTML et CSS. Il s'agissait d'une page de présentation pour un site de réservation d'hébergement, avec une mise en page responsive simple, des sections claires et du style via Flexbox.",
			"J'ai dû comprendre la logique du box model (bordures, marge, padding), gérer la responsivité mobile juste avec les media queries, et harmoniser les couleurs et la typographie.",
			"J'ai appris les bases solides du HTML5 sémantique, l'importance de bien structurer son code, et à quel point 'display:flex' peut changer une page.",
		],
	},
	{
		title: "Sophie Buel",
		description: "Site d'architecte et décoratrice.",
		tech: [{ icon: "javascript", label: "JavaScript" }],
		url: "http://reliable-dasik-611aa9.netlify.app",
		difficulties: [
			" Ce projet JavaScript consistait à concevoir une page web d’architecte, permettant aux utilisateurs de se connecter et de gérer leur contenu.",
			"L’un des défis majeurs a été la mise en place d’une authentification sécurisée avec plusieurs formulaires de connexion, garantissant un affichage dynamique des projets selon l’état de connexion.",
			"Ensuite, l’ajout et la suppression d’images via une modale interactive ont nécessité une gestion rigoureuse des événements et de l’accès aux données.",
			"Enfin, l’optimisation de l’interface et des interactions utilisateur a demandé une bonne structuration du DOM et une approche méthodique pour assurer une expérience fluide et intuitive. ",
		],
	},
	{
		title: "Nina Carducci",
		description: "Site de photographe",
		tech: [
			{ icon: "seo", label: "Optimisation SEO" },
			{ icon: "bug", label: "Débogage" },
		],
		url: "https://guillotbertrand95.github.io/Nina-Carducci-Dev/",
		difficulties: [
			"L’un des premiers défis de mon projet a été l’identification des bugs à l’aide de la console et des DevTools. Trouver l’origine des erreurs requérait une approche méthodique, en analysant les logs et les performances du site pour repérer les points de blocage.",
			"Ensuite, structurer le référencement de manière optimale a nécessité un travail approfondi sur les mots-clés, les balises et le maillage interne afin d’améliorer la visibilité du site.",
			"Enfin, garantir une accessibilité conforme aux normes actuelles a impliqué des ajustements techniques, comme l’optimisation des contrastes, la mise en place d’alternatives textuelles et le respect des bonnes pratiques du web. Ces étapes ont renforcé ma capacité à analyser, structurer et améliorer un site web de manière efficace.",
		],
	},
	{
		title: "KASA",
		description: "Site de location d'appartements entre particuliers.",
		tech: [{ icon: "react", label: "React" }],
		url: "https://kasa-bertrand.netlify.app/",
		difficulties: [
			"Ce projet a été une excellente opportunité pour apprendre à travailler avec React et Vite, deux outils modernes du développement web. J’ai principalement appris à gérer la structure en composants, organiser les pages et styliser avec Sass (SCSS) pour un CSS plus propre et maintenable.",

			"Côté React, j’ai découvert les hooks, notamment useState pour gérer l’état des composants, et la transmission de données via les props. Ces concepts m’ont parfois posé des défis, mais m’ont surtout permis de mieux comprendre comment construire une application interactive et dynamique.",

			"En résumé, KASA m’a aidé à consolider mes bases en React tout en améliorant mes compétences en organisation de code et en gestion du style. Une étape importante dans ma montée en compétence !",
		],
	},
];

const Projets = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState("");

	const handleOpenModal = (text) => {
		setModalContent(text);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<section className="projects">
			<h2>Mes projets</h2>
			<div className="projects__grid">
				{projects.map((project, idx) => (
					<ProjectCard
						key={idx}
						{...project}
						onOpenModal={() =>
							handleOpenModal(project.difficulties)
						}
					/>
				))}
			</div>
			<Modal isOpen={modalOpen} onClose={handleCloseModal}>
				<h3>Difficultés rencontrées</h3>
				{Array.isArray(modalContent) ? (
					modalContent.map((paragraph, index) => (
						<p key={index} className="modal-paragraph">
							{paragraph}
						</p>
					))
				) : (
					<p>{modalContent}</p>
				)}
			</Modal>
		</section>
	);
};
export default Projets;
