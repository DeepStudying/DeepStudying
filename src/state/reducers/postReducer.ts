import { PostType } from "../../types/Post"

export type Action={
  type:string,
  payload:object
}

// type Action = isLiked | AddPost > Multiplos tipos com union

export default function postsReducer(state: PostType[] =[], action: Action) {
  switch (action.type) {
      case "ADD_POST":
          return [...state, action.payload]
          
      default: 
          return state
  }
}
