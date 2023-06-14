//let buffer = Buffer.alloc(4);//4byte//vacio

//puedes hacerlo todo directo
//let buffer = Buffer.from([1,2,3]);//datos binarios
let buffer = Buffer.from('hola')
//console.log(buffer.toString())

//--
let abecedario = Buffer.alloc(26)
console.log(abecedario)

for (let index = 0; index < 26; index++) {
  abecedario[index]=index+97;  
}
console.log(abecedario.toString())//abecedario