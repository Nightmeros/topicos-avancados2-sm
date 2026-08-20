function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() === '') {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if(titulo.length<=5){
        "o titulo deve ter no minimo 5 caracteres"
    }

    if(titulo.length>100){
        "o titulo deve ter no maximo 100 caracteres"
    }

    return true;
}

export default validarChamado;