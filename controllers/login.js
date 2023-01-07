const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  let emailAutorizado = "AluraGeek@gmail.com"
  let senhaAutorizado = "123456"

  if (email.length == emailAutorizado.length && password.length == senhaAutorizado.length) {
    window.location.href = "./produtos.html";
  } else {
    alert("OPSS!, Você não é autorizado a acessar essa página. *Abra o console*");
    console.log("Email:" + emailAutorizado), console.log("Senha:" + senhaAutorizado)
  }
});