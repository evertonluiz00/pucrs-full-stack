const listaValores = [5,8,2,3,7,9,6];


function verificarMenorValor(lista) {
    let menor;

    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        if (menor == undefined || item < menor) {
            menor = item
        }
    }

    return menor;
}

console.log('Menor valor do array: ' + verificarMenorValor(listaValores));