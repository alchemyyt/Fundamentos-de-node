const os = require('os');

//bits console.log(os.arch()) 
//sitema operativo console.log(os.platform())
//info de los cores con .length vemos la cantidad de cores console.log(os.cpus().length)
//errores del sistema operativo console.log(os.constants)
//byte de memoria libre console.log(os.freemem())
/*const SIZE=1024;
function kb(bytes) {
  return bytes/SIZE
}
function mb(bytes) {
  return kb(bytes)/SIZE
}
function gb(bytes) {
  return mb(bytes)/SIZE
}
console.log(kb(os.freemem()))//asi vemos en kb
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

console.log(os.totalmem())//toda la memoria ram

console.log(os.homedir())//carpeta del usuario
console.log(os.tmpdir())//directorio temporal
console.log(os.hostname())//server name*/
console.log(os.networkInterfaces())//todas las interfaces de red en uso de el sistema operativo