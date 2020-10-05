import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
const Home = ({ history }) => {
	return (
		<>
			<Header />
			<div className="Home Content">
				<div className="container">
					<section className="top">
						<div className="heading">Perks of being a DSC?</div>
						<div className="bar">
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</div>
						<div className="content">
							<ul>
								<li>
									💠 Community Support
									<div className="explain">
										The community is backed by Google
										Developers.
									</div>
								</li>
								<li>
									💠 Network
									<div className="explain">
										It provides student with an opportunity
										to meet other students and professionals
										with common goals and interest
									</div>
								</li>
								<li>
									💠 Career Development
									<div className="explain">
										Also encourages career development and
										an understanding of opportunities within
										the industry.
									</div>
								</li>
								<li>
									💠 Informative
									<div className="explain">
										Considering the same , Students can also
										receive information and resources that
										will support their future interest goals
									</div>
								</li>
								<li>
									💠 Personal Development
									<div className="explain">
										Encourages personal development through
										communication, exploration of different
										technologies, meet-ups with different
										people
									</div>
								</li>
								<li>
									💠 Mentor Support
									<div className="explain">
										We have amazing mentors and alumnis
										connected with us to guide throughout
										your journey
									</div>
								</li>
							</ul>
						</div>
					</section>
					<Slider />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default withRouter(Home);
