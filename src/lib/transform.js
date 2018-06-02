'use strict';

const parser = require('../lib/bitmap.js');  

let transformation = {};

transformation.randomize = (buffer) => {
  let colorChange = parser(buffer).colorPalette;

  let crazy = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  for (let i = 0; i < (colorChange.length - 4); i = i + 3) {
    colorChange[i] = crazy(0, 255);
  }
  return buffer;
};

transformation.grayscale = buffer => {
  let turnGray = parser(buffer).colorPalette;

  for(let i = 0; i < turnGray.length; i+=4) {
    let hex = turnGray[i];
    turnGray[i + 2] = hex;
    turnGray[i + 1] = hex;
  }
  return buffer;
};

transformation.pinkishChange = buffer => {
  
  let turnPinkish = parser(buffer).colorPalette;

  for(let i = 0; i < turnPinkish.length; i++) {
    let hex = turnPinkish[i + 10];
    turnPinkish[i + 2] = hex;
    turnPinkish[i + 1] = hex;
    turnPinkish[i] = hex;
  }
  return buffer;
};

transformation.makeBlue = buffer => {
  let mixUp = parser(buffer).colorPalette;
  let colorTable = parser(buffer).colorTable;


  for(let i = 0; i < mixUp.length; i += 4) {
    mixUp[i + 3] = Math.random() * colorTable;
    mixUp[i + 2] = Math.random() * colorTable;
    mixUp[i + 1] = Math.random() * colorTable;
  }

  return buffer;
};

module.exports = transformation;