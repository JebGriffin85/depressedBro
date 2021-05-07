import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getPosts } from '../../store/posts';
import { Link } from 'react-router-dom';
import './homepage.css'
import ChatAccordion from '../Accordian/index';
import banner from './banner.png'

function Homepage() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const reversedPosts = Object.values(posts).reverse();


    useEffect(() =>  {
        dispatch(thunk_getPosts())
    }, [dispatch]);


    return (
       <>
       <img src={banner}/>
       {reversedPosts.map((post) => (
           
           <div key={post.id}>
           <Link to={`/posts/${post.id}`}>
            
           <img className='avatar' src={post.avatar}/>
           {post.title}
           </Link>
           </div>
       ))}
       <ChatAccordion />
       </>
    )
}

export default Homepage;