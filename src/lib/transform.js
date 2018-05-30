'use strict';

// module.exports = (buffer, transform, callback) => {

//   transformation[transform] && transformation[transform](buffer);
//   return callback(null, buffer);
// };
let transformation = {};

transformation.randomize = buffer => {
  let crazy = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  for (let i = 0; i < (buffer.colorPalette.length - 4); i = i + 4) {
    buffer.colorPalette[i] = crazy(0, 255);
  }
  
};

module.exports = transformation;