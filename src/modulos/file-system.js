const fs = require('fs');//importamos el modulo fs con el global require

function leer(ruta,callback) { //creamos una funcion con los parametros de ruta y un callback
  fs.readFile(ruta,(err,data)=>{//usamos el metodo readFile de el modulo fs y le ponemos como parametro un error y un archivo o data 
    console.log(data.toString());//hacemos un console log y que muestre el archivo en forma de string con toString
  })
}
function escribir(ruta,contenido,callback) {
  fs.writeFile(ruta,contenido,(err)=>{
      if (err) {
        console.error('No he podido escribirlo',err)
      }else{
        console.log('Se ha escrito correctamente')
      }
  });
}
function borrar(ruta,callback)  {
  fs.unlink(ruta,callback)
}
//leer(__dirname + '/archivo.txt',console.log)//ejecutamos la funcion y ponemos la ruta del archivo

//escribir(__dirname+'/archivo1.txt','Soy un archivo nuevo',console.log)

borrar(__dirname+'/archivo1.txt',console.log)