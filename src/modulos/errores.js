function seRompe() {
  return 3+z;
}
try {
  seRompe()//esto no funcionaria con una asincrona asi que lo mejor es usar try catch en las mismas funciones asincronas
} catch (error) {
  console.error('valla algo se ha roto');
  console.error(error.message);//con message vemos sola la info de lo que paso mal
}
console.log('esto aqui esta al final y no se rompe con el error')