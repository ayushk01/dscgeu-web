import React from "react";
import { withRouter } from "react-router-dom";
const Header = ({ history }) => {
	const url = String(history.location.pathname);
	return (
		<div className="Header">
			<div className="lPogo">
				<img
					alt="Logo"
					height={60}
					onClick={() => history.push("/")}
					src={require("../assets/logo/side_color.png")}
				/>
			</div>
			<div className="links">
				<div
					className={url === "/" ? "link selected" : "link"}
					onClick={() => history.push("/")}>
					Home
				</div>
				<div
					className={url === "/join" ? "link selected" : "link"}
					onClick={() => history.push("/join")}>
					Join
				</div>
			</div>
		</div>
	);
};

export default withRouter(Header);
