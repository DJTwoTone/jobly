import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './JoblyApi';
import UserContext from './UserContext';
import CardList from './CardList';

function Company() {
    const { handle } = useParams();
    const { user } = useContext(UserContext);

    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompanyAndJobs() {
            const { jobs } = user;
            const res = await JoblyApi.getCompany(handle);

            const appliedForJobs = new Set(jobs.map(job => job.id));

            res.jobs = res.jobs.map(job => ({
                ...job,
                state: appliedForJobs.has(job.id) ? "applied" : null

            }))

            setCompany(res);
        }

        getCompanyAndJobs();
    }, [handle, user]);

    async function apply(idx) {
        if (company && Array.isArray(company.jobs) && idx < company.jobs.length) {
            let jobId = company.jobs[idx].id;
            let reply = await JoblyApi.apply(jobId);
            setCompany(c => {
                let newCompany = { ...c };
                newCompany.jobs = newCompany.jobs.map(job =>
                  job.id === jobId ? { ...job, state: reply} : job  
                );
                return newCompany;
            })
        }
    }

    


    return (
        <div className='company'>
            <h4 className="text-capitalize">{company.handle}</h4>
            <p>{company.description}</p>
            <CardList cards={company.jobs} apply={apply} />
        </div>
    )
}

export default Company;