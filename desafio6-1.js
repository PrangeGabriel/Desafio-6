let aleatorio 
let conjunto = []

//a funcao setInterval chama a adiciona() por call back 
setInterval(adiciona, 5000)

//a funcao adiciona numeros aleatorios entre 0 e 9 a cada 5 segundos
function adiciona(){
    aleatorio = Math.floor((Math.random()*10)+1)
    conjunto.push(aleatorio)
    console.log(conjunto)
}


