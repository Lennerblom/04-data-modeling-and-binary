'use strict';

const file = require('../src/lib/file.js');
const parser = require('../src/lib/bitmap.js');

//testing readFile
describe('file.js', () => {

  xit('should return error if invalid file path.', (done) => {

    file.readFile('missing.txt', (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  xit('should return file path', (done) => {

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
      let actual = data.toString('utf-8', 0, 2);
      console.log(actual);
      expect(actual).toBe(expected);
      done();
    });
  });

  // it('should make new buffer that we can access', (done) => {
  //   file.readFile(__dirname + '/../assets/bitmap.bmp', (err, data) => {
  //     let expected = ;
  //     let actual = parser(data);
  //     console.log(actual);
  //     expect(actual).toBe(expected);
  //     done();
  //   });
  // })
});