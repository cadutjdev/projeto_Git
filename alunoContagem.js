//Contagem de alunos
// par ou impar

let = numerodeAlunos = ["a", "b", "c", "d", "e"]

for (let contador = 0; contador < numerodeAlunos.length; contador++) {
    
    if (contador == 0) {
        console.log("zero")

    }else if (contador % 2 == 0) {
        console.log(`o numero ${contador} é par`)

    } else {
        console.log(`o numero ${contador} é impar`)
    }
    
}
