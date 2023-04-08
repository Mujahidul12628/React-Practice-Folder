import React from 'react';

const SinglePostData = ({ singlePost }) => {
    const { id, title, body } = singlePost
    return (
        <div>
            <div>
                <h5>Id: {id} </h5>
                <h4>{title} </h4>
                <h4>{body} </h4>
            </div>
        </div>
    );
};

export default SinglePostData;