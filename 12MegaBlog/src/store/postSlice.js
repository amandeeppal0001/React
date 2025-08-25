import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsData: [], // This will hold the list of posts
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.postsData = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postSlice.actions;

export default postSlice.reducer;

























































// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     posts: []
// }

// const postSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers:{
//          setPosts: (state,action) =>{
//          state.posts = action.payload;
//         },
//     clearPosts: (state) => {
//         state.posts = [];
//     }
//     }
   
// }

// )

// export const {setPosts,clearPosts} = postsSlice.actions;

// export default postSlice.reducer





