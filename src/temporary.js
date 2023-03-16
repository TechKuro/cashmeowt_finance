const apiKey = "ebe3699433b327a341b2e8a0d2c8d11d"
const api = "https://financialmodelingprep.com/api/v3/profile/AAPL,GOOG,MSFT,FB,AMZN,NVDA,TSLA,NFLX?apikey=" + apiKey;


fetch(api).then(res => res.json()).then((data) => {
   
   let stockData = [];
   for ( let i = 0; i<data.length; i++) {
      let tempStock = [data[i].symbol, data[i].price, data[i].changes];

      stockData.push(tempStock)
   }
   
   console.log(stockData)
})
