console.log('hola mundo');
let i = 0;
let interval = 1000;
setInterval(() => {
  console.log(i)
  i++
  if (i===5) {
    var a =3+z;
  }
}, interval);
console.log('sengunda instruccion')//esto se ejecuta primero que el set interval porque el setInterval es asincrono y se ejecuta cuando le toque en este caso cada 1s 