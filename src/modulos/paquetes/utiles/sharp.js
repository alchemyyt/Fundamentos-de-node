const sharp = require('sharp');
sharp('descarga.jpeg')
  .resize(80)//cambiar tamaño
  .grayscale()//blanco y negro
  .toFile('resized.png')//nombre del la nueva imagen 