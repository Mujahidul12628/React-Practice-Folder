import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePostData = ({ singlePost }) => {
    const { id, title, body } = singlePost

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/singlePostData/${id}`)

    }
    return (
        <div>
            <div className='post-data'>
                <h5>Id: {id} </h5>
                <h4>{title} </h4>
                <h4>{body} </h4>
                <p><Link to={`/singlePostData/${id}`}> Show details using link</Link></p>
                <p> <Link to={`/singlePostData/${id}`}><button>Show Post data using btn</button></Link></p>

                <button onClick={handleNavigation}>With btn handler</button>
            </div>
        </div>
    );
};

export default SinglePostData;