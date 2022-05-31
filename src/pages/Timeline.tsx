import { Button } from "@mui/material";
import { useState, useEffect, Key } from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import "./Timeline.css";
import Post from '../components/Posts/Post'
import {addPost} from "../redux/postSlice"
import { useDispatch, useSelector } from "react-redux";
import { PostType } from "../types/Post";

const initialValue = {
  text: '',
  publicar: false,
  isLiked: false,
  disabled: true,
  setObject: () => { },
  handlePost: () => { },
}


const Timeline = () => {
  const [text, setText] = useState(initialValue.text)
  const [disabled, setDisabled] = useState(initialValue.disabled)
  const [publicar, setPublicar] = useState(initialValue.publicar)

  const dispatch = useDispatch()
  const posts = useSelector((state:any)=> state.posts)
  // useSelector()
  useEffect(() => {
    setDisabled(true)
   
  }, [publicar])


  function setObject() {
    dispatch(addPost({
      userName: "_alastra",
      textPost: text,
      profilePhoto: "http://github.com/joaovsz.png",
      id: 2,
      isLiked: false,
      likes:0
    }))
    setPublicar(!publicar)
    setText('')
  }



  function handlePost(event: { target: { value: string; }; }) {
    let textInput = event.target.value
    !textInput.length ? setDisabled(true) : setDisabled(false)
    setText(textInput)
  }




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
              onChange={handlePost} value={text}
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
          {posts.map((post: PostType) => {
            return (
              <Post
              userName={post.userName}
              textPost={post.textPost}
              profilePhoto={post.profilePhoto}
              id={post.id}
              isLiked={post.isLiked}
              key={post.id}
              likes={post.likes}
              />)
          })}

        </div> 
      </section>

    </main>
  );
};

export default Timeline;



