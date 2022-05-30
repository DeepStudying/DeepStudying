import { PostType } from "./Post";

export type PostContextType={
    disabled:boolean,
    isLiked: boolean,
    countLikes: number,
    setObject: () => void,
    handleFavorites: (id:number) => void
    handlePost: (event: { target: { value: string; }; }) => void,

}