const pagina = document.querySelector("[data-contato]");

pagina.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const EntrarContato = document.querySelector("[data-fale]").value;
    const Mensagem = document.querySelector("[data-mensagem]").value;

    if(EntrarContato.length < 40 && Mensagem.length  < 120 ){
        alert("Obrigado pelo seu contato! \n Retornaremos assim que posível.")
    }else{
        alert("O campo de Nome não pode ter mais de 40 caracteries!\n O campo de mensagem não pode conter mais de 120 caracteries! ")
    }

})