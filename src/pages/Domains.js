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
						<div className="heading">Domains </div>
						<div className="bar">
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</div>
						<div className="content">
							<ul>
								<li>
									💠&nbsp; Web Developement
									<div className="explain">
										It will include Full Stack Web
										Development. (Every Stack is welcomed
										whether it be MERN, MEAN , MEVN etc...)
									</div>
								</li>

								<li>
									💠&nbsp; Implementation For Native Apps.
									<div className="explain">
										It will include Technologies like
										Flutter(By Google), React
										Native(Facebook's implementation for
										mobile apps, recently got support for
										windows),Electron(Develop Desktop Apps
										using JS),Ionic etc...
									</div>
								</li>
								<li>
									💠&nbsp; Native Mobile Development
									<div className="explain">
										It includes Kotlin/Java for Android.{" "}
										<br /> and Swift for iOS
									</div>
								</li>
								<li>
									💠&nbsp; Cloud Computing
									<div className="explain">
										Cloud computing is the on-demand
										availability of computer system
										resources. This will include GCP(Google
										Cloud Platform), AWS, Microsoft Azure
									</div>
								</li>
								<li>
									💠&nbsp; ML/AI
									<div className="explain"></div>
								</li>
								<li>
									💠&nbsp; Cyber Security And Networking
									<div className="explain"></div>
								</li>
								<li>
									💠&nbsp; IoT and AR / VR
									<div className="explain"></div>
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
