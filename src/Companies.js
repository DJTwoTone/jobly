import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import Search from './Search';
import CardList from './CardList';

function Companies() {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
        }

        getCompanies();
    }, []);

    async function handleSearch(search) {
        let companies = await JoblyApi.getCompanies(search);
        setCompanies(companies);
    }

    return (
        <div className='companies'>
            <Search searchParams={handleSearch} />
            <CardList cards={companies} />
        </div>
    );
}

export default Companies