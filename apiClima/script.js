async function getWeater() {

    //Conectar com a API - Clima
    let resposta = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131')

    console.log(resposta)

    //Variavel para consumir o JSON da temperatura
    let tempCelsius = resposta.data.main.temp

    console.log(tempCelsius)

    //Imprimir no front-end e concatenar com JQUERY
    document.getElementById('temperatura').innerHTML = `A temperatura atual de Mogi das Cruzes é: ${tempCelsius.toFixed(0)}°C`
}

//Chamar a função
getWeater()
