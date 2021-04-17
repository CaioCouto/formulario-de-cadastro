import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { validaCpf, validaSenha } from './models/cadastro'

import ValidacoesCadastro from './context/ValidacoesCadastro'

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

			<ValidacoesCadastro.Provider 
				value={{ cpf:validaCpf, senha:validaSenha }}
			>
				<FormularioCadastro aoEnviar={aoEnviar}/>
			</ValidacoesCadastro.Provider>
		</Container>
	)
}

function aoEnviar(dados) {
  	console.log(dados)
}

export default App
