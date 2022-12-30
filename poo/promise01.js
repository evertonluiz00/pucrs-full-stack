const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sucesso!");
    }, 2000);
});


let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
}

firstPromise
    .then(ifSucceed);

console.log("Fim do programa");