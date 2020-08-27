import React from 'react'
import { withRouter } from 'react-router-dom'
const Header = ({ history }) => {
    return (
        <div className="Header">
            <div className="logo">
                <img alt="Logo" height={60} src={require("../assets/logo/side_color.png")} />
            </div>
            <div className="links">
                <div className="link" onClick={() => history.push('/')}>Home</div>
                <div className="link" onClick={() => history.push('/register')}>Register</div>
            </div>
        </div>
    )
}

export default withRouter(Header);
