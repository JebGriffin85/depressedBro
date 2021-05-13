import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getUserPosts } from '../../store/posts';
import { Link } from 'react-router-dom';
import { Redirect, useHistory } from "react-router-dom";
import styles from './profilepage.module.css';

function ProfilePage() {
    const dispatch = useDispatch();
    const userPosts = useSelector((state) => state.postReducer);
    const id = useSelector((state) => state.session.user.id);
    const reversedPosts = Object?.values(userPosts).reverse();
    const user = useSelector((state) => state.session.user);
    

    


    useEffect(() => {
        dispatch(thunk_getUserPosts(id))
    }, [dispatch]);

    return (
        <div className={styles.mainContainer}>
        <div className={styles.header}>
            <img src={user?.avatar} className={styles.mainavatar} />
        <h3>
            {user.firstname}'s Sweet Profile
        </h3>
        </div>
        <div className={styles.bottomcontainer}>
        <div className={styles.stats}>
            <h4 className={styles.statsheader}>My Stats:</h4>
            Number of posts: {reversedPosts.length}
            <br/>
            Help given: {user.comments.length}
            <br/>
            Password Strength: Not good
        </div>
        <div className={styles.mypost}>
            <h4 className={styles.myposth4}>My Posts:</h4>
        {reversedPosts.map((post) => (
            <div key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <div className={styles.posttitle}>{post.title}</div>
                    
                </Link>
            </div>
        ))}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;