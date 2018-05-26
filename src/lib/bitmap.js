'use strict';

module.exports = function (buffer) {

  const parsedBitmap = {};

  // Identify the offsets by reading the bitmap docs
  const FILE_SIZE_OFFSET = 2;
  const WIDTH_OFFSET = 18;
  const HEIGHT_OFFSET = 22;
  const NUM_COLORS_OFFSET = 46;
  const COLOR_TABLE_OFFSET = 54;
  const BYTES_PER_PIXEL_OFFSET = 28;
  let COLOR_TABLE_SIZE = parsedBitmap.numColors * 4;

  return {
    type: buffer.toString('utf-8', 0, 2),
    fileSize: buffer.readInt32LE(FILE_SIZE_OFFSET),
    bytesPerPixel: buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET),
    height: buffer.readInt32LE(HEIGHT_OFFSET),
    width: buffer.readInt32LE(WIDTH_OFFSET),
    numColors: buffer.readInt32LE(NUM_COLORS_OFFSET),
    colorTable: buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE),
  };
};
