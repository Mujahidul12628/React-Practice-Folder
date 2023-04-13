import React from 'react';
import './Home.css'

import Header from '../Header/Header';
import AvailableJob from '../AvailableJob/AvailableJob';
import TopContainer from '../TopContainer/TopContainer';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCompany = useLoaderData()

    return (

        <div className='home-container'>
            <TopContainer></TopContainer>
            <AvailableJob></AvailableJob>
            <div>
                <h3 className='text-center'>Featured Jobs</h3>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div id='featured-job-container'>
                    {
                        jobCompany.map(companyData => <FeaturedJob
                            key={companyData.id}
                            companyData={companyData}
                        ></FeaturedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;