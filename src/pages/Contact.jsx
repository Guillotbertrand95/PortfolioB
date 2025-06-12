// src/pages/Contact.jsx (ou src/Contact.jsx)
import React from "react";
import ContactForm from "../components/ContactForm"; // adapte le chemin selon ton arborescence
// src/pages/Contact.jsx

const Contact = () => {
	return (
		<section className="contact-page">
			<h1>Me contacter</h1>
			<p>
				Remplissez le formulaire ci-dessous pour me laisser un message.
			</p>
			<ContactForm />
		</section>
	);
};

export default Contact;
