const puppeteer = require('puppeteer');//funciona de forma asincrona

(async ()=>{
  console.log('lanzamos navegador')
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless:false});//para que lo abra
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Node.js')
  var titulo1=await page.evaluate(()=>{
    const h1 = document.querySelector('h1')
    console.log(h1.innerHTML)
    return h1.innerHTML
  })//ejecuta el script que queramos dentro de la pagina
  console.log(titulo1)
  console.log('cerramos navegador...')
  //browser.close();    
  console.log('navegador cerrado')

})();//funciona auto ejecutada