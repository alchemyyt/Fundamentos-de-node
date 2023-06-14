const fs = require('fs');
const stream = require('stream');
const util = require('util');//para poder trabajar con herencia automatica
let data = '';

//STREAM DE LECTURA
let readableStream=fs.createReadStream(__dirname+'/input.txt');
readableStream.setEncoding('UTF8')
readableStream.on('data',(chunck)=>{
  console.log(chunck.toString())
})

readableStream.on('end',()=>{//para saber cuando ha terminado
  console.log(data)
})
/*
//STREAM DE ESCRITURA
process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal')*/

//stream DE TRANSFORMACION a mayuscula

const Transform = stream.Transform;
function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus,Transform)
Mayus.prototype._transform=function(chunck,codif,callback){
  chunckMayus = chunck.toString().toUpperCase();
  this.push(chunckMayus)
  callback();
}
let mayus= new Mayus()
readableStream
  .pipe(mayus)
  .pipe(process.stdout);