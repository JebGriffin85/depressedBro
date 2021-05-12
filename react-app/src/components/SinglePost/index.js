import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { thunk_getSinglePost, thunk_deletePost } from '../../store/posts';
import CommentForm from '../CommentForm/index';
import DeleteComment from '../DeleteComment/index';
import EditCommentModal from '../EditCommentModal/index';
import EditPostModal from '../EditPostModal/index';
import styles from './singlepost.module.css';


function SinglePost() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector((state) => state.postReducer);
    const comments = useSelector((state) => state.commentReducer);
    const commentVals = Object.values(comments);
    let user = useSelector((state) => state.session.user);

    if (!user) user = 0;

    const handleDelete = async (id) => {
        await dispatch(thunk_deletePost(id));
        history.goBack();
    };
    
    const goBack = () => {
        history.goBack();
    };

    useEffect(() => {
        dispatch(thunk_getSinglePost(id))
    }, [dispatch, commentVals.length]);


    return(
        <>
        <div className={styles.pagenav}>
        <a className={styles.goback} onClick={goBack}>Go Back</a>
         {user ? post.userId === user.id ? (
               <>
                <EditPostModal oldTitle={post.title} oldBody={post.body} postId={post.id}/>
                <a className={styles.deletepost} onClick={() => handleDelete(post?.id)}>Nuke this post!</a>
                </>
        ): null : null}


        </div>
        <div>
            <div className={styles.titleContainer}>
                <img className={styles.mainavatar} src={post?.avatar}/>
                <h3 className={styles.title}>{post?.title}</h3>
                <p className={styles.firstlastname}>by {post.firstname} {post.lastname}</p>
                <p className={styles.date}>{post.createdAt?.slice(4, 16)}</p>
            </div>
                <p className={styles.postbody}>{post?.body}</p>
            {post?.comments?.map((comment) => (
                <div key={comment?.id}>
                <p ><img className={styles.avatar} src={comment?.avatar} />
                {comment?.body} {comment?.userId === user.id ? (
                    <>
                    <EditCommentModal id={comment.id} oldBody={comment.body} postId={post.id}/>
                    <DeleteComment id={id} postId={post.id} commentId={comment.id} />
                    </>
                ) : null}</p>
                </div>
            ))}
        </div>
         {user ? <CommentForm postId={post.id} /> : null}
          

        </>
    )
}

export default SinglePost;