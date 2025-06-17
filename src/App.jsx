import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import "./styles/main.scss";
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projets" element={<Projets />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
