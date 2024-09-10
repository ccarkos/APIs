async function getWeather() {
    // CRIAÇÃO DA VARIAVEL PARA PEGAR O VALOR DO INPUT CIDADE
    var cidade = document.getElementById('city').value     

    // CONECTAR COM A API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    // VARIAVEL PARA CONSUMIR O JSON DO ITEM TEMPERATURA 
    var tempCelsius = resposta.data.main.temp;

    // IMPRIME VALOR NO FRONT END COM CONCATENAR JQUERY E DUAS CASAS DECIMAIS   
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(2)} °C `;
}

// CHAMAR A FUNÇÃO
getWeather();