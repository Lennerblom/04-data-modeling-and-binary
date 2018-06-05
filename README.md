[![Build Status](https://travis-ci.org/Lennerblom/04-data-modeling-and-binary.svg?branch=master)](https://travis-ci.org/Lennerblom/04-data-modeling-and-binary)



# Data Modeling and Binary
---
This repository contains modules that will take in a bitmap file and crete a new file with altered color values.

***file.js*** exports the following functions:

    fs.readFile() is an error first method that has an airty of one, which will take in a file path, and returns a callback of either an error, or the files buffer data.

    fs.writeFile() is an error first method that has an airty of two.  It takes in a new file path, and a buffer.

***bitmap.js*** contains various offsets for a bitmap file, and exports different object properties used to isolate different parts of a bitmap's  buffer.

***transform.js*** contains methods that each have an airty of one, which is a buffer.  Each function will alter the given buffer and return an altered version. It exports the following functions: 

    randomize() returns a randomized color palette.
    grayscale() will turn an image to grayscale
    pinkishChange() will change the original bitmap image a pinkish color.
    makeBlue() will turn the image blue.

***file.spec.js*** contains the following tests:

**test 1*** ensures there will be an error if there is an imvalid file path.

**test 2** ensures that a file can be read and the data is a buffer.

**test 3** ensures that that we can successfully parse the buffer and return the file type.

**test 4 - 7** test the above transform functions.  Each will create a new file in the assets folder.  