const GET_POSTS = 'post/GET_POSTS';
const GET_SINGLE_POST = 'post/GET_SINGLE_POST';
const ADD_POST = 'post/ADD_POST';
const GET_USER_POST = 'post/GET_USER_POST';
const DELETE_POST = 'post/DELETE_POST';
// const GET_ALL_POSTS = 'post/GET_ALL_POSTS';

// const getAllPosts = (posts) => ({
//     type: GET_ALL_POSTS,
//     payload: posts
// });

const deletePost = (post) => {
    return ({
        type: DELETE_POST,
        payload: post
    });
};

const getPosts = (posts) => ({
    type: GET_POSTS,
    payload: posts
});

const getSinglePost = (post) => ({
    type: GET_SINGLE_POST,
    payload: post
});

const addPost = (post) => ({
    type: ADD_POST,
    payload: post
});

const getUserPost = (posts) => ({
    type: GET_USER_POST,
    payload: posts
});

export const thunk_deletePost = (id) => async (dispatch) => {
  await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });
  dispatch(deletePost(id));
};

export const thunk_getUserPosts = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/user/${id}`);
    const data = await res.json();
    if (data.errors) return;
    dispatch(getUserPost(data));
};

export const thunk_getAllPosts = () => async (dispatch) => {
    const res = await fetch('/api/posts/all');
    const data = await res.json();
    if (data.errors) return;
    dispatch(getPosts(data));
};

export const thunk_getPosts = () => async (dispatch) => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    if (data.errors) return;
    dispatch(getPosts(data));
};

export const thunk_getSinglePost = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();
    if (data.errors) return;
    dispatch(getSinglePost(data));
};

export const thunk_addPost = ({ title, body} ) => async (dispatch) => {
    const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    });

    const data = await res.json();
    if (data.errors) return;
    dispatch(addPost(data));
};

const postReducer = (state = {}, action) => {
    switch(action.type) {
        
        case GET_POSTS:
        const posts = action.payload.posts;
        const allPosts = {}
        for (const post of posts) {
            allPosts[post.id] = post;
        };
        return allPosts;

        case GET_USER_POST:
        const newPosts = action.payload.posts;
        const userPosts = {}
        for (const post of newPosts) {
            userPosts[post.id] = post;
        };
        return userPosts;

        case DELETE_POST:
            delete state[action.payload]
            return state;

        case GET_SINGLE_POST:
            return action.payload;

        case ADD_POST:
            return { ...state, ...action.payload };
        default:
            return { ...state };
    };
};

export default postReducer;