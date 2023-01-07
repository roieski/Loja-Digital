import { produtoServices } from "../serviços/produtos-servicos.js";
import { formatPrice } from "../formatterPrices.js";

const novoProduto = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const conteudo = ` 
    
        <div>
            <div class="container">
                <button class="buttonDelete" type="button"><img class="deleteImage" src="../imagens/delete.png" alt="Deletar" /></button>
                <a href="../views/edit-product.html?id=${id}"><button class="buttonEdit" type="button"><img class="editImage" src="../imagens/edit.png" alt="Editar" /></button></a>
            </div>    
            <div class="card_produto">
                    <img src="${imageUrl}" alt="img" class="imagem_card">
                    <h1 class="texto_card"> ${name} </h1>
                    <p class="valor_card">${formatPrice(price)}</p>
                    <a  class="link_card" href="../produtos.html?id=${id}">Ver Produto</a>
            </div>   
        </div>
    `;

    card.innerHTML = conteudo;
    card.dataset.id = id;
    return card;
};

const produtos = document.querySelector("[data-allProducts]")

produtos.addEventListener("click", async (evento) => {
    let deleteButton = evento.target.className === "deleteImage";
    if (deleteButton) {
        const produto = evento.target.closest("[data-id]");
        let id = produto.dataset.id;
        produtoServices
            .deletaProduto(id)
            .then((res) => {
                produto.remove();
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
});

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



