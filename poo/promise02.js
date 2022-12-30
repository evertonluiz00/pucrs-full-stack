const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejeitado!");
    }, 2000);
});


let ifFail = (failMessage) => {
    console.log(`Finalizado! ${failMessage}`);
}

firstPromise
    .then(
        (msg) => console.log("All rigth!!"),
        (msg) => {throw "Não fui atendido"} )
    .catch(ifFail);

console.log("Fim do programa");