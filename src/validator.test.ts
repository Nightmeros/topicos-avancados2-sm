// src/validator.test.ts
// O compilador de TypeScript resolverá o módulo JavaScript de forma transparente
import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {
    
    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    test('Deve lançar erro se o título do chamado for vazio', () => {
        expect(() => {
            validarChamado("");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
        expect(() => {
            validarChamado("   ");
        }).toThrow("O título do chamado não pode ser vazio.");
    });
    test('Deve lançar erro se o título for maior que 100 caracteres', () => {
        expect(() => {
            validarChamado("O título do chamado não pode ser vazio.O título do chamado não pode ser vazio.O título do chamado não pode ser vazio.O título do chamado não pode ser vazio.");
        }).toThrow("O título não pode ter mais de 100 ");
    });
    test('Deve lançar erro se o titulo for menor que 5 caracteres', () => {
        expect(() => {
            validarChamado("ola");
        }).toThrow("O título não pode ter menos de 5 caracteres ");
    });
});
