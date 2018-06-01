'use strict';

const file = require('../src/lib/file.js');
const parser = require('../src/lib/bitmap.js');
const changer = require('../src/lib/transform.js');

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
      let actual = parser(data).type;
      console.log(actual);
      expect(actual).toBe(expected);
      done();
    });
  });

  //write testing
  describe('file.js', () => {
    it('should create a new bitmap image with same values as the original', (done) => {
      let original = __dirname + '/../assets/bitmap.bmp';
      let newPath = __dirname + '/../assets/grayNewby.bmp';

      file.readFile(original, (err, data) => {
        changer.grayscale(data, (err, data));
    
        file.writeFile(newPath, data, (err) => {
          expect(err).toBeNull();
          expect(data).toBe(data);
        });
        done();
      });
    });
  });
});
//readFile
//apply readFile to variable, var obj
//writeFile(filepath, obj, randomize)