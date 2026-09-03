async function getWeather() {
    let cidade = document.getElementById('city').value

    let resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`
    )

    let temperatura = resposta.data.main.temp

    document.getElementById('tempMundial').innerHTML =
        `A temperatura atual de ${cidade} é: ${temperatura.toFixed(0)}°C`
}