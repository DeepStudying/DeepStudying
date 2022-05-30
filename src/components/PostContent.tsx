import { PostType } from "../types/Post";

export default class Item{
    static lastId =  0 + Math.random() * 45;
    id: number;
    text: string;
    userName: string;
    profilePhoto: string;
    isLiked: boolean;
    favorites: number;
    
    constructor(text:string)  {
        this.id = Item.lastId++;
        this.text = text;
        this.userName= "João Vitor";
        this.profilePhoto = "http://github.com/joaovsz.png"
        this.isLiked = false;
        this.favorites = 0
    } 
}