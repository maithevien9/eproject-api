const { Image } = require('canvas');
const tf = require('@tensorflow/tfjs');
var FileReader = require('filereader');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

module.exports = handleImage = async (imgShow) => {
  const img = await loadImage(imgShow.data);
  const canvas = await createCanvas(200, 200);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);

  const model = await tf.loadLayersModel('http://localhost:8001/tfjs_model/model.json');
  let img2 = tf.browser.fromPixels(canvas);

  let tensor = img2.resizeNearestNeighbor([128, 128]).toFloat().div(255).expandDims();
  let predictions = await model.predict(tensor);
  predictions = predictions.dataSync();

  const GARBAGE_CLASS = {
    0: 'Pin',
    1: 'Sinh học',
    2: 'Carton',
    3: 'Quần áo',
    4: 'Thuỷ tinh',
    5: 'kim loại',
    6: 'Giấy',
    7: 'Nhựa',
    8: 'Rác',
  };

  let rs = Array.from(predictions)
    .map((p, i) => ({ probability: p, className: GARBAGE_CLASS[i] }))
    .sort((a, b) => b.probability - a.probability);

  return rs?.[0];
};
