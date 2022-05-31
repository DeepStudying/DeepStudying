import {createSlice} from "@reduxjs/toolkit"
import { PostType } from "../types/Post";

const stock = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    addPost: (
      state: PostType[] = [],
      action: { type: string; payload: PostType }
    ) => {
      const newPost: PostType = {
        userName: "_alastra",
        textPost: action.payload.textPost,
        profilePhoto: "http://github.com/joaovsz.png",
        id: Date.now(),
        isLiked: action.payload.isLiked,
        likes: 0
      };
      state.push(newPost);
    },
    addLike: (state: PostType[] = [], action: { type: any; payload:number}) => 
    {
        const stateFiltered = state.findIndex((post:PostType) => post.id === action.payload)
       
        state[stateFiltered].isLiked = !state[stateFiltered].isLiked
        if (state[stateFiltered].isLiked===true) {
         state[stateFiltered].likes = state[stateFiltered].likes + 1
        }else{
          state[stateFiltered].likes = state[stateFiltered].likes - 1

        }
        
      }
    }
  },
);

export const {addPost, addLike} = stock.actions
export default stock.reducer