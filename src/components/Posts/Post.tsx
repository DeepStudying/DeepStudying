import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React, {useContext} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {theme} from '../../Theme'
import { ThemeProvider } from "@emotion/react";
import "./Post.css"
import { PostContext } from '../../contexts/Postcontext';
import {PostType} from '../../contexts/Postcontext'


const Post =({profilePhoto, userName, textPost}: PostType) => {
  const {handleFavorites, likes, countLikes} = useContext(PostContext)

  return (
    <ThemeProvider theme={theme}>
    
    <div id="post-container">
      <img src={profilePhoto} className="photo"/>
      <div className="profile-container">
        <div id="name-and-action">
      <h4>{userName}</h4>
      <IconButton id="more-actions">
        <MoreVertIcon id="more-actions" />
      </IconButton>
      </div>
      <p className="text-post">{textPost}</p>
      <div className="action-group">
      <IconButton onClick={()=>{handleFavorites()}} id="favorite" color="primary" aria-label="add to favorites">
    {likes==false?(<FavoriteBorderIcon fontSize="small"/> ):(<FavoriteIcon  fontSize="small"/>) }
          <p id="count-likes">{countLikes}</p>
        </IconButton>
        <IconButton id="share" aria-label="share">
          <ShareIcon fontSize="small"/>
        </IconButton>
        </div>
      </div>
    </div>
    </ThemeProvider>
   
  )
}

export default Post