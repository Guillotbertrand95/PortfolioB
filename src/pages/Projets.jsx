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
			"J'ai appris les bases solides du HTML5 sémantique, l'importance de bien structurer son code, et à quel point `display: flex` peut changer une page.",
		],
	},
	{
		title: "Sophie Buel",
		description: "Site d'architecte et décoratrice.",
		tech: [{ icon: "javascript", label: "JavaScript" }],
		url: "http://reliable-dasik-611aa9.netlify.app",
	},
	{
		title: "Nina Carducci",
		description: "Site de photographe",
		tech: [
			{ icon: "seo", label: "Optimisation SEO" },
			{ icon: "bug", label: "Débogage" },
		],
		url: "https://guillotbertrand95.github.io/Nina-Carducci-Dev/",
	},
	{
		title: "KASA",
		description: "Site de location d'appartements entre particuliers.",
		tech: [{ icon: "react", label: "React" }],
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
