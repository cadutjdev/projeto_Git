let = dataEvento
let = dataAtual
let = participantes = ["x", "y", "w", "z"]


if (dataEvento < dataAtual) {
    console.log("permitir o evento")

    if (idade >= 18) {
        console.log("permitir cadastro")
    }else{
        console,log("cadastro não permitido pela idade")
    }
}else{
    console.log("cadastro não permitido. Data inválida")
}

for (let contador = 0; contador < participantes.length; contador++) {

    console.log(particiapntes.lentgh)

    if (participantes.length < 5) {
        console.log("permitir cadastro")
    }else{
        console.log("cadastrao não será permitido, excedeu o limite")
    }
}