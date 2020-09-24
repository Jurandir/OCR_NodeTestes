const { createWorker } = require('tesseract.js');
var imagem = './img/SPO2717946.jpg'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const x = { data: { text } } = await worker.recognize(imagem, {
      rectangle: { top: 118, left: 624, width: 422, height: 18 },
    })

    const y = { data: { text } } = await worker.recognize(imagem, {
        rectangle: { top: 184, left: 130, width: 500, height: 18 },
      })

      const z = { data: { text } } = await worker.recognize(imagem, {
        rectangle: { top: 184, left: 645, width: 215, height: 18 },
      })
      
    console.log('13 - CÓDIGO DE BARRAS :',x.data.text);
    console.log('01 - CÓDIGO/ESPECIFICAÇÃO DA RECEITA :',y.data.text);
    console.log('02 - DATA VENCIMENTO :',z.data.text);

    await worker.terminate();
  })();


  // https://github.com/naptha/tesseract.js/blob/master/docs/api.md