import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "../components/Slider";
const Home = ({ history }) => {
  return (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>

              <li>
                💠&nbsp; Implementation For Native Apps.
                <div className="explain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>
              <li>
                💠&nbsp; Native Mobile Development
                <div className="explain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>
              <li>
                💠&nbsp; Cloud Computing
                <div className="explain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>
              <li>
                💠&nbsp; ML/AI
                <div className="explain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>
              <li>
                💠&nbsp; Cyber Security And Networking
                <div className="explain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>
              <li>
                💠&nbsp; IoT and AR / VR
                <div className="explain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, provident.
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Slider />
      </div>
    </div>
  );
};

export default withRouter(Home);
