function saludo(nombre,miCallback){
  setTimeout(() => {
    console.log('Hola '+ nombre)
    miCallback()
  }, 1000);
}
function despedida(nombre,otroCallback){
  setTimeout(() => {
    console.log('adios ' + nombre)
    otroCallback()
  }, 1000);
}
console.log('iniciando proceso')
saludo('jose',()=>{
  despedida('jose',()=>{console.log('terminando proceso')
})
});
