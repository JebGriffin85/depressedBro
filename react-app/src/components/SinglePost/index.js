import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { thunk_getPosts } from '../../store/posts';
import { useParams, useHistory } from 'react-router-dom';
import { thunk_getSinglePost } from '../../store/posts';

function SinglePost() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    // const post = useSelector((state) => state.postReducer[id])
    const post = useSelector((state) => state.postReducer)
    
    const goBack = () => {
        history.goBack()
    };

    useEffect(() => {
        dispatch(thunk_getSinglePost(id))
    }, [dispatch]);


    return(
        <>
        <button onClick={goBack}>Go Back</button>
        <div>
            <h3><img className="avatar" src={post?.avatar}/>{post?.title}</h3>
            <p>{post?.body}</p>
            {post?.comments?.map((comment) => (
                <div key={comment.id}>
                <p ><img className="avatar" src={comment.avatar} />{comment.body}</p>
                </div>
            ))}
        </div>
        
      

        </>
    )
}

export default SinglePost;