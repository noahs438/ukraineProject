import * as api from '../api';  // Import everything from actions as api

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();  // Getting the data (posts) from the api

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
       const { data } = await api.updatePost(id, post);

       dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}