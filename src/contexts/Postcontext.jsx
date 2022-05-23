import React, { useState, createContext, useEffect } from "react";
import {posts} from "../../database/index"
export const PostContext = createContext()

export function DeepProvider(props){
    const [post, setPost] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [publicar, setPublicar] = useState(false)
    const [likes, setLikes] = useState(false)
    const [countLikes, setCountLikes] = useState(0)
    useEffect(() =>{
        setDisabled(true)
        setPost([])
    },[publicar])

    useEffect(() =>{
        setCountLikes(countLikes)
    },[likes])
    function handlePost(event){
        let textValue = event.target.value
        !textValue.length?setDisabled(true):setDisabled(false)
        setPost({ 
        userName:"João Vitor",
        profilePhoto: "/images/profileDeepTest.jpg",
        textPost: textValue,
        id: (0 + Math.random() * 45).toFixed(3)

        })
    }

    function setObject(){
        posts.push(post)  
        setPublicar(!publicar)
        console.log(posts)
     }

     function handleFavorites(){
        setLikes(!likes)
        likes==true?setCountLikes(countLikes===0?countLikes:countLikes-1):setCountLikes(countLikes+1)
     }

    return (
        <PostContext.Provider value={{post,disabled, likes, countLikes, handleFavorites, handlePost, setObject}}>
            {props.children}
        </PostContext.Provider>
    )
}