import React from 'react'
import { withRouter } from 'react-router-dom';
const Home = ({ history }) => {
    return (
        <div className="Home">
            <div className="container">
                <div className="logo">
                    <img src={require("../assets/logo/color_transparent.png")} height={200} alt="" />
                </div>
                <div className="content">
                    Developer Student Club GEU is a student community focused on building and imparting technical skills to students, so that their transition to industry professionals becomes easier. We figure out problems, and then we figure out solutions, all through technology.
                </div>
                <div className="register">
                    <div className="text">Currently Hiring For Core Team</div>
                    <button onClick={() => history.push('/register')}>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);
