import React, { useState, createContext, useEffect } from "react";
import {posts} from "../../database/index"
export const PostContext = createContext()

export function DeepProvider(props){
    const [post, setPost] = useState([])

    function handlePost(event){
        let textValue = event.target.value
        setPost({textPost: textValue})
    }

    function setObject(){
        posts.push(post)
        console.log(posts)
    }

    return (
        <PostContext.Provider value={{post, handlePost, setObject}}>
            {props.children}
        </PostContext.Provider>
    )
}