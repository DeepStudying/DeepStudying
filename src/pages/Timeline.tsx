import { Button } from "@mui/material";
import React, { useContext } from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import "./Timeline.css";
import Post from '../components/Posts/Post'
import { PostContext } from "../contexts/Postcontext";
import { posts } from "../../database/index"
import { PostType } from "../types/Post";
const Timeline = () => {

const { disabled, handlePost, setObject } = useContext(PostContext)



  return (
    <main className="feed">
      <section className="main-container">
        <div className="logoHome">
          <img src="./images/deestudyLogo1.svg" id="logo" />
          <h3>Home</h3>
        </div>
        <div id="header-container">
          <div className="profile-photo">
            <img className="photo" src="/images/profileDeepTest.jpg" />
          </div>
          <form id="input-post-area">
            <textarea placeholder="Criar post" className="input-post"
              onChange={handlePost}
            />
            <ThemeProvider theme={theme}>
              <Button
                style={{ borderRadius: 15 }}
                variant="contained"
                className="button"
                id="publicar"
                disabled={disabled}
                onClick={() => setObject()}
              >
                Publicar
              </Button>
            </ThemeProvider>
          </form>

        </div>

        <div id="feed-container" className="post">
          {posts.map((post) => {
            return (
              <Post
                profilePhoto={post.profilePhoto}
                userName={post.userName}
                textPost={post.textPost}
                id={post.id} 
                key={post.id}              />)
          })}

        </div>
      </section>

    </main>
  );
};

export default Timeline;
