
import React, { useState } from "react";
import { thunk_addComment } from "../../store/comment";
import { useDispatch } from "react-redux";




const EditCommentForm = ({ id, oldBody, postId }) => {
  const [body, setBody] = useState(`${oldBody}`);
  const dispatch = useDispatch();

  const submitComment = (event) => {
    event.preventDefault();
    
    setBody('')
    };
    
  return (
    <>
      <form className="comment-form" onSubmit={submitComment}>
        <label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Submit</button>
        </label>

      </form>
    </>
  );
};

export default EditCommentForm;