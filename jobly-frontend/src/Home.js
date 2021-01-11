import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from './UserContext';


function Home() {
    const { user } = useContext(UserContext);

    return (
        <div className='Home'>
            <div className="container text-center">
                <h1>Jobly</h1>
                <p className="lead">Jobs, jobs everywhere and not a moment to spare.</p>
                {user ? (
                    <h2>Great to see you, {user.first_name}!</h2>
                ) : (
                    <Link className="btn btn-primary" to="/login">
                        LOG IN
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Home;