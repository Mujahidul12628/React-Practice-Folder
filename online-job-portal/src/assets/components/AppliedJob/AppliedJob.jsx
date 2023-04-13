
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './AppliedJob.css'

const AppliedJob = () => {

    const [details, setDetails] = useState({});

    const { id } = useParams();
    const jobDetails = useLoaderData();

    useEffect(() => {

        if (jobDetails && jobDetails.length > 0) {
            const detailsData = jobDetails.find(d => d.id === Number(id));;
            // console.log('detailsData:', detailsData);
            if (detailsData) {
                setDetails(detailsData);
            } else {
                console.log(`No job found with id ${id}`);
            }
        }
    }, [id, jobDetails]);

    const { companyImg, company, salaryHigh, salaryLow, email, position, phone, address, country, location, jobDescription, responsibility, requirement, experience, jobType, jobSchedule } = details

    const navigate = useNavigate()
    // const handleDetailsNow = () => {
    //     // navigate(`/appliedJob/${id}`)
    //     navigate(`/appliedJob/${id}`)
    // }
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="">
            <div className='py-5 my-3' id='details-background'>
                <h2 className='py-5 text-center'> Applied Job </h2>
            </div>
            <div className='d-flex justify-content-end' id='job-type'>
                <Button variant="outline-primary">Onsite</Button>{' '}
                <Button variant="outline-primary">Remote</Button>{' '}
            </div>
            <div className='my-3' id='job-details-data'>
                <div className='review-item'>

                    <img src={companyImg} alt="" />
                    <div className='review-details'>
                        <h5 className=''>{position} </h5>
                        <h6 className=''>{company} </h6>
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
                    <Button className='' variant="primary" onClick={handleGoBack}>View Details</Button>
                </div>


            </div>
        </div>

    );
};

export default AppliedJob;

