let miNombre = 'jose'
async function saludo(nombre){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola '+ nombre)
      //resolve(nombre)
      resolve('jose')
    }, 1000);
  })
}
//
async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla');
      resolve();
    }, 1000 );
  })
  
}
async function despedida(nombre){
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      console.log('adios ' + nombre)
      resolve()
    }, 1000);
    })
    
}
console.log('empieza el proceso')
async function main() {
  await saludo(miNombre)
  await hablar()
  await hablar()
  await hablar()
  await despedida(miNombre)
  console.log('termina el proceso')
}
main()
console.log('esto va a ser lo segundo que se ejecute')