import React from "react";
import "./About.css";

const About = () => (
	<div class="card col-lg-8 mx-auto">
		<div class="mx-auto">
			<h3 class="text-center"> Hi. My name is Imran. </h3>
			<div class="row">
				<div class="col-lg-4">
					<img
						id="profile-image"
						src="https://homewardboundaz.org/wp-content/uploads/2016/09/person-placeholder.jpg"
						alt="profile pic"
						class="img-thumbnail img-fluid rounded-circle mx-auto d-block"
					/>
				</div>
				<div class="col-lg-8">
					<div class="align-middle d-block">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default About;
