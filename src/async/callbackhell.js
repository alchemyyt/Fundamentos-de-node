let nombre = 'jose'
function saludo(nombre,miCallback){
  setTimeout(() => {
    console.log('Hola '+ nombre)
    miCallback()
  }, 1000);
}
//
function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('bla bla bla');
    callbackHablar();
  }, 1000 );
}
function despedida(nombre,otroCallback){
  setTimeout(() => {
    console.log('adios ' + nombre)
    otroCallback()
  }, 1000);
}
//recursividad
function conversacion(nombre,conversaciones,callback) {
  if (conversaciones>  0) {
    hablar(()=>{
      conversacion(nombre,--conversaciones,callback);//aqui restamos uno a conversaciones
    })
  }else{
    despedida('jose',callback)
  }
  
}
console.log('iniciando proceso')
saludo('jose',(nombre)=>{
    conversacion(nombre,3,()=>{console.log('proceso terminado')})
})