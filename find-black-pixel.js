const PNGImage = require('pngjs-image');
const now = new Date();
const image = PNGImage.readImage('./white-image-with-black-pixel.png', () => {
  for(x=0; x<=1023; x++) {
    for(y=0; y<=1023; y++) {
      const color = image.getColor(x, y);
      if(color) {
        console.log(`Les coordonnées du pixel noir sont: (${x}, ${y})`);
        console.log(`et cela a pris ${new Date() - now} millisecondes`);
      }
    }
  }
});
