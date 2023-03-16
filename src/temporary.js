const apiKey = "ebe3699433b327a341b2e8a0d2c8d11d"
const api = "https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=" + apiKey;


fetch(api).then(res => res.json()).then((data) => {console.log(data)})
