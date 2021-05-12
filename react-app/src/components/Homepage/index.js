import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_getPosts } from '../../store/posts';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css';
import banner from './banner.png'
import Axios from 'axios';

function Homepage() {
    const [joke, setJoke] = useState();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);
    const reversedPosts = Object.values(posts).reverse();
    let user = useSelector((state) => state.session.user);

    useEffect(() =>  {
        dispatch(thunk_getPosts())
        // chuckNorris()
    }, [dispatch]);

    const chuckNorris = () => {
        return Axios.get('https://api.chucknorris.io/jokes/random?category=sport')
            .then(res => {
                console.log(res.data.value)
                 setJoke(res.data.value)
            })
    }

    return (
        <>
        {/* <p>joke: {joke}</p> */}
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
            {post.body?.slice(0, 25) + '...'}
           </div>
           </Link>
           </div>
       ))}
       </div>
       <a >see more post...</a>
       </>
    )
}

export default Homepage;