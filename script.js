function calcular() {
    const F = Number(document.querySelector("#inputfrequencia").value); // frequência
    const C = Number(document.querySelector("#inputcomprimento").value); // comprimento
    
    const v = F * C //fórmula

    document.querySelector("#resultado").textContent = "V = velocidade: " + v.toFixed(2) + "m/s"; // oque faz o resultado aparecer
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular); // oque faz o botão calcular a fórmula
});