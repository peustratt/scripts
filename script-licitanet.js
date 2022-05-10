// Selectors
// #disputa > table > tbody > tr:nth-child(1) > td:nth-child(7) > span.animated.flash > span
// #pendente > table > tbody > tr:nth-child(2) > td:nth-child(7) > span.font-weight-bold
// 

// Start
var listQuery = '#randomico > table > tbody > tr'
var textQuery = 'td:nth-child(7) > span.animated.flash > span'

var tabelaEL2 = document.querySelectorAll(listQuery);
var tdArray = [...tabelaEL2];
var content = tdArray.map(filho => filho.querySelector(textQuery).textContent)

var interval = setInterval(start, 500);

function start() {
    tabelaEL2 = document.querySelectorAll(listQuery);
    tdArray = [...tabelaEL2];
    tdArray.forEach((item, index) => {
        let stringReal = item.querySelector(textQuery).textContent
        if (stringReal != content[index]) {
            console.log(`lote ${index + 1}: `, parseRealToFLoat(stringReal) - (Math.floor(Math.random() * 15) + 10))
        }
        // console.log(stringReal, content[index])
    })
    content = tdArray.map(filho => filho.querySelector(textQuery).textContent)
}
// Stop
function stop() {
    clearInterval(interval)
    var no = document.getElementById('botao-fodex');
    if (no.parentNode) {
        no.parentNode.removeChild(no);
    }
}

// Convert R$ to Float
function parseRealToFLoat(str) {
    let numbers = str.split(' ')[1];
    let totalStr = numbers.split('.').join('').split(',')[0]

    return parseInt(totalStr)
}

let div = document.createElement("div")
div.style.cssText = 'position: fixed; right: 0; bottom: 0; display: flex; flex-direction: column'
div.innerHTML = `
    <button onclick="stop()" style="width: 200px; height: 100px;" >Stop</button>
`
div.id = "botao-fodex"
document.body.appendChild(div);

var divEl = document.getElementById("botao-fodex")