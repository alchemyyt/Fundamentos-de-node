function saludo(nombre){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola '+ nombre)
      //resolve(nombre)
      reject('hay un error esta es la informacion del error que sacamos de la funcion')
    }, 1000);
  })
}
//
function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla');
      resolve(nombre);
    }, 1000 );
  })
  
}
function despedida(nombre){
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      console.log('adios ' + nombre)
      resolve()
    }, 1000);
    })
    
}
//
console.log('iniciando proceso')
saludo('carlos')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(despedida)//importante aqui no poner los parentesis de funcion porque sino se ejecuta primero
  .then(()=>{
    console.log('terminado el proceso.')
  })
  .catch(error=>{
    console.error('ha habido un error este mensaje lo puse yo');
    console.error(error);
  })