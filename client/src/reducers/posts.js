import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (posts = [], action) => {  // Posts are an array so specify empty array
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)  // Keep filter all of the posts except for the one with the id action.payload
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:  // Fetching all of the posts
            return action.payload;  // Actual posts coming from actions\posts.js
        case CREATE:  // Creating the posts
            return [...posts, action.payload];
        default:
            return posts;
    }
}