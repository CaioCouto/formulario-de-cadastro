import React from 'react'
import { 
    Button, TextField, Switch, FormControlLabel,

} from '@material-ui/core'

function FormularioCadastro() {
    return(
        <form>
            <TextField
                id='nome' 
                label="nome"
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />

            <TextField
                id='sobrenome' 
                label="sobrenome" 
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />

            <TextField
                id='cpf' 
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