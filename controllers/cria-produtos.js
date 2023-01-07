import { produtoServices } from "../serviços/produtos-servicos.js";

const form = document.querySelector("[data-form]");



const preco = document.querySelector("[data-preco]");
 preco.addEventListener("keypress", function(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

  console.log(keyCode);
    if (keyCode > 47 && keyCode < 58) {
         
    }else{
      e.preventDefault(); }
  });

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-imagem]").value;
  const preco = document.querySelector("[data-preco]").value;
  const descricao = document.querySelector("[data-descricao]").value;
  const categoria = document.querySelector("[data-categoria]").value;
 
   if (nome.length > 20) {
    alert("O campo nome deve ter no maximo 20 caracteres!")
    window.location.reload()
  }

  if(descricao.length > 150) {
    alert("O campo Descrição deve ter no maximo 150 caracteres!")
  }

  produtoServices
    .criaProdutos(nome, url, preco, descricao, categoria)
    .then((resposta) => {
      window.location.pathname = "/index.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
    
   
});
