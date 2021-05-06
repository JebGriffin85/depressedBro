import React from 'react';
import { useDispatch } from 'react-redux';
import { thunk_getSinglePost } from '../../store/posts';

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
      <button onClick={(event) => clickHandler(event)}> Delete </button>
    </>
  );
};

export default DeleteComment;