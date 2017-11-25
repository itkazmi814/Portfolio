import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingHero from "./components/LandingHero/LandingHero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const MainPage = () => (
	<div class="col-12 px-0">
		<Navbar />
		<LandingHero />
		<About />
		<Skills />
		<Projects />
		<Contact />
		<Footer />
	</div>
);

export default MainPage;
