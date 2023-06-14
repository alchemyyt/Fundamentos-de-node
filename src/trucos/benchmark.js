console.time('todo');
let suma= 0;
console.time('bucle');
for (let index = 0; index < 1000000; index++) {
  suma += 1;
} 
console.timeEnd('bucle')

let suma2= 0;
console.time('bucle2');
for (let index2 = 0; index2 < 100000000; index2++) {
  suma += 1;
} 
console.timeEnd('bucle2')
function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('Termina proceso asincrono')
      resolve()
    },1000)
  })
}
console.time('asincrona');
asincrona()
  .then(()=>{
    console.timeEnd('asincrona');
  })
console.timeEnd('todo')

