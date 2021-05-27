import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import styles from './showsearchresults.module.css';
import { thunk_getPostsSearch } from '../../store/search.js';
import banner from './banner.png'

const ShowSearchResults = () => {
   const dispatch = useDispatch();
   const posts = useSelector((state) => state.searchReducer);
   const allPosts = Object.values(posts);
   const { query } = useParams();
   
   useEffect(() => {
       dispatch(thunk_getPostsSearch(query))
   }, [dispatch]);


    return (
        <>
            <div className={styles.outerDiv}>
                <img className={styles.banner} src={banner} />
                <p>search for woes ~ help your bros</p>
            </div>
         <div className={styles.innerMainContainer}>
           {allPosts.length ? null : <h3>No Results Found</h3>}
           {allPosts.map((post) => (
            <div className={styles.innerContainer}>
                <Link to={`/posts/${post.id}`}>
                    <div className={styles.postDiv} key={post.id}>
                        <img className={styles.avatar} src={post.avatar} />

                        <div className={styles.title}>{post.title}</div>
                        <br />
                        {post.body?.slice(0, 25) + '...'}
                    </div>
                </Link>
            </div>
        ))}
        </div>
        </>
    )
}

export default ShowSearchResults;