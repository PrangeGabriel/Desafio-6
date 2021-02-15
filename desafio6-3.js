const modulo = require('inquirer')
const perguntador = [
    {
        type: 'input',
        name: 'input',
        message: 'informe sua data de nascimento',
        default: 'Formato DD/MM/AAAA',
    }
]

//chama a pergunta
modulo.prompt(perguntador).then(converteData)

//chama a funcao
function converteData(recebido){
    //converte o objeto em array
    let dadosAntes = recebido.input.split("/")
    let dadosDepois = []
    
    //converte as strings para numeros 
    for (numero of dadosAntes){
        dadosDepois.push(Number(numero))
    }
    //transforma em data
    let data = new Date(dadosDepois[2], dadosDepois[1], dadosDepois[0])

    //imprime na tela as informacoes passadas
    console.log("o dia digitado foi " + data.getDate())
    console.log('o mes digitado foi ' + data.getMonth())
    console.log(`o ano digitado foi ${data.getFullYear()}`)
}




