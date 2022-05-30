import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import "./Timeline.css";
import Post from '../components/Posts/Post'
import { PostType } from "../types/Post";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux"
import { listAction } from "../state/index"
import { State } from "../state/reducers/index"
import { Action } from "../state/reducers/postReducer";

const initialValue = {
  text: '',
  publicar: false,
  postValue: [],
  disabled: true,
  isLiked: false,
  countLikes: 0,
  handleFavorites: () => { },
  setObject: () => { },
  handlePost: () => { },
}



const Timeline = () => {
  const [postValue, setPostValue] = useState<PostType[]>(initialValue.postValue)
  const [isLiked, setIsLiked] = useState(initialValue.isLiked)
  const [countLikes, setCountLikes] = useState(initialValue.countLikes)
  const [text, setText] = useState(initialValue.text)
  const [disabled, setDisabled] = useState(initialValue.disabled)
  const [publicar, setPublicar] = useState(initialValue.publicar)

  const dispatch = useDispatch()
  const { addPost } = bindActionCreators(listAction, dispatch)
  const state = useSelector((state: State)=> state.post)
  
  useEffect(() => {
    setDisabled(true)
    setPostValue([])
  }, [publicar])

  function setObject() {
    if (text) {
      dispatch(addPost(text))
    }
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
          {items.map((post) => {
            return (
              <Post
                profilePhoto={post.profilePhoto}
                userName={post.userName}
                textPost={post.textPost}
                id={post.id}
                key={post.id}
              />)
          })}

        </div>
      </section>

    </main>
  );
};

export default Timeline;



