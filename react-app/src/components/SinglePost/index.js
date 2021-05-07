import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { thunk_getPosts } from '../../store/posts';
import { useParams, useHistory } from 'react-router-dom';
import { thunk_getSinglePost, thunk_deletePost } from '../../store/posts';
import CommentForm from '../CommentForm/index';
import DeleteComment from '../DeleteComment/index';
import EditCommentModal from '../EditCommentModal/index'


function SinglePost() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector((state) => state.postReducer);
    const comments = useSelector((state) => state.commentReducer);
    const commentVals = Object.values(comments);
    let user = useSelector((state) => state.session.user);

    if (!user) user = 0;

    const handleDelete = (id) => {
        dispatch(thunk_deletePost(id))
    }
    
    const goBack = () => {
        history.goBack()
    };

    useEffect(() => {
        dispatch(thunk_getSinglePost(id))
    }, [dispatch, commentVals.length]);


    return(
        <>
        <button onClick={goBack}>Go Back</button>
        <div>
            <h3><img className="avatar" src={post?.avatar}/>{post?.title}</h3>
            <p>{post?.body}</p>
            {post?.comments?.map((comment) => (
                <div key={comment?.id}>
                <p ><img className="avatar" src={comment?.avatar} />
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
        {user ? post.userId === user.id ? (
                <button onClick={handleDelete(post?.id)}>Nuke this post!</button>
        ): null : null}
        {/* {post?.userId === user.id ? (
            <button onClick={handleDelete(post?.id)}>Nuke this post!</button>
        ) : null} */}

        </>
    )
}

export default SinglePost;