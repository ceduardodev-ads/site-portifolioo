




document.addEventListener('DOMContentLoaded', function() {
  // Animar porcentagem das habilidades
  const skills = document.querySelectorAll('.skill');
  
  skills.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      const levelElement = this.querySelector('.percentual');
      const maxLevel = parseInt(this.getAttribute('data-level'));
      let currentLevel = 0;
      
      const interval = setInterval(() => {
        if (currentLevel < maxLevel) {
          currentLevel++;
          levelElement.textContent = currentLevel + '%';
        } else {
          clearInterval(interval);
        }
      }, 20); // Velocidade da animação
    });
  });

  // Formulário enviar o email para o console
  document.getElementById("formulario-contato")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      const nome = document.querySelector('input[name="nome"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const mensagem = document.querySelector('textarea[name="mensagem"]').value;

      console.log(nome);
      console.log(email);
      console.log(mensagem);
    });












  // Textos que vão aparecer digitando
  const textos = [
    "carlos eduardo",
    "BACK-END",
    "FRONT-END",
  ];

  let contador = 0;
  let index = 0;
  let textoAtual = "";
  let letra = "";

  function eraseInitial() {
    let currentText = document.getElementById("digitando").textContent;
    if (currentText.length > 0) {
      document.getElementById("digitando").textContent = currentText.slice(0, -1);
      setTimeout(eraseInitial, 50);
    } else {
      digitar();
    }
  }

  function digitar() {
    if (contador === textos.length) {
      contador = 0; // reinicia o ciclo
    }

    textoAtual = textos[contador];
    letra = textoAtual.slice(0, ++index);

    document.getElementById("digitando").textContent = letra;

    if (letra.length === textoAtual.length) {
      setTimeout(apagar, 1500);
    } else {
      setTimeout(digitar, 100);
    }
  }

  function apagar() {
    letra = textoAtual.slice(0, --index);

    document.getElementById("digitando").textContent = letra;

    if (index === 0) {
      contador++;
      setTimeout(digitar, 500);
    } else {
      setTimeout(apagar, 50);
    }
  }

  eraseInitial();
});
//fim dos textos que vão aparecer