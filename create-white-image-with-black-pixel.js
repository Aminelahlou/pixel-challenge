const PNGImage = require('pngjs-image');

const image = PNGImage.createImage(1024, 1024);
const x = getRandomInt(0, 1023);
const y = getRandomInt(0, 1023);
image.setAt(x, y, { red:255, green:255, blue:255, alpha:100 });
// Get index of coordinate in the image buffer
const index = image.getIndex(x, y);
console.log(index);
// Print the red color value
console.log(image.getRed(index));
const pngjs = image.getImage();
const fileName = './white-image-with-black-pixel.png'
image.writeImage(fileName, function (err) {
    if (err) throw err;
    console.log(`image enregistrée: ${fileName}; le pixel noir est aux coordonnées (${x}, ${y})`);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
