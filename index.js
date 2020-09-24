const { createWorker } = require('tesseract.js');
var imagem = './img/SPO2717946.jpg'

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  
  const { data: { text } } = await worker.recognize(imagem);
  console.log(text);
  await worker.terminate();
})();