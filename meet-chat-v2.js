const listaDeMsg = document.querySelector('.z38b6').childNodes
// Classe para descobrir ativação do MIC
let mic = document.querySelector(".IYwVEf.aC0Bke")

let todasMensagens = []
let prevQtdTotalMsg = 0;
let intervalo;

const pegaMensagens = () => {
    todosUsers = []
    todasMensagens = []

    for (let mensagem of listaDeMsg) {
        let nome = mensagem.childNodes[0].childNodes[0].innerText
        let horario = mensagem.childNodes[0].childNodes[1].innerText
        let mensagensDoUser = mensagem.childNodes[1].childNodes;

        for (let innerMsg of mensagensDoUser) {
            todasMensagens.push({
                nome: nome,
                horario: horario,
                mensagem: innerMsg.innerText
            })
        }
    }

    // console.log(todosUsers)
    let diff = checkDiff(prevQtdTotalMsg, todasMensagens.length)
    if (diff !== 0) {
        checkNovasMsg(todasMensagens, diff);
    }

}


function checkDiff(numeroAntigoMsg, numeroAtualMsg) {
    let diff = 0;
    if (numeroAtualMsg === numeroAntigoMsg) {
        // console.log('nada novo')
    } else {
        diff = numeroAtualMsg - numeroAntigoMsg;
        // console.log('rolou msg: ', diff, ' novas msgs')
        prevQtdTotalMsg = numeroAtualMsg
    }
    return diff;
}

// Check content of the newer messages
function checkNovasMsg(array, diff) {
    let searchArray = array.slice(array.length - diff)
    for (let msg of searchArray) {
        if (msg.nome === "Você") {
            console.log("o que falei: ", msg.mensagem)
        }
        let teste = msg.mensagem.toLowerCase();
        console.log(teste === "texto desejado");
    }
}


// set Interval 250ms
function start() {
    intervalo = setInterval(pegaMensagens, 250);
}

function stop() {
    clearInterval(intervalo)
}