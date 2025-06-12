function Skills() {
	const skills = [
		{ name: "HTML", level: 90, class: "html" },
		{ name: "CSS", level: 85, class: "css" },
		{ name: "JavaScript", level: 70, class: "javascript" },
		{ name: "React", level: 60, class: "react" },
		{ name: "Référencement", level: 70, class: "seo" },
	];

	return (
		<section className="skills">
			<h3>Compétences</h3>
			{skills.map((skill) => (
				<div key={skill.name} className="skill">
					<div className="skill__info">
						<span className="skill__name">{skill.name}</span>
						<span className="skill__percent">{skill.level}%</span>
					</div>
					<div className="skill__bar">
						<div
							className={`skill__level skill__level--${skill.class.toLowerCase()}`}
							style={{ width: `${skill.level}%` }}
							aria-label={`${skill.name} niveau ${skill.level} sur 100`}
						/>
					</div>
				</div>
			))}
		</section>
	);
}

export default Skills;
