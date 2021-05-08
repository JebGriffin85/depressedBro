import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getPosts } from '../../store/posts';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css';
import ChatAccordion from '../Accordian/index';
import banner from './banner.png'

function Homepage() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const reversedPosts = Object.values(posts).reverse();
    let user = useSelector((state) => state.session.user);

    useEffect(() =>  {
        dispatch(thunk_getPosts())
    }, [dispatch]);


    return (
        <>
           <img className={styles.banner} src={banner}/>
        <div className={styles.mainContainer}>
       <ChatAccordion />
       {reversedPosts.map((post) => (
           
           <div className={styles.postDiv} key={post.id}>
           <Link to={`/posts/${post.id}`}>
            
           <img className={styles.avatar} src={post.avatar}/>
           {post.title}
           </Link>
           </div>
       ))}
       </div>
       </>
    )
}

export default Homepage;