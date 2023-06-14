process.on('exit',()=>{//esto es para ver como acaba node
  console.log('Ale, el proceso acabo')
  //aqui ya no podemos porner funciones aincronas no podemos porque ya termino el event loop
  setTimeout(()=>{
    console.log('esto nunca se va a ver')
  },0)
})
setTimeout(()=>{
  console.log('esto si  se va a ver')
},0)
process.on('beforeExit',()=>{//esto es para ver justo antes de que acabe el proceso de node 
  console.log('el proceso va a acabarse')
})
process.on('uncaughtException',(err,origen)=>{
  console.error('valla se nos ha olvidado capturar un error');
  console.log(err)
})
funcionnoexiste()
console.log('esto si el error no se recoge no sale')