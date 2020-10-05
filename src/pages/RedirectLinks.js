import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const RedirectLinks = () => {
	return (
		<div className="RedirectLinks">
			<div className="container">
				<div className="top">
					<h1>
						Hello Freshers !
						<span role="img" aria-label="" aria-labelledby="">
							{" "}
							🎉
						</span>
					</h1>
					<div className="bar">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<h3>
						Developer Student Club GEU powered by{" "}
						<span id="G">G</span>
						<span id="o">o</span>
						<span id="o2">o</span>
						<span id="g">g</span>
						<span id="l">l</span>
						<span id="e">e</span> Developers invites you to join us
					</h3>
				</div>
				<section>
					<article>
						<div className="head">
							<h2>Join the session</h2>
							<div className="bar">
								<div className="bar1"></div>
								<div className="bar2"></div>
								<div className="bar3"></div>
							</div>
						</div>
						<div className="content">
							<p>
								DSC GEU has an amazing ice-breaking session
								planned for all of you to get the right guidance
								at right time. <br />
								This interactive session brings you a golden
								opportunity to interact with the team of DSC GEU
								and to get to know more about this technical
								community and how can we help you to grow your
								technical skills and intelligence in a peer to
								peer learning environment.
							</p>
							<h4>Date : October 10, 2020</h4>
							<h4>Time : 12:00pm - 2:00pm</h4>
						</div>
						<button className="apply" disabled>
							Join Session
						</button>
						<div className="help">
							<img
								src="https://static.thenounproject.com/png/16966-200.png"
								alt="bulb"
							/>
							<div className="text">
								<div className="content">
									Refresh this page 15 min before the event
									time to join this session
								</div>
							</div>
						</div>
					</article>
					<aside>
						<img
							src={require("../assets/vectors/content.svg")}
							alt="Content_svg"
						/>
					</aside>
				</section>
				<div className="links">
					<div
						className="link"
						onClick={() =>
							window.open(
								"https://www.linkedin.com/company/dscgeu"
							)
						}>
						<FaLinkedin color="#4d8ffb" />
						<div className="name" style={{ color: "#4d8ffb" }}>
							dscgeu
						</div>
					</div>
					<div
						className="link"
						onClick={() =>
							window.open("https://instagram.com/dsc.geu")
						}>
						<FaInstagram color="#ff46a4" />
						<div className="name" style={{ color: "#ff46a4" }}>
							dsc.geu
						</div>
					</div>
					<div
						className="link"
						onClick={() => window.open("http://github.com/dscgeu")}>
						<FaGithub />
						<div className="name">dscgeu</div>
					</div>
					<div
						className="link"
						onClick={() => window.open("mailto:dsc.geu@gmail.com")}>
						<FiMail color="#4d8ffb" />
						<div className="name" style={{ color: "#4d8ffb" }}>
							dsc.geu@gmail.com
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RedirectLinks;
