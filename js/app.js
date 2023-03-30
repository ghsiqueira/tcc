const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function() {
  nav.classList.toggle("active");
});

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Verifica se o nome foi preenchido
  if (nameInput.value.trim() === '') {
    alert('Por favor, preencha o seu nome.');
    nameInput.focus();
    return;
  }
  
  // Verifica se o e-mail foi preenchido corretamente
  if (!isValidEmail(emailInput.value)) {
    alert('Por favor, digite um e-mail válido.');
    emailInput.focus();
    return;
  }
  
  // Verifica se a mensagem foi preenchida
  if (messageInput.value.trim() === '') {
    alert('Por favor, escreva uma mensagem.');
    messageInput.focus();
    return;
  }
  
  // Se todas as validações passarem, envia o formulário
  form.submit();
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
