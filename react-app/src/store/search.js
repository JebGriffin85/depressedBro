const GET_POSTS_SEARCH = 'search/GET_POSTS_SEARCH';

const getPostsSearch = (posts) => {
    return ({
        type: GET_POSTS_SEARCH,
        payload: posts
    });
};


export const thunk_getPostsSearch = (query) => async (dispatch) => {
    const res = await fetch(`/api/search/${query}`)
    const data = await res.json();
    dispatch(getPostsSearch(data));
}

const searchReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_POSTS_SEARCH:
        const posts = action.payload.posts;
        const allPosts = {};
        for (const post of posts) {
            allPosts[post.id] = post;
        };
        return allPosts;

        default:
            return { ...state };
    };
};


export default searchReducer;