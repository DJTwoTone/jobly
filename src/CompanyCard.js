import React from 'react';
import { Link } from 'react-router-dom';
//need default logo

function CompanyCard({ obj = {} }) {
    const { name, description, logo_url, handle } = obj;

    return (
        <Link className="Card card" to={`/compnaies/${handle}`}>
            <div className="card-body">
                <h3 className="card-title d-flex justify-content-between">
                    <span className="test-capitalize">{name}</span>
                    <img src={logo_url} alt={`${name}'s Logo`}/>
                </h3>
                <p>{ description }</p>
            </div>
        
        </Link>
    )
}

export default CompanyCard;