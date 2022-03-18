const listaDeMsg = document.querySelector('.z38b6').childNodes
// const meuinput = document.querySelector('.KHxj8b.tL9Q4c')
// const buttonEl = document.querySelector('.VfPpkd-kBDsod')

let todosUsers = []
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

        let mensagensDoUserArray = []
        for (let innerMsg of mensagensDoUser) {
            mensagensDoUserArray.push(innerMsg.innerText)
            todasMensagens.push(innerMsg.innerText)
        }

        todosUsers.push({
            nome: nome,
            horario: horario,
            mensagens: mensagensDoUserArray
        })
    }

    // console.log(todosUsers)
    let diff = checkDiff(todasMensagens.length, prevQtdTotalMsg)
    if (diff !== 0) {
        checkNovasMsg(todasMensagens, diff);
    }
    
}

function start() {
    intervalo = setInterval(pegaMensagens, 250);
}

function stop() {
    clearInterval(intervalo)
}

function checkDiff(numeroAtualMsg, numeroAntigoMsg) {
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

function checkNovasMsg(array, diff) {
    let searchArray = array.slice(array.length - diff)
    for (let msg of searchArray) {
        switch (msg.toLowerCase()) {
            case 'xand': 
                console.log('Xandex Found!')
                break;
            case 'yan':
                console.log("Bozex Found!")
                break;
            case 'presente':
                console.log('Hora da chamada');
                break;

        }
    }
}