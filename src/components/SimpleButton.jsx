import React from "react";

const SimpleButton = ({ url, children }) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="simple-button"
		>
			{children}
		</a>
	);
};

export default SimpleButton;
