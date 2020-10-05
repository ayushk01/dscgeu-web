import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

const Register = ({ history }) => {
	const formLinks = {
		editorial: "https://forms.gle/zguhXZm7TVgSKiGa7",
		socialMedia: "https://forms.gle/17drCj2nrobNUzyL6",
		design: "https://forms.gle/zK2faNWye8A2c7a97",
		techLead: "https://forms.gle/f5WVdwBAgH1rsvYm6",
	};

	const positions = {
		nontech: [
			{
				title: "Editorial In Chief",
				body:
					"A Essential core team member that will handle the ideation and creation of compelling content including social media content website articles and some other few technical writings.",
				role:
					"She/he will be in charge of managing the flow of content around the club hence making it a reputable position in the club.",
				link: formLinks.editorial,
			},
			{
				title: "Social Media Manager",
				body:
					"A Essential core team member that will handle the marketing and social media campaigns and strategies including content ideation and implementation schedule.",
				role:
					"She/he will be responsible for managing Instagram handle,LinkedIn Page, Twitter handle, Telegram.",
				link: formLinks.socialMedia,
			},
		],
		tech: [
			{
				title: "Technical Lead",
				body:
					"A Essential role in Core Team that requires effective collaboration and leadership skills with the addition of great technical knowledge who can help to clear roadblocks of the team and should be a great commutator to find ways for non-technical people help understand technical concepts.",
				role:
					"Technical Lead would be responsible for managing his own team under a particular domain, key speakers at events of their domain, solving doubts and doing internal projects in collaboration with other members.",
				link: formLinks.techLead,
			},
			{
				title: "Master Designer",
				body:
					"An essential core team member who prepares work to be accomplished by gathering information and materials. Plans concept by studying information and materials. Illustrates the concept by designing a layout of art..",
				role:
					"He/She will be responsible for creating designs for events,Insta Posts, Small Posters etc..",
				link: formLinks.design,
			},
			{
				title: "Women Influencer",
				body:
					"Establishing themselves as influencers gives women the opportunity to build communities where they can cultivate conversation around topics important to them.",
				role:
					"She will be responsible for creating motivation among women of community and spreading special programmes aimed at womens's empowerment in the field of tech",
				isAlert: true,
			},
		],
	};

	return (
		<div className="Register">
			<Header />
			<div className="container">
				<div className="heading">Currently Open For</div>

				<div className="section">
					<div className="sub-heading">Technical</div>
					<div className="cards">
						{positions.tech.map((item) => (
							<Card
								key={item.title}
								title={item.title}
								body={item.body}
								role={item.role}
								formLink={item.link}
								isAlert={item.isAlert}
							/>
						))}
					</div>
				</div>

				<div className="section">
					<div className="sub-heading">Non Technical</div>
					<div className="cards">
						{positions.nontech.map((item) => (
							<Card
								key={item.title}
								title={item.title}
								body={item.body}
								role={item.role}
								formLink={item.link}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Register);
