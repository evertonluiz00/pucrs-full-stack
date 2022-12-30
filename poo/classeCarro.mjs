import { Carro } from "./models/Carro.mjs";

let carro = new Carro(50);
console.log(`Carro criado!`);
console.log(`Capacidade do tanque: ${carro.getCapacidadeDoTanque} `);
console.log(`Litros no tanque: ${carro.getLitrosNoTanque}`);

console.log(`---`);

carro.abastecer = 30;
console.log(`Abstecer: 30`);
console.log(`Litros no tanque: ${carro.getLitrosNoTanque}`);

console.log(`---`);

carro.abastecer = 30;
console.log(`Abstecer: 30`);
console.log(`Litros no tanque: ${carro.getLitrosNoTanque}`);

console.log(`---`);

carro.abastecer = 30;
console.log(`Abstecer: 30`);
console.log(`Litros no tanque: ${carro.getLitrosNoTanque}`);