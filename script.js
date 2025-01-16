// exibir o campo para descriçao se houver comorbidade no cliente, caso o mesmo selecione "sim"

document.getElementById("comorbidade").addEventListener("change", function() {
    if (this.value === "Sim") { 
        document.getElementById("descricaoComorbidade").style.display = "inline";
    } else { 
        document.getElementById ("descricaoComorbidade").style.display  = "none" ; 

    }
});
// quando o formulario for enviado, redirecionar isso para o whatsapp com as informaçoes do cliente

document.getElementById ("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();


//coletar os valores do formulario 

var nome = document.getElementById("nome").value;
var idade = document.getElementById("idade").value;
var opcao = document.getElementById("opcao").value;
var opcaodois = document.getElementById("opcaodois").value;
var comorbidade = document.getElementById("comorbidade").value;
var descricaoComorbidade = document.getElementById("descricaoComorbidade").value;

//Criaçao da mensagem a ser enviada para o Whatsapp do profissional 

var mensagem = "Olá, vim através da pagina do estúdio para consultar disponibilidade, meu nome é " + nome + "\n";  
mensagem += "Idade: " + idade + "\n";
mensagem += "Desejo: " + opcao + "\n";
mensagem += "Selecione o seu objetivo: " + opcaodois + "\n";

if (comorbidade === "Sim") {
    mensagem += "Comorbidade: " + descricaoComorbidade  + "\n" ; 
}

else { 
    mensagem += "Comorbidade: Nenhuma\n"; }

    var link = "https://wa.me/+5521983263319?text=" + encodeURIComponent(mensagem);

// Redirecionar o cliente para o whatsapp do profissional 

window.location.href = link;


});