import React from 'react';
import { withRouter } from 'react-router-dom';

const Register = ({ history }) => {

    const formLinks = {
        editorial: "",
        design: "",
        socialMedia: "",
        womenTechLead: "",
        techLead: "",
    }

    return (
        <div className="Register">
            <div className="container">
                <div className="heading">Currently Open For</div>

                <div className="section">
                    <div className="sub-heading">
                        Non Technical
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="card-head">Editorial Inchief</div>
                            <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti?</div>
                            <div className="card-button">
                                <button className="apply" >Apply Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-head">Social Media Manager</div>
                            <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti?</div>
                            <div className="card-button">
                                <button className="apply">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="sub-heading">
                        Technical
                    </div>
                    <div className="cards">

                        <div className="card">
                            <div className="card-head">Master Designer</div>
                            <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti?</div>
                            <div className="card-button">
                                <button className="apply">Apply Now</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-head">Technical Lead</div>
                            <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corrupti?</div>
                            <div className="card-button">
                                <button className="apply">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register);
