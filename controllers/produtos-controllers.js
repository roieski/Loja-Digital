import { produtoServices } from "../serviços/produtos-servicos.js";
import { formatPrice } from "../formatterPrices.js";

const novoProduto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const conteudo = `
        <div class="card_produto">
            <img src="${imageUrl}" alt="img" class="imagem_card">
            <h1 class="texto_card"> ${name} </h1>
            <p class="valor_card">${formatPrice(price)}</p>
            <a  class="link_card" href="../produtos.html?id=${id}">Ver Produto</a>
        </div>   
    `;
  card.innerHTML = conteudo;
  card.dataset.id = id;
  console.log(card);
  return card;
};

const produtos = document.querySelector("[data-produtos]");

const render = async () => {
  try {
    const listaProdutos = await produtoServices.listaProdutos();
    listaProdutos.forEach((elemento) => {
      produtos.appendChild(
        novoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();