import React from 'react';
import './totalJob.css'

const AvailableJobData = ({ totalPosition }) => {
    const { id, availableJob, jobImg, jobSector } = totalPosition;
    return (
        <div>

            <div className="shadow-lg card " id='total-job-container'>
                <img src={jobImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="text-center card-title">{jobSector}</h5>
                    <p className="card-text">
                        <span>{availableJob}</span> Jobs
                        Available Now
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AvailableJobData;