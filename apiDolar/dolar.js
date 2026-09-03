function buscarDolar() {

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }

            return resposta.json();
        })

        .then(function (dados) {

            console.log(dados);

            let dolar = dados.USDBRL;

            let valorAtual = Number(dolar.bid);
            let maiorValor = Number(dolar.high);
            let menorValor = Number(dolar.low);

            document.getElementById("valorDolar").innerHTML =
                "R$ " + valorAtual.toFixed(2).replace(".", ",");

            document.getElementById("maiorDolar").innerHTML =
                "R$ " + maiorValor.toFixed(2).replace(".", ",");

            document.getElementById("menorDolar").innerHTML =
                "R$ " + menorValor.toFixed(2).replace(".", ",");

            document.getElementById("status").innerHTML =
                "Cotação atualizada!";
        })

        .catch(function (erro) {

            console.log("ERRO:", erro);

            document.getElementById("status").innerHTML =
                "Erro ao buscar cotação";
        });
}


buscarDolar();


setInterval(buscarDolar, 10000);