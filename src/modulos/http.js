const http = require('http');
/*http.createServer((req,res)=>{
  console.log('nueva peticion')
  console.log(req.url);//req es para leer lo que manda el usuario en este caso crome
  res.writeHead(201,{
    "content-type":"text/plain"
  })//creado 201
  res.write('hola ya se usar http de node')//res es para mandar algo al usuario
  res.end()
}).listen(3000)//puerto
console.log('escuchando http en el puerto 3000')*/

//
const router = (req,res)=>{
  console.log('nueva peticion')
  console.log(req.url);//req es para leer lo que manda el usuario en este caso crome
  switch(req.url){
    case '/hola':
      res.write('hola,que tal')
      res.end();
      break;

    default:
      res.write('erro 404 no se lo que quieres')
      res.end();//importante este en porque si no no funciona
  }
}
http.createServer(router).listen(3000);
