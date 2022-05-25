import { PostType } from "./Post";

export type PostContextType={
    // postValue: PostType[],
    disabled:boolean,
    likes:boolean,
    countLikes: number,
    setObject: () => void,
    handleFavorites: () => void
    handlePost: (event: { target: { value: string; }; }) => void,
}