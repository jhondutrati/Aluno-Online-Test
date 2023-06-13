// Arquivo novorequerimento.spec.js

describe('Testes E2E para a funcionalidade Novo Requerimento', () => {
    beforeEach(() => {
      // Executar as ações necessárias antes de cada teste, como navegar para a página do Novo Requerimento
    });
  
    it('Deve preencher o formulário corretamente e enviar o requerimento', () => {
      // Preencher os campos do formulário com valores válidos
      cy.get('#campoNome').type('Nome do Aluno');
      cy.get('#campoEmail').type('email@example.com');
      cy.get('#campoAssunto').type('Assunto do requerimento');
      cy.get('#campoMensagem').type('Mensagem do requerimento');
  
      // Clicar no botão de envio
      cy.get('#botaoEnviar').click();
  
      // Verificar se o requerimento foi enviado com sucesso
      cy.get('#mensagemSucesso').should('be.visible');
    });
  
    it('Deve exibir mensagem de erro ao enviar o requerimento com campos obrigatórios em branco', () => {
      // Deixar os campos obrigatórios em branco
  
      // Clicar no botão de envio
      cy.get('#botaoEnviar').click();
  
      // Verificar se a mensagem de erro é exibida
      cy.get('#mensagemErro').should('be.visible');
    });
  });
  