import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';

import useErros from '../../hooks/useErros'
import ValidacoesCadastro from '../../context/ValidacoesCadastro'

function DadosUsuario({ aoEnviar }) {

    const validacoes = useContext(ValidacoesCadastro)
    
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ erros, validarCampos, possoEnviar ] = useErros(validacoes)
    
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSenhaChange(e) {
        setSenha(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        if(possoEnviar()) {
            aoEnviar({
                email,
                senha
            })
        }
    }

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={e => handleEmailChange(e)}
                fullWidth
                required
            />

            <TextField
                type="password"
                id="senha"
                name="senha"
                label="Senha"
                margin="normal"
                variant="outlined"
                value={senha}
                onChange={e => handleSenhaChange(e)}
                onBlur={e => validarCampos(e)}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                fullWidth
                required
            />

            <Button 
                type="submit"
                variant="contained" 
                color="primary"
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario