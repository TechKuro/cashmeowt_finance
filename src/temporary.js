const apiKey = "ebe3699433b327a341b2e8a0d2c8d11d"
const api = "https://financialmodelingprep.com/api/v3/profile/AAPL,GOOG,MSFT,FB,AMZN,NVDA,TSLA,NFLX?apikey=" + apiKey;


fetch(api).then(res => res.json()).then((data) => {console.log(data[0].symbol, data[0].price, data[0].changes, data[1].symbol, data[1].price, data[1].changes, data[2].symbol, data[2].price, data[2].changes, data[3].symbol, data[3].price, data[3].changes, data[4].symbol, data[4].price, data[4].changes, data[5].symbol, data[5].price, data[5].changes, data[6].symbol, data[6].price, data[6].changes, data[7].symbol, data[7].price, data[7].changes)})
