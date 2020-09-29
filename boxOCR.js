const { createWorker } = require('tesseract.js')
const modelo = require('./modelos/sefazce.json')

//var imagem = './img/SPO2717946.jpg'
var imagem = './img/THE17981.jpg'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')

   let str, ary, ary0
   let len = modelo.length

   for (let i = 0; i < len; i++) {
      const { data: { text } } = await worker.recognize(imagem, { rectangle: modelo[i].rectangle } )
      str = text
      ary0 = str.split(`\n`)
      
      ary = ary0.filter( item => item > "" )
    
      // ary.push( str.slice(0,-1) )
      modelo[i].values = ary
   }

    console.log(modelo)    

    await worker.terminate()

  })()


  // https://github.com/naptha/tesseract.js/blob/master/docs/api.md
  // https://github.com/naptha/tesseract.js/blob/master/docs/examples.md
