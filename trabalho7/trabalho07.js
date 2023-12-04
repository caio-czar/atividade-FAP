alert("Bem vindo. Digite dois números para calcularmos a soma.")

let numero1 = parseFloat(prompt("Insira o primeiro número: "));
let numero2 = parseFloat(prompt("Insira o segundo número: "));

function soma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw Error("Digite apenas números");
    }
    alert("Resultado = " + (a + b));
}

try {
    soma(numero1, numero2);
} catch (e) {
    alert("Erro: " + e.message);
    alert(
        "Entradas: \n" +
        "\nPrimeiro número: " + numero1 +
        "\nSegundo número: " + numero2
    );
} finally {
    alert("Finalizando programa...");
}


