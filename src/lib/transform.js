'use strict';

const parser = require('../lib/bitmap.js');  

let transformation = {};

transformation.randomize = (buffer) => {
  let colorChange = parser(buffer).colorPalette;
  console.log(colorChange);

  let crazy = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  for (let i = 0; i < (colorChange.length - 4); i = i + 3) {
    colorChange[i] = crazy(0, 255);
  }
  console.log(colorChange);
  return buffer;
};


module.exports = transformation;