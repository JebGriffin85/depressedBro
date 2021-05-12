import React from 'react';
import { useDispatch } from 'react-redux';
import { thunk_getSinglePost } from '../../store/posts';
import styles from './deletecomment.module.css';

const DeleteComment = ({ postId, commentId, id }) => {
  const dispatch = useDispatch();

  const clickHandler = async (e) => {
    e.preventDefault();
    await fetch(`/api/posts/${postId}/comments/${commentId}`, {
      method: "DELETE"
    });
    dispatch(thunk_getSinglePost(id))
  };

  return (
    <>
      <a className={styles.delete} onClick={(event) => clickHandler(event)}> Delete </a>
    </>
  );
};

export default DeleteComment;