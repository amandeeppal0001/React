import {configureStore,combineReducers} from '@reduxjs/toolkit'
import authSlice from './authSlice';
import postSlice from './postSlice'




const store = configureStore({
    reducer:{
          auth : authSlice,
        //    post : postSlice,  //TODO
         //add more slice for posts, using redux , jab bhi koi component mount ho rha hai tab hi use store me hi add ker lenge taki baar baar web-request na kerni pade
        
        }
});

export default store;