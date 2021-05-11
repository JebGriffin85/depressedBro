
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunk_getSinglePost } from '../../store/posts';
import styles from './editpost.module.css';


const EditPostForm = ({ oldTitle, oldBody, setShowModal, postId }) => {
  const [body, setBody] = useState(`${oldBody}`);
  const [title, setTitle] = useState(`${oldTitle}`);
  const dispatch = useDispatch();

  const editPost = async (e) => {
    e.preventDefault();
    await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, body})
    })
    await setShowModal(false);
    dispatch(thunk_getSinglePost(postId));
    };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className={styles.mainContainer} >
    <form onSubmit={editPost}>
     
      <div className={styles.titlecontainer}>
        <label htmlFor="title">Title</label>
        <br/>
        <input
          name="email"
          type="text"
          value={title}
          onChange={updateTitle}
        />
      </div>
      <div>
        <label htmlFor="body">Fix Your Worries Bro!</label>
        <br/>
        <textarea className={styles.textarea}
          name="body"
          type="textarea"
          value={body}
          onChange={updateBody}
        />
        <br/>
        <button type="submit">Edit it Bro!</button>
      </div>
    </form>
    </div>
  );
};

export default EditPostForm;