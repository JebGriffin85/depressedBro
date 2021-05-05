const GET_POSTS = 'post/GET_POSTS'
const ADD_POST = 'post/ADD_POST'

const getPosts = (posts) => ({
    type: GET_POSTS,
    payload: posts
});

const addPost = (post) => ({
    type: ADD_POST,
    payload: post
});

export const thunk_addPost = ({ title, body} ) => async (dispatch) => {
    const res = await fetch('api/posts', {
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

export const thunk_getPosts = () => async (dispatch) => {
    const res = await fetch('api/posts');
    const data = await res.json();
    if (data.errors){
        return;
    }
    dispatch(getPosts(data));
};


const postReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        
        case GET_POSTS:
        const posts = action.payload.posts;
        const allPosts = {};
        for (const post of posts) {
            allPosts[post.id] = post
        };
        return allPosts;

        case ADD_POST:
            console.log(action.payload)
            return { ...state, ...action.payload }
        default:
            return state;
    };
};

export default postReducer;