import React from "react";
import "./LandingHero.css";

const LandingHero = () => (
	<section>
		{/*}
		<div class="jumbotron jumbotron-fluid parallax-jumbotron">
			<div class="jumbotron-contents text-center mt-8">
				<h1 id="test" class="display-3">
					Imran Kazmi
				</h1>
				<p class="lead">Full Stack Developer</p>
				<p class="lead">Technology Consultant</p>
				<p> Github | LinkedIn | Resume </p>
			</div>
		</div>
*/}

		<div
			class="jumbotron jumbotron-fluid parallax-jumbotron"
			data-type="background"
			data-speed="10"
		>
			<div class="jumbotron-contents text-center">
				<h1 id="test" class="display-3">
					Imran Kazmi
				</h1>
				<p class="lead">Full Stack Developer</p>
				<p class="lead">Technology Consultant</p>
				<p> Github | LinkedIn | Resume </p>
			</div>
		</div>
	</section>
);

export default LandingHero;
