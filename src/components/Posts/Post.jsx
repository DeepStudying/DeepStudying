import React from 'react'
import "./Post.css"
const Post = ({profilePhoto, userName, key, postText}) => {
  return (
    
    
    <div id="post-container">
      <img src={profilePhoto} className="photo"/>
      <div className="profile-container">
      <p>{userName}</p>
      <p className="text-post">{postText}</p>
      </div>
    </div>
   
  )
}

export default Post