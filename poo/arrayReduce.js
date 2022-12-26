console.log("============================");

console.log("Array Reduce");
const a = [4,5,6,7,8,9,10];
console.log(a);

const somaPares = 
    a.reduce(
        (acc, val) => acc += (val % 2 == 0) ? val : 0,
        0
    );

console.log("A soma dos pares: " + somaPares);

console.log("============================");