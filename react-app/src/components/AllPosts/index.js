import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getAllPosts } from '../../store/posts';
import { Link, useHistory } from 'react-router-dom';
import styles from './allPosts.module.css';

function AllPosts () {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const allPosts = Object.values(posts);
    const history = useHistory();

    useEffect(() => {
        dispatch(thunk_getAllPosts())
    }, [dispatch]);

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
        <p className={styles.goback} onClick={goBack}>Go Back</p>
            <div className={styles.commentContainer}>
        {allPosts.map((post) => (
               <Link to={`/posts/${post.id}`}>
                 <div>{post.title}</div>
               </Link>
       ))}
            </div>
        </>
    )
};

export default AllPosts;