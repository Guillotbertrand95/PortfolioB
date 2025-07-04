import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// ou faSearchPlus, faEye, etc. selon ton choix
import "../styles/components/_projectcard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBug, faChartLine } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
	html: faHtml5,
	css: faCss3Alt,
	javascript: faJs,
	react: faReact,
	bug: faBug,
	seo: faChartLine,
};

const ProjectCard = ({
	title,
	description,
	tech,
	url,
	external = true,
	onOpenModal,
}) => (
	<div className="project-card">
		<div className="project-container">
			<div className="card info">
				<h3>{title}</h3>
				<p>{description}</p>
				<ul>
					{tech.map((item, idx) => (
						<li key={idx}>
							<FontAwesomeIcon icon={iconMap[item.icon]} />{" "}
							{item.label}
						</li>
					))}
				</ul>
			</div>
			{/* Loupe pour voir les difficultés */}
			<button
				className="icon-button"
				onClick={onOpenModal}
				title="Voir les difficultés"
			>
				<FontAwesomeIcon icon={faSearch} />
			</button>
			{url && (
				<div className="web-link">
					<a
						className="simple-button"
						href={url}
						target={external ? "_blank" : "_self"}
						rel="noopener noreferrer"
					>
						Voir le projet en ligne
					</a>
				</div>
			)}
		</div>
	</div>
);

export default ProjectCard;
