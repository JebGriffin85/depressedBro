import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { thunk_addPost } from '../../store/posts';
import styles from './createpost.module.css';

const PostForm = ({ setShowModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitPost = async (e) => {
     e.preventDefault();
     const payload = { title, body }
     await dispatch(thunk_addPost(payload))
     setShowModal(false);
     history.push('/')
  }

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.mainContainer}>
    <form onSubmit={submitPost}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className={styles.titlecontainer}>
        <label htmlFor="title">Title</label>
        <br/>
        <input
          name="email"
          type="text"
          placeholder=''
          value={title}
          onChange={updateTitle}
        />
      </div>
      <div >
        <label htmlFor="body">Write Your Worries Bro!</label>
        <br/>
          <textarea className={styles.textarea}
          name="body"
          type="textarea"
          placeholder="let it out bro"
          value={body}
          onChange={updateBody}
        />
        <br/>
        <button type="submit">Post it Bro!</button>
      </div>
    </form>
    </div>
  );
};

export default PostForm;