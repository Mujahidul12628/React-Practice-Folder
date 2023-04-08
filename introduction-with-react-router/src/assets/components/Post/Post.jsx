import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePostData from '../SinglePostData/SinglePostData';


const Post = () => {
    const post = useLoaderData();
    return (
        <div>

            <h2>All post are here {post.length} </h2>
            <div>
                {
                    post.map(singlePost => <SinglePostData
                        key={singlePost.id}
                        singlePost={singlePost}
                    ></SinglePostData>)
                }

            </div>
        </div>
    );
};

export default Post;