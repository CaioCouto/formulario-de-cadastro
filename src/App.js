import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import './App.css'

function App() {
  return (
    <Container 
      component="article"
      maxWidth="sm"
    >
      <Typography 
        variant="h3"
        component="h1"
        align="center"
      >
        Formulário de Cadastro
      </Typography> 

      <FormularioCadastro />
    </Container>
  )
}

export default App
