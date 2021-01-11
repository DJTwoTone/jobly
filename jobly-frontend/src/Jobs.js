import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import Search from './Search';
import JoblyApi from './JoblyApi';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    async function search(search) {
        let jobs = await JoblyApi.getJobs(search);
        setJobs(jobs);
    }

    useEffect(function() {
        search();
    }, []);

    async function apply(idx) {
        let jobId = jobs[idx].id;
        let message = await JoblyApi.apply(jobId);
        setJobs(j => j.map(job =>
            job.id === jobId ? { ...job, state: message} : job
            ))
    }

    return (
        <div className='jobs'>
            <Search searchStr={search}/>
            <CardList cards={jobs} apply={apply} />
        </div>
    )
}

export default Jobs;