// libs/multer.js
const multer = require('multer');
const path = require('path');

const filename = (req, file, callback) => {
    const fileName = Date.now() + path.extname(file.originalname);
    callback(null, fileName);
};

const generateStorage = (destination) => {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, destination);
        },
        filename
    });
};

// libs/multer.js
module.exports = {
    image: multer({
        storage: generateStorage('./public/images'),
        fileFilter: (req, file, callback) => {
            const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

            if (allowedMimeTypes.includes(file.mimetype)) {
                callback(null, true);
            } else {
                const err = new Error(`Only ${allowedMimeTypes.join(', ')} allowed to upload!`);
                callback(err, false);
            }
        },
        onError: (err, next) => {
            next(err);
        }
    }),

    // libs/multer.js
    video: multer({
        storage: generateStorage('./public/videos'),
        fileFilter: (req, file, callback) => {
            const allowedMimeTypes = ['video/mp4', 'video/x-msvideo', 'video/quicktime'];

            if (allowedMimeTypes.includes(file.mimetype)) {
                callback(null, true);
            } else {
                const err = new Error(`Only ${allowedMimeTypes.join(', ')} allowed to upload!`);
                callback(err, false);
            }
        },
        onError: (err, next) => {
            next(err);
        }
    }),

    // libs/multer.js
    file: multer({
        storage: generateStorage('./public/files'),
        fileFilter: (req, file, callback) => {
            const allowedMimeTypes = ['application/pdf'];

            if (allowedMimeTypes.includes(file.mimetype)) {
                callback(null, true);
            } else {
                const err = new Error(`Only ${allowedMimeTypes.join(', ')} allowed to upload!`);
                callback(err, false);
            }
        },
        onError: (err, next) => {
            next(err);
        }
    })
};