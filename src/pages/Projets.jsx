import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
	{
		title: "Booki",
		description: "Site de réservation d'hébergement et d'activités.",
		tech: [
			{ icon: "html", label: "HTML" },
			{ icon: "css", label: "CSS" },
		],
		url: "https://guillotbertrand95.github.io/booki-starter-code/",
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

const Projets = () => (
	<section className="projects">
		<h2>Mes projets</h2>
		<div className="projects__grid">
			{projects.map((project, idx) => (
				<ProjectCard key={idx} {...project} />
			))}
		</div>
	</section>
);

export default Projets;
