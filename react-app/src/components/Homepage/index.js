import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getPosts } from '../../store/posts';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css';
import banner from './banner.png'
import chuck2 from './chuck2.png'

function Homepage() {
    const [joke, setJoke] = useState('Click Chuck to feel better');
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const reversedPosts = Object.values(posts).reverse().slice(0, 24);
    let user = useSelector((state) => state.session.user);

    const chuckFetch = async () => {
        const res = await fetch('https://api.chucknorris.io/jokes/random?category=history')
        const data = await res.json();
        setJoke(data.value)
    }


    useEffect(() =>  {
        dispatch(thunk_getPosts())
    }, [dispatch]);


    return (
        <>
            <img className={styles.chuck} src={chuck2} onClick={() => chuckFetch()} />{joke}
        <div className={styles.outerDiv}>
            <img className={styles.banner} src={banner}/>
        
            <p>post your woes ~ help your bros</p>
        </div>
        <div className={styles.innerMainContainer}>
        

       {reversedPosts.map((post) => (
           <div className={styles.innerContainer}>
               <Link to={`/posts/${post.id}`}>
           <div className={styles.postDiv} key={post.id}>
           <img className={styles.avatar} src={post.avatar}/>
            
            <div className={styles.title}>{post.title}</div>
           <br/>
             <div className={styles.postBody}>
            {post.body?.slice(0, 25) + '...'}
            </div>
           </div>
           </Link>
           </div>
       ))}
       </div>
       <div className={styles.allPosts}>
       <Link to={'/allposts'}>Browse all posts...</Link>
       </div>
       </>
    )
}

export default Homepage;