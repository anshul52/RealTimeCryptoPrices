let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

var stockPriceElem = document.getElementById('stock_price')
var lastPrice = null;

ws.onmessage = (event)=>{
    let stockObj = JSON.parse(event.data);
    let price = parseFloat(stockObj.p).toFixed(2);
    stockPriceElem.innerText = price;
    stockPriceElem.style.color = !lastPrice || lastPrice===price ? 'black' : price>lastPrice ? 'green' : 'red';
    lastPrice = price;
}