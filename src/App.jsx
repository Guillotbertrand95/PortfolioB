import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Layout from "./components/Layout";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Projets = lazy(() => import("./pages/Projets"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<div>Chargement…</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projets" element={<Projets />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Suspense>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
