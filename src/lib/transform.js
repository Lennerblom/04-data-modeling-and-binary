'use strict';

module.exports = (buffer, transform, callback) => {

  transformation[transform] && transformation[transform](buffer);
  return callback(null, buffer);
};
let transformation = {};

transformation.randomize = buffer => { 
  let randomizer = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  
  for(let i = 0; i < (buffer.colorPalette.length - 4); i = i +4) {
    buffer.colorPalette[i] = randomizer(0, 255);
  }
};

