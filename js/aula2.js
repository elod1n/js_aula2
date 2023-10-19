function runCalculator() {
    let nomeUsuario = prompt("Bem vindo a calculadora de imposto de importação. Digite seu primeiro nome para que você possa utilizar a calculadora.");

    let dolarValor = parseFloat(prompt(`${nomeUsuario}, qual é a cotação do dólar US$ no dia de hoje (valor numérico)?`));

    let valorProduto = parseFloat(prompt(`${nomeUsuario}, qual é o valor do produto em reais (R$) que você deseja comprar?`));

    let valorConvertido = valorProduto / dolarValor;

    let valorFinal;
    let valorImposto;

    if (valorConvertido < 50) {
        valorFinal = valorProduto / 0.83;
        valorImposto = valorFinal - valorProduto;
    } else {
        valorFinal = valorProduto + (0.92 * valorProduto);
        valorImposto = 0.92 * valorProduto;
    }

    alert(`Você pagará R$ ${valorImposto.toFixed(2)} de impostos`);

    // Atualiza o HTML com os valores
    document.getElementById("nomeUsuario").innerText = nomeUsuario;
    document.getElementById("valorProduto").innerText = `R$ ${valorProduto.toFixed(2)}`;
    document.getElementById("dolarValor").innerText = `US$ ${dolarValor.toFixed(2)}`;
    document.getElementById("valorFinal").innerText = `R$ ${valorFinal.toFixed(2)}`;
    document.getElementById("valorImposto").innerText = `R$ ${valorImposto.toFixed(2)}`;
}

// Chama a função quando a página estiver completamente carregada
window.onload = function() {
    setTimeout(runCalculator, 1000);
};
