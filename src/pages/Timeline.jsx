import { Button } from "@mui/material";
import React, { useContext } from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import "./Timeline.css";
import Post from '../components/Posts/Post'
import { PostContext } from "../contexts/Postcontext";
import {posts} from "../../database/index"
const Timeline = () => {

     const {handlePost, setObject} = useContext(PostContext)



  return (
    <main className="feed">
      <section className="main-container">
        <div id="header-container">
          <div className="profile-photo">
            <img className="photo" src="/images/profileDeepTest.jpg" />
          </div>
          <form id="input-post-area">
            <textarea placeholder="Criar post" className="input-post" 
            onChange={handlePost}
            />
          </form>

          <ThemeProvider theme={theme}>
            <Button
              style={{ borderRadius: 15 }}
              variant="contained"
              className="button"
              id="publicar"
              onClick={()=>setObject()}
            >
              Publicar
            </Button>
          </ThemeProvider>
        </div> 
        <div id="feed-container" className="post">
        {posts.map((post, index) =>{
         return(
         <Post
          profilePhoto={post.profilePhoto}
          userName={post.userName}
          postText={post.textPost}
          key={index}
          />) 
        })}
        
      </div>
      </section>
     
    </main>
  );
};

export default Timeline;
