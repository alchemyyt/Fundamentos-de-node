const {exec,spawn}=require('child_process');//esto es para todos los metodos
//const exec = require('child_process').exec;
/*exec('ls -la',(err,stdout,sterr)=>{//si estas en linux pones ls -la y si esta en windows pones dir
  if (err) {
    console.error(err);
    return false //si hay un error se detiene
  }
  console.log(stdout)
})*/


//aqui ejecuto un node dentro de otro node
/*exec('node src/modulos/console.js',(err,stdout,sterr)=>{//si estas en linux pones ls -la y si esta en windows pones dir
  if (err) {
    console.error(err);
    return false //si hay un error se detiene
  }
  console.log(stdout)
})*/
let proceso = spawn('ls',['-la'])
console.log(proceso)
proceso.stdout.on('data',function (dato) {
  console.log('esta muerto?')
  console.log(proceso.killed)
  console.log(dato.toString())
})

proceso.on('exit',function () {
  console.log('el proceso termino')
  console.log(proceso.killed)
})