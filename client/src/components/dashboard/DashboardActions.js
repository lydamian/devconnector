import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div>
            <div className="dash-buttons">
                <Link to="/edit-profile" className="btn btn-light">
                    <i className="fas fa-user-circle text-primary"></i>
                    &nbsp;Edit Profile
                </Link>
                <Link to="/add-experience" className="btn btn-light">
                    <i className="fab fa-black-tie text-primary"></i>
                    &nbsp;Add Experience
                </Link>
                <Link to="/add-education" className="btn btn-light">
                    <i className="fas fa-graduation-cap text-primary"></i>
                    &nbsp;Add Education
                </Link>
            </div>
        </div>
    )
}

export default DashboardActions;