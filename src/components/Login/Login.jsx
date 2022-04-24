import React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme } from "@mui/material/styles";
import "./Login.css"

const Login = () => {

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#7C83FD",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#96BAFF",
      }
    },
  });
  return (
   
     <main>
       <div className="container">
         <div>
           DeepStudying 
         </div>
         <div>
           <h1>Conecte-se</h1>
           <form>
          <TextField 
          theme={theme}
          color="primary"
          id="outlined-basic" 
          label="E-mail" 
          variant="standard">
          </TextField>
          <TextField
          theme={theme}
          color="secondary"
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="standard"
          autoComplete="current-password"
        />
            <Stack spacing={1} direction="column">
              <Button 
              className="Button" 
              theme={theme}
              variant="contained">Conectar</Button>
              <Button 
             id="button" 
              variant="contained"
              theme={theme}>Criar Conta</Button>
            </Stack>
           </form>
         </div>
       </div>
     </main> 
  )
}

export default Login