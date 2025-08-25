import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    status: false,
    userData: null
}


//ASSIGNMENT HELP    = make postSlice(state.allPost & .userPost) in a similar way like authSlice
const authSlice = createSlice({
        name: "auth",
        initialState,
        reducers:{
            login: (state,action)=>{
                state.status = true;
                state.userData = action.payload.userData;
            },
            logout: (state) => {
                state.status = false;
                state.userData = null;
            }
        }

})
export const { login, logout}  = authSlice.actions;

export default authSlice.reducer