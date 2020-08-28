import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "../components/Slider";
const Home = ({ history }) => {
  return (
    <div className="Home">
      <div className="container">
        <section className="top">
          <div className="logo">
            <img
              src={require("../assets/logo/color_transparent.png")}
              height={200}
              alt=""
            />
          </div>
          <div className="content">
            Developer Student Club GEU is a student community focused on
            building and imparting technical skills to students, so that their
            transition to industry professionals becomes easier. We figure out
            problems, and then we figure out solutions, all through technology.
          </div>
          <div className="register">
            <div className="text">Currently Hiring For Core Team</div>
            <a className="apply" onClick={() => history.push("/register")}>
              Apply Now
            </a>
          </div>
        </section>

        <Slider />
      </div>
    </div>
  );
};

export default withRouter(Home);
