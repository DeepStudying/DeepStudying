import { ThemeProvider } from '@emotion/react'
import {theme} from "../../Theme"
import "./Create-Account.css"
import { Button, TextField } from '@mui/material'
import Bookheader from '../BookHeader/Bookheader'
import { Link } from 'react-router-dom'

export default function CreateAccount(){
  return (
    <div className="container">
      <Bookheader/>
        <form>
        <img src="./images/deestudyLogo1.svg"></img>
            <h2>Crie a sua conta!</h2>
            <ThemeProvider theme={theme}>
              <div>
                <TextField
                  className="input"
                  color="primary"
                  id="outlined-basic"
                  label="Nome de usuário"
                  variant="outlined"
                />
                <TextField
                  className="input"
                  color="primary"
                  id="outlined-basic"
                  label="Digite um e-mail"
                  variant="outlined"
                />

                <TextField
                  className="input"
                  color="primary"
                  id="outlined-password-input"
                  label="Crie uma senha"
                  type="password"
                  variant="outlined"
                  autoComplete="current-password"
                />
                <TextField
                  className="input"
                  color="primary"
                  id="outlined-password-input"
                  label="Digite a senha novamente"
                  type="password"
                  variant="outlined"
                  autoComplete="current-password"
                />

                
              </div>

              <div className="btn-group">
                <Link to="/" id="create-account"> 
                <Button className="button"variant="text" id="text-login">
                  Já possui uma conta?
                </Button>
                </Link>
                <Link to="/home" id="entrar">
                <Button
                  style={{ borderRadius: 20 }}
                  className="button"
                  id="create-acc"
                  variant="contained"
                //   endIcon={<LoginIcon />}
                >
                  Criar Conta
                </Button>
                </Link>
                {/* <hr></hr> */}
              </div>
            </ThemeProvider>
          </form>
    </div>
  )
}
