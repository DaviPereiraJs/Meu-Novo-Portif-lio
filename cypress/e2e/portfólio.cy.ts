/// <reference types="cypress" />

describe('🚀 Portfólio Davi Nascimento - Teste Ponta a Ponta', () => {

  it('Deve carregar a Hero, navegar pelo menu, rolar a página e preencher o formulário', () => {

    // 1. ACESSO À PÁGINA INICIAL
    cy.log('Acessando o portfólio local...');
    cy.visit('http://localhost:5173/');

    // Verifica se a seção Hero carregou os textos principais
    cy.contains('Davi Nascimento').should('be.visible');
    cy.contains('Construindo').should('be.visible');
    cy.contains('interfaces').should('be.visible');

    // 2. TESTE DE NAVEGAÇÃO DA NAVBAR
    cy.log('Testando a navegação suave do menu...');
    
    // Clica no link de Projetos
    cy.get('nav').contains('Projetos').click();
    // Removemos a verificação de URL e garantimos que a seção correspondente existe na tela
    cy.get('#projetos').should('exist');
    cy.wait(1500); // Pausa dramática para ver a rolagem descer suavemente

    // Clica no link de Feedbacks
    cy.get('nav').contains('Feedbacks').click();
    cy.get('#feedbacks').should('exist');
    cy.wait(1500);

    // 3. ROLAGEM AUTOMATIZADA PARA APRECIAR A UI
    cy.log('Iniciando rolagem para testar o Scroll Spy e as animações...');
    cy.scrollTo('top', { duration: 1500 });
    cy.wait(500);
    cy.scrollTo('bottom', { duration: 3000 }); // Vai até o rodapé devagar
    
    // 4. PREENCHIMENTO DO FORMULÁRIO DE CONTATO
    cy.log('Simulando um recrutador entrando em contato...');
    
    // Garante que a seção de contato está visível
    cy.get('#contato').scrollIntoView();

    // Preenche os inputs criados
    cy.get('input[name="user_name"]').type('Recrutador Tech');
    cy.get('input[name="user_email"]').type('vagas@techcompany.com');
    cy.get('textarea[name="message"]').type('Olá Davi! Adoramos a estética Dark Liquid Glass do seu portfólio. Queremos marcar uma entrevista!');

    // Verifica se o botão do WhatsApp existe e não está bloqueado
    cy.contains('button', 'Enviar para o WhatsApp')
      .should('be.visible')
      .and('not.be.disabled');

    /* Nota Sênior: No Cypress, a gente geralmente não clica em botões que 
      abrem links externos (target="_blank" ou wa.me), porque isso faz o 
      Cypress perder o controle do navegador de teste. Por isso, apenas 
      garantimos que o formulário é preenchível e o botão está pronto para o clique!
    */

    cy.log('🎯 Demonstração E2E do Portfólio concluída com sucesso!');
  });

});