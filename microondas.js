let tempo;
let padrao;
let opcao;
let msgInicio;
let msgAcao = `Utilize aumentar() ou reduzir() para alterar o tempo em 5 segundos. Utilize ligar() para iniciar o aquecimento.`; 
let msgTempoAtual;

function updateMsgs() {
    msgInicio = `Você escolheu a opção ${opcao}, tempo padrão ${tempo} segundos.`;
    msgTempoAtual = `Tempo atual: ${tempo} segundos.`;
    padrao == tempo ? console.log(msgInicio) : console.log(msgTempoAtual);
    console.log(msgAcao);
}

function microondas(alimento) {
    switch (alimento) {
        case 'Pipoca':
            padrao = 10;
            tempo = padrao;
            opcao = alimento;    
            updateMsgs()        
            break;
        case 'Macarrão':
        case 'Brigadeiro':
            padrao = 8;
            tempo = padrao;
            opcao = alimento;
            updateMsgs()
            break;
        case 'Carne':
            padrao = 15;
            tempo = padrao;
            opcao = alimento;
            updateMsgs()
            break;
        case 'Feijão':
            padrao = 12;
            tempo = padrao;
            opcao = alimento;
            updateMsgs()
            break;
        default:
            console.log('Prato inexistente');
            break;
    }
}

function aumentar() {
    tempo += 5;
    updateMsgs()
}

function reduzir() {
    tempo -= 5;
    updateMsgs()
}

function ligar() {
    if (tempo < padrao) {
        msg = 'Tempo insuficiente.';
    } else if (tempo >= padrao*3) {
        msg = 'Kabumm!!';
    } else if (tempo >= padrao*2) {
        msg = 'A comida queimou!';
    } else {
        msg = 'Prato pronto, bom apetite!!!'
    }
    console.log(msg);
}

