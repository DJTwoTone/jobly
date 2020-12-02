import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './JoblyApi';
import UserContext from './UserContext';

function Company() {
    const { handle } = useParams();
    const { user } = useContext(UserContext);

    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const res = await JoblyApi.getCompany(handle);

            setCompany(res);
        }

        getCompany();
    }, [handle]);


    return (
        <div className='company'>
            <h4 className="text-capitalize">{company.handle}</h4>
            <p>{company.description}</p>
        </div>
    )
}

export default Company;