const botaoVoltar = document.getElementById("anterior");
const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById('capitulo')

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
} 

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1
    } else {
        pausarFaixa()
        taTocando = 0
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual; 
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1
    } else {
        capituloAtual += 1
    }
    
    audioCapitulo.src ="./books/dom-casmurro/" + capituloAtual + ".mp3"
    
    tocarFaixa()
    trocarNomeFaixa()
    taTocando = 1
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = 10
    } else {
        capituloAtual -= 1
    }

    audioCapitulo.src ="./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa()
    trocarNomeFaixa()
    taTocando = 1
} 

botaoAvancar.addEventListener('click', proximaFaixa)
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoVoltar.addEventListener('click', voltarFaixa);