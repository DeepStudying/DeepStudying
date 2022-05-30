import Item from "../../components/PostContent"
import {Dispatch} from "redux"
import { Action } from "../reducers/postReducer"

export function addPost(text: string){
    const item = new Item(text)
    return (dispatch: Dispatch<Action>)=>{ //Action foi passado para receber apenas informações do tipo action definido
        dispatch({
            type: "ADD_POST", 
            payload: item})
    }
}

