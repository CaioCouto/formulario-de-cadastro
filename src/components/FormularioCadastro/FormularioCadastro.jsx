import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function FormularioCadastro() {

    const [ nome, setNome ] = useState('')
    const [ sobrenome, setSobrenome ] = useState('')
    const [ cpf, setCpf ] = useState('')

    function handleNomeChange(e) {
        let tmpNome = e.target.value
        if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substring(0, 3)
        }
        setNome(tmpNome)
        console.log(nome)
    }

    function handleSobrenomeChange(e) {
        setSobrenome(e.target.value)
    }

    function handleCpfChange(e) {
        setCpf(e.target.value)
    }

    return(
        <form>
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
                id="cpf" 
                label="cpf"
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />

            <FormControlLabel
                control={
                    <Switch 
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch 
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />

            <Button 
                type="submit"
                variant="contained" 
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro