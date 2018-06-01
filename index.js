'use strict';

const fileUtils = require('./lib/file.js');// readFile read and write file
const bitmapParser = require('./lib/bitmap.js'); //(BMP mapping with offsets code)
const transformFile = require('./lib/transform.js');

const transforms = ['random', 'darken', 'border','grayscale'];

const cliArgs = process.args;

let file = process.arg[2] || 'bitmap.bmp';
let newFile = process.arg[3] || 'newby.bmp';
let transformation = process.arg[4] || 'random';