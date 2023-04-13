
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './JobDetails.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const JobDetails = () => {

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

    const { salaryHigh, salaryLow, email, position, phone, address, country, location, jobDescription, responsibility, requirement, experience } = details

    const navigate = useNavigate()
    const handleApplyNowClick = () => {
        // let appliedJobsCount = Number(localStorage.getItem('appliedJobsCount')) || 0;
        // localStorage.setItem('appliedJobsCount', appliedJobsCount + 1);
        navigate(`/appliedJob/${id}`)
    }


    return (
        <div className="">
            <div className='py-5 my-3' id='details-background'>
                <h2 className='py-5 text-center'>Job Details  {jobDetails.length} </h2>
            </div>
            <div className='my-3' id='job-details-data'>
                <div className="col-10 col-md-8 col-lg-7" id="requirement">
                    <p> <b>Job Description: </b>{jobDescription}
                    </p>

                    <p> <b>Job Responsibility: </b>{responsibility}
                    </p>

                    <p> <b>Educational Requirement: </b>{requirement}
                    </p>

                    <p> <b>Experiences: </b>{experience}
                    </p>
                </div>
                <div className='col-10 col-md-8 col-lg-4' >
                    <div id='job-data-container'>
                        <div id='job-details-container'>
                            <h5>Job Details</h5>
                            <hr />
                            <div className='mb-3'><b>Salary:</b>
                                <span> {salaryLow}K </span>
                                <span>- {salaryHigh}K </span>
                                <span> (Per Year)</span>
                            </div>
                            <p><b>Job Title: </b> {position}
                            </p>
                        </div>
                        <div id='contact-information'>
                            <h5 className='mt-3'>Contact Information</h5>
                            <hr />
                            <p>
                                <b>Phone: </b> {phone}
                            </p>
                            <p>
                                <b>Email: </b> {email}
                            </p>
                            <div>
                                <b>Address: </b>
                                <span> {address} </span>
                                <div>
                                    <span> {location}, </span>
                                    <span> {country} </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Button id='btn-apply' className='mt-3 col 12' variant="primary" onClick={handleApplyNowClick}>Apply Now</Button> */}

                    {/* <Button id='btn-apply' className='mt-3 col 12' variant="primary" onClick={() => handleApplyNowClick(details)}>Apply Now</Button> */}
                    <Button id='btn-apply' className='mt-3 col 12' variant="primary" onClick={handleApplyNowClick}>Apply Now</Button>

                    {/* <Link id='btn-apply' to={`/job-details/${id}`}>
                        <Button variant="primary">View Details
                        </Button>{' '}
                    </Link> */}
                </div>


            </div>
        </div>

    );
};

export default JobDetails;




















































// import React, { useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import './JobDetails.css';
// import Button from 'react-bootstrap/Button';
// import Helmet from '..';

// const JobDetails = () => {
//     const [details, setDetails] = useState({});
//     const { id } = useParams();
//     const jobDetails = useLoaderData();

//     const handleClickApplyNow = () => {
//         localStorage.setItem('appliedJob', id);
//     };

//     if (jobDetails && jobDetails.length > 0) {
//         const detailsData = jobDetails.find((d) => d.id === Number(id));
//         if (detailsData) {
//             setDetails(detailsData);
//         } else {
//             console.log(`No job found with id ${id}`);
//         }
//     }

//     return (
//         <div className="">
//             <Helmet pageTitle={details.position} />
//             <div className="py-5 my-3" id="details-background">
//                 <h2 className="py-5 text-center">Job Details</h2>
//             </div>
//             <div className="my-3" id="job-details-data">
//                 <div className="col-10 col-md-8 col-lg-7" id="requirement">
//                     <p>
//                         <b>Job Description: </b>
//                         {details.jobDescription}
//                     </p>

//                     <p>
//                         <b>Job Responsibility: </b>
//                         {details.responsibility}
//                     </p>

//                     <p>
//                         <b>Educational Requirement: </b>
//                         {details.requirement}
//                     </p>

//                     <p>
//                         <b>Experiences: </b>
//                         {details.experience}
//                     </p>
//                 </div>
//                 <div className="col-10 col-md-8 col-lg-4">
//                     <div id="job-data-container">
//                         <div id="job-details-container">
//                             <h5>Job Details</h5>
//                             <hr />
//                             <p>
//                                 <b>Salary:</b>
//                                 <span> {details.salaryLow}K </span>
//                                 <span>- {details.salaryHigh}K </span>
//                                 <span> (Per Year)</span>
//                             </p>
//                             <p>
//                                 <b>Job Title: </b> {details.position}
//                             </p>
//                         </div>
//                         <div id="contact-information">
//                             <h5>Contact Information</h5>
//                             <hr />
//                             <p>
//                                 <b>Phone: </b> {details.phone}
//                             </p>
//                             <p>
//                                 <b>Email: </b> {details.email}
//                             </p>
//                             <p>
//                                 <b>Address: </b>
//                                 <span> {details.address} </span>
//                                 <p>
//                                     <span> {details.location}, </span>
//                                     <span> {details.country} </span>
//                                 </p>
//                             </p>
//                         </div>
//                     </div>

//                     <Button
//                         id="btn-apply"
//                         className="mt-3 col 12"
//                         variant="primary"
//                         onClick={handleClickApplyNow}
//                     >
//                         Apply Now
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobDetails;


