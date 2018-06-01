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

transformation.grayscale = buffer => {
  let turnGray = parser(buffer).colorPalette;

  for(let i = 0; i < turnGray.length; i+=4) {
    let hex = turnGray[i];
    turnGray[i + 2] = hex;
    turnGray[i + 1] = hex;
    //turnGray[i] = hex;
  }
  return buffer;
};


module.exports = transformation;