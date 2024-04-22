// script.js
// Função para validar o formulário
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Pegar todos os formulários para aplicar estilos de validação Bootstrap personalizados
      var forms = document.getElementsByClassName('needs-validation');
      // Loop sobre eles e previna a submissão
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
  // Adicionar interatividade ao formulário
  document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar os dados do formulário
    alert('Formulário enviado com sucesso!');
  });
  