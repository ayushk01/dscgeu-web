import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "../components/Slider";
const Home = ({ history }) => {
  return (
    <div className="Home Content">
      <div className="container">
        <section className="top">
          <div className="heading">
            Perks of being a DSC?
          </div>
          <div className="bar">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
          <div className="content">
            <ul>
              <li>💠Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint.</li>
              <li>💠Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint.</li>
              <li>💠Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint.</li>
              <li>💠Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint.</li>
            </ul>
          </div>
        </section>
        <Slider />
      </div>
    </div>
  );
};

export default withRouter(Home);
