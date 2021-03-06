const ADD_COMMENT = "comment/ADD_COMMENT";

const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const thunk_addComment = ({ postId, body }) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId, body }),
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(addComment(data));
};

function commentReducer(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, ...action.payload };
    default:
      return state;
  };
};

export default commentReducer;