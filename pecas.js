// Atividade de Peças

let pesoPeca = 300 //peso > 100gr
let nomePeca = "martelo" //length deve ser > que 2 caracteres
let quantidadePecas = 20 //quantidade de peças não pode ser > 10

if (quantidadePecas < 10) {
    console.log("a lista de peças ainda tem espaço para cadastro de nova peça")

    if (nomePeca.length > 2) {
        console.log("nome ok")

        if (pesoPeca >= 100) {
            console.log("peso ok, peça cadastrada com sucesso")

        }else{
            console.log("peso inferior a 100gr, a peça não pode ser cadastrada")
        }

    }else{
        console.log("não pode ser cadastrada, pois o nome da peça tem menos que 3 caracteres")
    }
}else {
    console.log("a lista de peças já está completa, não é possível cadastrar mais")
}