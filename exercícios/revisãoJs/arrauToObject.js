const arrayoriginal = [1,2,3]

function transformArrayInObject(array){
    //minha resolução
    // const arrayObjetos = []
    // array.map( (numero )=> {
    //     let obj = {
    //         val: numero
    //     }
    //     arrayObjetos.push(obj)
    // })
    // return arrayObjetos 
    //refatoração proposta
    return array.map(numero => ({ val: numero }));
    //simulação do que roda no método map

    //let resultado = [];
    // Para cada elemento, cria um novo objeto e o adiciona na mesma posição da nova array
    // for (let i = 0; i < array.length; i++) {
    //     resultado[i] = { val: array[i] };
    // }
    // return resultado;

}

console.log(transformArrayInObject(arrayoriginal))
console.log(arrayoriginal)