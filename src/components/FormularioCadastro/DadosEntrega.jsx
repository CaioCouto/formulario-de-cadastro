import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({aoEnviar}) {

    const [ cep, setCep ] = useState('')
    const [ endereco, setEndereco ] = useState('')
    const [ numero, setNumero ] = useState('')
    const [ estado, setEstado ] = useState('')
    const [ cidade, setCidade ] = useState('')

    function handleCepChange(e) {
        setCep(e.target.value)
    }

    function handleEnderecoChange(e) {
        setEndereco(e.target.value)
    }

    function handleNumeroChange(e) {
        setNumero(e.target.value)
    }

    function handleEstadoChange(e) {
        setEstado(e.target.value)
    }

    function handleCidadeChange(e) {
        setCidade(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        aoEnviar({
            cep,
            endereco,
            numero,
            estado,
            cidade
        })
    }

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <TextField
                type="number"
                id="cep"
                name="cep"
                label="CEP"
                margin="normal"
                variant="outlined"
                value={cep}
                onChange={e => handleCepChange(e)}
                required
            />

            <TextField
                type="text"
                id="endereco"
                name="endereco"
                label="Endereço"
                margin="normal"
                variant="outlined"
                value={endereco}
                onChange={e => handleEnderecoChange(e)}
                required
                fullWidth
            />

            <TextField
                type="number"
                id="numero"
                name="numero"
                label="Numero"
                margin="normal"
                variant="outlined"
                value={numero}
                onChange={e => handleNumeroChange(e)}
                required
            />

            <TextField
                type="text"
                id="estado"
                name="estado"
                label="Estado"
                margin="normal"
                variant="outlined"
                value={estado}
                onChange={e => handleEstadoChange(e)}
                required
            />

            <TextField
                type="text"
                id="cidade"
                name="cidade"
                label="Cidade"
                margin="normal"
                variant="outlined"
                value={cidade}
                onChange={e => handleCidadeChange(e)}
                required
            />

            <Button 
                type="submit"
                variant="contained" 
                color="primary"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega