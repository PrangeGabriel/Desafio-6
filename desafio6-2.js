const modulo = require('inquirer')
const perguntador = [
    {
        type: 'input',
        name: 'input',
        message: 'Informe uma sequencia de numeros:',
        default: '0',
    }
]

//chama a pergunta
modulo.prompt(perguntador).then(processa)

//processa a resposta
function processa(resposta){
    //transforma em array
    let transforma = resposta.input 
    let conjunto = []
    for (num in transforma){
        conjunto.push(Number(transforma[num]))
    }
    console.log(conjunto)

    //soma dos numeros passados
    let somaTodos = conjunto.reduce(function(acum,valor){
        return acum + valor;
    })
    console.log(`a soma dos numeros dados eh de ${somaTodos}`)

    //filtro de numeros impares:
    let filtrado = conjunto.filter(function(valor){
        return valor % 2 == 1 
    })
    console.log(`Os numeros impares são ${filtrado}`)
        
}

