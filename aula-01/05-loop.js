console.log('\n', '--- 1 ---', '\n');

for (let x = 5; x >= 1; x--) {
    console.log(x);
}

console.log('\n', '--- 2 ---', '\n');

let y = 5

while(y >= 1) {
    console.log(y);
    y--
}

console.log('\n', '--- 3 ---', '\n');

let z = 5

do {
    console.log(z);
    z--
}
while(z >= 1)

console.log('\n', '--- 4 ---', '\n');

let a = 1

Array(5).fill().forEach(() => {
    console.log(a);
    a++
})

