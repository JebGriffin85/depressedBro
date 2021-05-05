import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getPosts } from '../../store/posts';
import { Link } from 'react-router-dom';

function Homepage() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);



    useEffect(() => {
        dispatch(thunk_getPosts())
    }, [dispatch]);


    return (
       <>
       
       {Object.values(posts).map((post) => (
           
           <div key={post.id}>
           <Link to={`/posts/${post.id}`}>
           <img src={post.avatar}/>
           {post.title}
           </Link>
            </div>
       ))}
       </>
    )
}

export default Homepage;