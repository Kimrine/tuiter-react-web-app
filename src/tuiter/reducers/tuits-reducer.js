import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "../data/tuits.json";

const currentUser = {
    "name": "kimrine",
    "handle": "kimrine",
    "profileImgSrc": "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg",
};

const templateTuit = {
    "author": currentUser,
    "topic": "Space",
    "time": "2h",
    "interactionsCount": {
        "replies": 532,
        "retuits": 231,
        "likes": 241
    }
}



const tuitsSlice = createSlice({
                                 name: "tuits",
                                 initialState: tuitsArray,
                                 reducers: {
                                        likeTuit(state, action) {
                                           const tuit = state.find((tuit)=> tuit._id === action.payload);
                                           if(tuit.liked===true){
                                               tuit.liked = false;
                                               tuit.interactionsCount.likes--;
                                           }else{
                                               tuit.liked = true;
                                               tuit.interactionsCount.likes++;
                                           }
                                       },
                                       deleteTuit(state,action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       createTuit(state,action) {
                                            state.unshift({
                                                ...action.payload,
                                                ...templateTuit,
                                                _id: (new Date()).getTime(),
                                                          })
                                       },
                                   }
                             });

export const {likeTuit,deleteTuit,createTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;