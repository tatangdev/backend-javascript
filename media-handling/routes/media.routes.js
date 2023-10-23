// routers/media.routers.js
const router = require('express').Router();
const storage = require('../libs/multer');
const { strogeImage, storageVideo, storageFile, imagekitUpload } = require('../controllers/media.controllers');

router.post('/images', storage.image.single('image'), strogeImage);
router.post('/videos', storage.image.single('video'), storageVideo);
router.post('/files', storage.image.single('file'), storageFile);

const multer = require('multer')();
router.post('/imagekit', multer.single('image'), imagekitUpload);

module.exports = router;