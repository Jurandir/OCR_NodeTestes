const { createWorker } = require('tesseract.js')
const modelo = require('./modelos/sefazce.json')

var imagem = './img/SPO2717946.jpg'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')

   let str
   let len = modelo.length

   for (let i = 0; i < len; i++) {
      const { data: { text } } = await worker.recognize(imagem, { rectangle: modelo[i].rectangle } )
      str = text;
      modelo[i].text = str.slice(0,-1)
   }

    console.log(modelo)    

    await worker.terminate()

  })()


  // https://github.com/naptha/tesseract.js/blob/master/docs/api.md
  // https://github.com/naptha/tesseract.js/blob/master/docs/examples.md
