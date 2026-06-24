const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    const palpite = Number(
        document.getElementById("palpite").value
    );

    if (palpite === numeroSecreto) {
        resultado.innerHTML =
            "🎉 Acertou! O número era " + numeroSecreto;
    } else {
        resultado.innerHTML =
            "❌ Errou! O número era " + numeroSecreto;
    }
});