console.log("============================");

console.log("Array Map");
const a = [4,5,6,7,8,9,10];
console.log(a);

console.log("---")

let arrMap1 = a.map((item) => item * 2);
console.log(arrMap1);

console.log("---")

let arrMap2 = a.map((item) => {return {x: item, y: item * 2}});
console.log(arrMap2);

console.log("============================");