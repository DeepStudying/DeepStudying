import React, { useState, createContext, useEffect, ReactNode } from "react";
import { posts } from "../../database/index"

type PostContextProps = {
    children: ReactNode
}
export type PostType = {
    userName: string;
    profilePhoto: string;
    textPost: string;
    key: number;
}
const initialValue = {
    publicar:false,
    postValue: [],
    disabled: true,
    likes: false,
    countLikes: 0,
    handleFavorites: () => { },
    setObject: () => { },
    handlePost: () => { },
}

type PostContextType={
    postValue: object,
    disabled:boolean,
    likes:boolean,
    countLikes: number,
    setObject: () => void,
    handleFavorites: () => void
    handlePost: (event: { target: { value: string; }; }) => void,
}

export const PostContext = createContext<PostContextType>(initialValue)


export function DeepProvider({ children }: PostContextProps) {
    const [postValue, setPostValue] = useState<PostType[]>([])
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
        let textValue = event.target.value
        !textValue.length ? setDisabled(true) : setDisabled(false)
        const post: PostType = {
            userName: "João Vitor",
            profilePhoto: "/images/profileDeepTest.jpg",
            textPost: textValue,
            key: (0 + Math.random() * 45),
        }
        setPostValue([post])
        
    }

    function setObject() {
        setPublicar(!publicar)
        posts.push(postValue)
        console.log(postValue)
    }

    function handleFavorites() {
        setLikes(!likes)
        likes == true ? setCountLikes(countLikes === 0 ? countLikes : countLikes - 1) : setCountLikes(countLikes + 1)
    }

    return (
        <PostContext.Provider value={{ postValue, disabled, likes, countLikes, handleFavorites, handlePost, setObject }}>
            {children}
        </PostContext.Provider>
    )
}