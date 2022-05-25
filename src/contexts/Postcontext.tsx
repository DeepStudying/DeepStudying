import React, { useState, createContext, useEffect, ReactNode } from "react";
import { posts } from "../../database";
import { PostContextType } from "../types/Context";
import { PostType } from "../types/Post";

type PostContextProps = {
    children: ReactNode
}
const initialValue = {
    text: '',
    publicar:false,
    // postValue: [],
    disabled: true,
    likes: false,
    countLikes: 0,
    handleFavorites: () => { },
    setObject: () => { },
    handlePost: () => { },
}

export const PostContext = createContext<PostContextType>(initialValue)


export function DeepProvider({ children }: PostContextProps) {
    const [postValue, setPostValue] = useState(posts)
    const [text, setText] = useState(initialValue.text)
    const [disabled, setDisabled] = useState(initialValue.disabled)
    const [publicar, setPublicar] = useState(initialValue.publicar)
    const [likes, setLikes] = useState(initialValue.likes)
    const [countLikes, setCountLikes] = useState(initialValue.countLikes)

    useEffect(() => {
        setDisabled(true)
        setPostValue([])
    }, [publicar])

    useEffect(() => {
        setCountLikes(countLikes)
    }, [likes])

    function handlePost(event: { target: { value: string; }; }) {
        let textInput = event.target.value
        !textInput.length ? setDisabled(true) : setDisabled(false)
        setText(textInput)
    }

    function setObject() {
        setPublicar(!publicar)
        posts.push({userName: "Joao Vitor gostoso", profilePhoto: "", textPost: text, id: 0})
        console.log(text)
    }

    function handleFavorites() {
        setLikes(!likes)
        likes == true ? setCountLikes(countLikes === 0 ? countLikes : countLikes - 1) : setCountLikes(countLikes + 1)
    }

    return (
        <PostContext.Provider value={{ disabled, likes, countLikes, handleFavorites, handlePost, setObject }}>
            {children}
        </PostContext.Provider>
    )
}