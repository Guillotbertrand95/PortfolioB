import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ok71czq",
				"template_1epkq9b",
				e.target,
				"DPouPY1uf7B1KYyX6"
			)
			.then(
				() => {
					alert("Message envoyé avec succès !");
					e.target.reset();
				},
				(error) => {
					alert("Erreur lors de l'envoi : " + error.text);
				}
			);
	};

	return (
		<form className="contact-form" onSubmit={sendEmail}>
			<h2>Formulaire de contact</h2>

			<label htmlFor="name">
				Nom :
				<input type="text" name="user_name" id="name" required />
			</label>

			<label htmlFor="email">
				Email :
				<input type="email" name="user_email" id="email" required />
			</label>

			<label htmlFor="message">
				Message :
				<textarea name="message" id="message" rows="5" required />
			</label>

			<button type="submit">Envoyer</button>
		</form>
	);
};

export default ContactForm;
