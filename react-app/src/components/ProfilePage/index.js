import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getUserPosts } from '../../store/posts';
import { Link } from 'react-router-dom';
import { Redirect, useHistory } from "react-router-dom";

function ProfilePage() {
    const dispatch = useDispatch();
    const userPosts = useSelector((state) => state.postReducer)
    const id = useSelector((state) => state.session.user.id)
    const reversedPosts = Object?.values(userPosts).reverse();


    


    useEffect(() => {
        dispatch(thunk_getUserPosts(id))
    }, [dispatch]);

    return (
        <>
        <h3>here</h3>
        {reversedPosts.map((post) => (
            <div key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    
                </Link>
            </div>
        ))}

        </>
    )
}

export default ProfilePage;