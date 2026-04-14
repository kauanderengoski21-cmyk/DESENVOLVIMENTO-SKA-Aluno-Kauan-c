

function adicionar(valor) {
    let resultado = document.getElementById("resultado");
    resultado.value += valor;
}

function calcular () {
    let resultado = document.getElementById("resultado");
    resultado.value = eval (resultado.value);
}

function Limpar() {
    let resultado = document.getElementById("resultado");
    resultado.value = ""
}