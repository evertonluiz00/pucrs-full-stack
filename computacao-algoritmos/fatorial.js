const fatorialNum = 5;

function fatorial(number) {
    if (number < 0) {
        return undefined;
    } else {
        let total = 1;

        for (let n = number; n >1; n--) {
            total = total * n;
        }

        return total;
    }
}

console.log('Fatorial');
console.log(`Fatorial de ${fatorialNum}: ${fatorial(fatorialNum)}`);
console.log('------------')

// Recursivo
function fatorialRecursivo(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * fatorialRecursivo(n - 1);
    }
}

console.log('Fatorial Recursivo');
console.log(`Fatorial de ${fatorialNum}: ${fatorialRecursivo(fatorialNum)}`);