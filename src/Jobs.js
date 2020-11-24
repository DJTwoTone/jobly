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

    return (
        <div className='jobs'>
            <Search searchStr={search}/>
            <CardList cards={jobs}/>
        </div>
    )
}

export default Jobs;