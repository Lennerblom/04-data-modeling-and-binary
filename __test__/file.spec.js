'use strict';

const file = require('../src/lib/file.js');
const parser = require('../src/lib/bitmap.js');
const changer = require('../src/lib/transform.js');

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

  //write testing
  describe('file.js', () => {
    it('should create a new bitmap image with a random color change.', (done) => {
      let original = __dirname + '/../assets/bitmap.bmp';
      let newPath = __dirname + '/../assets/Newby.bmp';

      file.readFile(original, (err, data) => {
        changer.randomize(data, (err, data));
    
        file.writeFile(newPath, data, (err) => {
          expect(err).toBeNull();
        });
        done();
      });
    });
  });

  describe('file.js', () => {
    it('should create a new bitmap image in grayscale.', (done) => {
      let original = __dirname + '/../assets/bitmap.bmp';
      let newPath = __dirname + '/../assets/grayNewby.bmp';

      file.readFile(original, (err, data) => {
        changer.grayscale(data, (err, data));
    
        file.writeFile(newPath, data, (err) => {
          expect(err).toBeNull();
        });
        done();
      });
    });
  });
  describe('file.js', () => {
    it('should create a new bitmap image with shades of pink.', (done) => {
      let original = __dirname + '/../assets/bitmap.bmp';
      let newPath = __dirname + '/../assets/pinkishNewby.bmp';

      file.readFile(original, (err, data) => {
        changer.pinkishChange(data, (err, data));
    
        file.writeFile(newPath, data, (err) => {
          expect(err).toBeNull();
        });
        done();
      });
    });
  });

  it('should create a new bitmap image with shades of blue.', (done) => {
    let original = __dirname + '/../assets/bitmap.bmp';
    let newPath = __dirname + '/../assets/turnBlue.bmp';

    file.readFile(original, (err, data) => {
      changer.makeBlue(data, (err, data));
  
      file.writeFile(newPath, data, (err) => {
        expect(err).toBeNull();
      });
      done();
    });
  });
});
