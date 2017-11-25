import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
	<div id="main-navbar">
		<nav class="navbar navbar-expand-lg fixed-top navbar-light">
			<a class="navbar-brand">Imran Kazmi</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item ">
						<Link to="">
							<a class="nav-link d-inline-block mx-4">Home</a>
						</Link>
					</li>
					<li class="nav-item ">
						<Link to="">
							<a class="nav-link d-inline-block mx-4">About Me</a>
						</Link>
					</li>
					<li class="nav-item ">
						<Link to="">
							<a class="nav-link d-inline-block mx-4">Projects</a>
						</Link>
					</li>
					<li class="nav-item ">
						<Link to="">
							<a class="nav-link d-inline-block mx-4">Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);

export default Navbar;
