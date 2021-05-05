import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getPosts } from '../../store/posts';
import { useParams, useHistory } from 'react-router-dom';
import { thunk_getSinglePost } from '../../store/posts';

function SinglePost() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector((state) => state.postReducer[id])



    useEffect(() => {
        dispatch(thunk_getPosts())
    }, [dispatch]);


    return(
        <>
       
        <div>
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
            {post?.comments.map((comment) => (
                <div key={comment.id}>
                <p >{comment.body}</p>
                </div>
            ))}
        </div>
        
      

        </>
    )
}

export default SinglePost;