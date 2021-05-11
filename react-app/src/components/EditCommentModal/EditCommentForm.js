
import React, { useState } from "react";
import { thunk_addComment } from "../../store/comment";
import { useDispatch } from "react-redux";
import { thunk_getSinglePost } from '../../store/posts';
import styles from './editcomment.module.css';


const EditCommentForm = ({ id, oldBody, setShowModal, postId }) => {
  const [body, setBody] = useState(`${oldBody}`);
  const dispatch = useDispatch();

  const submitComment = async (e) => {
    e.preventDefault();
    await fetch(`/api/posts/comments/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({body})
    })
    await setShowModal(false);
    dispatch(thunk_getSinglePost(postId));
    };

  return (
    <div className={styles.mainContainer}>
      <form className="comment-form" onSubmit={submitComment}>
        <label className={styles.label}>Edit Your Comment </label>
        <br/>
          <input className={styles.titlecontainer}
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br/>
          <button type="submit">Submit</button>


      </form>
    </div>
  );
};

export default EditCommentForm;