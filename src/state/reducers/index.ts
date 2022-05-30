import { combineReducers } from "redux";
import postsReducer from "./postReducer";

 const reducers = combineReducers({
    post: postsReducer
})

export default reducers
export type State = ReturnType<typeof reducers>