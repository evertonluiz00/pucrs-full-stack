var a = [];

a[0] = Math.random();
console.log(`Array length: ${a.length}`);

for (let val in a) {
    console.log(` --> ${val} `);
}

console.log(" =========================================== ");

a.push(Math.random());
console.log(`Array length: ${a.length}`);

for (let val in a) {
    console.log(` --> ${val} `);
}

console.log(" =========================================== ");

a[9] = Math.random();
console.log(`Array length: ${a.length}`);

// for IN
for (let val in a) {
    console.log(` --> ${val} `);
}

console.log(" =========================================== ");

// for OF
for (let val of a) {
    console.log(` --> ${val} `);
}

console.log(" =========================================== ");

for (let i = 0; i < a.length; i++) {
    console.log(` --> ${i}: ${a[i]}`);
}

console.log(" =========================================== ");

console.log(a.join(" - "));
console.log(a);