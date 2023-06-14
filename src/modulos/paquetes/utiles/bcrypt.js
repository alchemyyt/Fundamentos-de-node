const bcrypt = require('bcrypt');
const password = '1234Segura!'
bcrypt.hash(password,5,(err,hash)=>{
  //
  console.log(hash)
  bcrypt.compare(password,hash,(err,res)=>{
    console.log(res)
  }) //tambien puedes comparar la contraseña con el hash
})//esto encripta con hash y lleva 3 parametros 1 la contaseña 2 el numero de veces que va a ejecutar el algoritmo y 3 la funcion que va a ejecutar