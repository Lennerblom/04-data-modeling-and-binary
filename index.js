'use strict';

const fileUtils = require('./lib/file.js');// readFile read and write file
const bitmapParser = require('./lib/bitmap.js'); //(BMP mapping with offsets code)
const transformFile = require('./lib/transform.js');

const transforms = ['invert', 'darken', 'border','grayscale'];