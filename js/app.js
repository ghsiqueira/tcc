const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function() {
  nav.classList.toggle("active");
});

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const messageError = document.querySelector("#message-error");

  if (nameInput.value === "") {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  if (messageInput.value === "") {
    messageError.style.display = "block";
  } else {
    messageError.style.display = "none";
  }

  if (nameInput.value !== "" && emailRegex.test(emailInput.value) && messageInput.value !== "") {
    alert("Mensagem enviada com sucesso!");
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
