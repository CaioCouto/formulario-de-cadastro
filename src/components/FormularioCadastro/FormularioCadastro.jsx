import React, { useState, useEffect } from 'react'
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'

import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'

function FormularioCadastro({ aoEnviar }) {

    const [ etapaAtual, setEtapaAtual ] = useState(0)
    const [ dadosColetados, setDadosColetados ] = useState({})
    
    const formularios = [
        <DadosUsuario aoEnviar={coletaDados}/>,
        <DadosPessoais aoEnviar={coletaDados}/>,
        <DadosEntrega aoEnviar={coletaDados}/>,
        <Typography variant="h5" align="center">Obrigado por se cadastrar!</Typography>
    ]

    useEffect(() => {
        const ultimoForm = formularios.length - 1
        if(etapaAtual === ultimoForm) { 
            aoEnviar(dadosColetados)
        }
    })

    function coletaDados(dados) {
        setDadosColetados({
            ...dadosColetados,
            ...dados
        })
        proximaEtapa()
    }

    function proximaEtapa() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}> 
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            { formularios[etapaAtual] } 
        </>
    )
}

export default FormularioCadastro