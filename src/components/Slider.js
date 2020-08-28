import React from "react";
import { withRouter } from "react-router-dom";

const Slider = ({ history }) => {
    const url = String(history.location.pathname)
  return (
    <div className="Slider">
        <button className={(url === '/') ? "left selected" : "left"}  onClick={() => history.push('/')}>What is DSC?</button>
        <button className={(url === '/why') ? "middle selected" : "middle"} onClick={() => history.push('/why')}>Why DSC?</button>
        <button className={(url === '/domains') ? "right selected" : "right"} onClick={() => history.push('/domains')}>Domains</button>
    </div>
  );
};

export default withRouter(Slider);
