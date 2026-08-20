function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() === '') {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (titulo.length < 5 || titulo.length > 100) {
        throw new Error("O título deve ter entre 5 e 100 caracteres");

    }
    return true;
}

export default validarChamado;