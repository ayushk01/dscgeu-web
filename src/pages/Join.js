import React from "react";
import { withRouter } from "react-router-dom";

const Register = ({ history }) => {
	return (
		<div className="Join">
			<div className="container">
				<section>
					<h1>Join Developer Student Clubs Grpahic Era</h1>
					<div className="bar">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<div className="content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Saepe, ab?
						</p>
						<h3>Step 1: </h3>
						<p>Lorem ipsum dolor sit amet.</p>
						<button className="apply">Join On the Site</button>
						<h3>Step 2: </h3>
						<p>Lorem ipsum dolor sit amet.</p>
						<button className="apply">Join Telegram Group</button>
						<p className="and">AND</p>
						<button className="apply">
							Join Telegram Announcements Group
						</button>
					</div>
					<div className="bar bar-bottom">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
					<div className="enjoy">
						<h3>All Steps Complete</h3>
						<p>🎉You are now a memeber 🎉</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default withRouter(Register);
