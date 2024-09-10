fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('maiorDolar').innerHTML = economia.USDBRL.high;
    document.getElementById('menorDolar').innerHTML = economia.USDBRL.low;
})