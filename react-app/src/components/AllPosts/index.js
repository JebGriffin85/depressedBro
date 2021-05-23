import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getAllPosts } from '../../store/posts';
import { Link } from 'react-router-dom';


function AllPosts () {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const allPosts = Object.values(posts);

    useEffect(() => {
        dispatch(thunk_getAllPosts())
    }, [dispatch]);


    return (
        <>
        <h1>here</h1>
        {allPosts.map((post) => (
               <Link to={`/posts/${post.id}`}>
            <div>{post.title}</div>
           </Link>
           
       ))}
        </>
    )
};

export default AllPosts;