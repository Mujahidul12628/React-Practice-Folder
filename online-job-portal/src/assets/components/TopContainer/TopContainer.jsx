import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import user from '../../images/user.png'
import admin from '../../images/admin.png'
import './TopContainer.css'

const TopContainer = () => {
    return (
        <div className='d-flex flex-column-reverse flex-md-row justify-content-around align-items-center' id='text-div'>
            <div style={{ width: '25rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <div className='container-content'>
                    <h2>Explore Job Opportunities with Alpha</h2>
                    <p className='text-justify'>
                        Team Alpha are committed to helping job seekers find their dream careers by providing a user-friendly job search experience and connecting them with the best opportunities available.Our advanced search technology and personalized services make the job gain process efficient and effective.
                    </p>
                    <div id='button-div'>
                        <Button variant="primary">Get Started</Button>
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <img className="img-fluid " src={admin} alt="" />
                <div className=""></div>
            </div>
        </div>

    );
};

export default TopContainer;