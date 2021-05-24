import React, { useState } from "react";
import { thunk_addComment } from "../../store/comment";
import { useDispatch } from "react-redux";
import styles from './commentform.module.css';



const CommentForm = ({ postId }) => {
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const submitComment = (e) => {
    e.preventDefault();
    const payload = {
      body,
      postId,
    };
    dispatch(thunk_addComment(payload));
    setBody('')
    };

  return (
    <>
      <form className="comment-form" onSubmit={submitComment}>
        <label>
          <input className={styles.input}
            placeholder='Add a comment'
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required={true}
          />
        </label>
          <button  type="submit">Comment</button>

      </form>
    </>
  );
};

export default CommentForm;