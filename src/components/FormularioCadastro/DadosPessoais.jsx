import React, { useState, useContext } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


import useErros from '../../hooks/useErros'
import ValidacoesCadastro from '../../context/ValidacoesCadastro'

function DadosPessoais({ aoEnviar }) {
    
    const validacoes = useContext(ValidacoesCadastro)

    const [ nome, setNome ] = useState('')
    const [ sobrenome, setSobrenome ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ promocoes, setPromocoes ] = useState(false)
    const [ novidades, setNovidades ] = useState(false)
    const [ erros, validarCampos, possoEnviar ] = useErros(validacoes)

    function handleNomeChange(e) {
        setNome(e.target.value)
    }

    function handleSobrenomeChange(e) {
        setSobrenome(e.target.value)
    }

    function handleCpfChange(e) {
        setCpf(e.target.value)
    }

    function handlePromocoesToggle(e) {
        setPromocoes(e.target.checked)
    }

    function handleNovidadesToggle(e) {
        setNovidades(e.target.checked)
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        if(possoEnviar()) {
            aoEnviar({
                nome,
                sobrenome,
                cpf,
                promocoes,
                novidades
            })
        }
    }

    return(
        <form
            onSubmit={e => handleFormSubmit(e)}
        >
            <TextField
                onChange={e => handleNomeChange(e)}
                value={nome}
                id="nome" 
                label="Nome"
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />

            <TextField
                onChange={e => handleSobrenomeChange(e)}
                value={sobrenome}
                id="sobrenome" 
                label="sobrenome" 
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />

            <TextField
                onChange={e => handleCpfChange(e)}
                onBlur={e => validarCampos(e)}
                value={cpf}
                id="cpf" 
                name="cpf" 
                label="CPF (Apenas números)"
                type="text"
                margin="normal"
                variant="outlined"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                fullWidth
                required
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch 
                        name="promocoes"
                        color="primary"
                        checked={promocoes}
                        onChange={e => handlePromocoesToggle(e)}
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch 
                        name="novidades"
                        color="primary"
                        checked={novidades}
                        onChange={e => handleNovidadesToggle(e)}
                    />
                }
            />
            <br />
            <Button 
                type="submit"
                variant="contained" 
                color="primary"
            >
                Voltar
            </Button>

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

export default DadosPessoais