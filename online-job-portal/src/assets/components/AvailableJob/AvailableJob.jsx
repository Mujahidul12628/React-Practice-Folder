import React, { useEffect, useState } from 'react';
import AvailableJobData from '../AvailableJobData/AvailableJobData';
import './AvailableJob.css'

const AvailableJob = () => {
    const [totalJob, setTotalJob] = useState([])
    useEffect(() => {
        fetch('/availableJob.json')
            .then(res => res.json())
            .then(data => setTotalJob(data))
    }, [])
    return (
        <div className='my-5 mx-1'>
            <h3 className='text-center'>Job Category List</h3>
            <p className='text-center mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='' id='available-job'>
                {
                    totalJob.map(totalPosition => <AvailableJobData
                        key={totalPosition.id}
                        totalPosition={totalPosition}
                    ></AvailableJobData>)
                }
            </div>
        </div>
    );
};

export default AvailableJob;