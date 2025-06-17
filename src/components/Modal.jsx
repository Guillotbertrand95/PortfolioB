import React from "react";
import "../styles/components/_modal.scss"; // Assure-toi que le chemin est correct

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
