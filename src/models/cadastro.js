function validaCpf(cpf) {
	if(cpf.length < 11) {
		return{ valido:false, texto: 'O CPF deve ter 11 dígitos' }
	}
	else {
		return { valido:true, texto: '' }
	}
}

function validaSenha(senha) {
	if(senha.length < 4 || senha.length > 52) {
		return{valido:false, texto: 'Senha deve ter entre 4 e 52 caracteres'}
	}
	else {
		return{valido:true, texto: ''}
	}
}

export { validaCpf, validaSenha }