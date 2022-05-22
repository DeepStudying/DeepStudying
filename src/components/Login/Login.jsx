import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {theme} from "../../Theme"
import { ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";
import Bookheader from "../BookHeader/Bookheader";
import {Link} from "react-router-dom"
const Login = () => {
  

  return (
    <main>
      <div className="container">
        <Bookheader/>
          <form id="form-login">
            <h2>Conecte-se ao conhecimento!</h2>
            <ThemeProvider theme={theme}>
              <div>
                <TextField
                sx={{ borderColor: '#000000'}}
                  className="input"
                  color="primary"
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                ></TextField>

                <TextField
                  className="input"
                  color="primary"
                  id="outlined-password-input"
                  label="Senha"
                  type="password"
                  variant="outlined"
                  autoComplete="current-password"
                />

                <p id="forget-pswd">Esqueci minha senha</p>
              </div>

              <div className="Btn-group">
                <Link to="/home" id="entrar">
                <Button
                  style={{ borderRadius: 20 }}
                  className="button"
                  id="btn-login"
                  variant="contained"
                  endIcon={<LoginIcon />}
                >
                  Entrar
                </Button>
                </Link>
                <hr></hr>
                <p>Não possui uma conta?</p>
                <Link to="/signup" id="criar-conta">
                <Button
                  style={{ borderRadius: 10 }}
                  id="create"
                  variant="contained"
                  >
                  Inscrever-se em DeepStudying
                </Button>
                  </Link>
              </div>
            </ThemeProvider>
          </form>
        </div>
      
    </main>
  );
};

export default Login;
