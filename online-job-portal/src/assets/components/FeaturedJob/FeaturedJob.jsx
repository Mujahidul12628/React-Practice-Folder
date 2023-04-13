import React, { useEffect, useState } from 'react';
import './FeaturedJob.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const FeaturedJob = ({ companyData }) => {
    const { id, companyImg, company, position, salaryLow, salaryHigh, jobType, jobSchedule, location, country } = companyData;

    return (
        <div>
            <div className="card-deck mx-1 mt-3 shadow-lg" id='align'>

                <div className="card text-start" id="featured-job-card">
                    <img className="card-img-top" src={companyImg} alt="company image" />
                    <div className="" id='featured-job-body'>
                        <h4 className="card-title">{position}</h4>
                        <h5 className="card-title">{company}</h5>

                        <div className='d-flex' id='job-type'>
                            <Button variant="outline-primary">{jobType}</Button>{' '}

                            <Button variant="outline-primary">{jobSchedule}</Button>{' '}
                        </div>

                        <div className='d-flex' id="job-info">
                            <div id="location">
                                <span>{location}</span>
                                <span>, {country} </span>
                            </div>
                            <div id="salary">
                                <span>Salary: </span>
                                <span>{salaryLow}K - </span>
                                <span>{salaryHigh}K </span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Link id='link-tag' to={`/job-details/${id}`}>
                            <Button variant="primary">View Details
                            </Button>{' '}
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default FeaturedJob;