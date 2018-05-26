'use strict';

const file = require('../src/lib/file.js');
const parser = require('../src/lib/bitmap.js');

//testing readFile
describe('file.js', () => {

  it('should return error if invalid file path.', (done) => {

    file.readFile('missing.txt', (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('should return file path', (done) => {
    file.readFile(__dirname + '/../assets/bitmap.bmp', (err, data) => {
      expect(err).toBeNull();
      expect(data).toBeInstanceOf(Buffer);
      done();
    });
  });
});

//testing bitmap parsing
describe('bitmap.js', () => {
  it('should grab the "type" data from original buffer', (done) => {
    file.readFile(__dirname + '/../assets/bitmap.bmp', (err, data) => {
      let expected = 'BM';
      let actual = parser(data).type;
      console.log(actual);
      expect(actual).toBe(expected);
      done();
    });
  });
});
