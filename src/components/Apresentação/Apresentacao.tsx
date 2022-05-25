import { Button } from '@mui/material'
import React from 'react'
import './Apresentacao.css'

const Apresentacao = () => {
  return (
    <main id="apresentation">
      <div id="container-ap">
        <h2>Olá João Vitor!</h2>
        <p>Seja bem vindo ao DeepStudying, <br/>entregamos ao nosso usuário artigos e aplicações para seu estudo e desenvolvimento, apoiado com salas de estudos, filtragem por tema e afins.</p>
        <Button variant="outlined" id="prosseguir">
          Prosseguir
        </Button>
      </div>
    </main>
  )
}

export default Apresentacao