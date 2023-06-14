// NOMBRE=JOSE node src/entorno.js ejecuta este comando
let nombre = process.env.NOMBRE || 'usuarios';
  console.log('hola '+nombre)