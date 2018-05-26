'use strict';

const file = require('../src/lib/file.js');

describe('file.js', () => {

  //let expect, actual;

  it('should return error if invalid file path.', (done) => {

    file.readFile('missing.txt', (err) => {
      expect(err).not.toBeNull();
  
      done();
    });
  });

  it('should return file path', (done) => {
  
    file.readFile(__dirname + '/../assets/bitmap.bmp', (err, data) => {
      //expect(__dirname + '/../assets/bitmap.bmp').toBe('');
      expect(err).toBeNull();
      
      expect(data).toBeInstanceOf(Buffer);
      done();
    });
  });
});