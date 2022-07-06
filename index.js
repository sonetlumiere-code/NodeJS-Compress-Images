const imagemin = require("imagemin");
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require('imagemin-gifsicle');

const imageCompressor = { 
    compressImage: async () => {
        try {
            const file = await imagemin([`./images/to-compress/*`], {
                destination: `./images/compressed`,
                plugins: [ 
                    imageminJpegRecompress(), 
                    imageminPngquant({quality: [0.5, 0.6]}), 
                    imageminGifsicle() 
                ]
            });
            console.log(file);
            return file;                
        } catch (error) {
            throw new Error(error);
        }       
    }
}

imageCompressor.compressImage();