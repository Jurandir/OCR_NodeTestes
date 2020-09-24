const { createWorker } = require('tesseract.js');
var imagem = './img/SPO2717946.jpg'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const { data: { text } } = await worker.recognize(imagem, {
      rectangle: { top: 118, left: 624, width: 422, height: 18 },
    });
    console.log(text);
    await worker.terminate();
  })();


  // https://github.com/naptha/tesseract.js/blob/master/docs/api.md