// controllers/media.controllers.js
const imagekit = require('../libs/imagekit');

module.exports = {
    strogeImage: (req, res) => {
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                image_url: imageUrl
            }
        });
    },

    // controllers/media.controllers.js
    storageVideo: (req, res) => {
        const videoUrl = `${req.protocol}://${req.get('host')}/videos/${req.file.filename}`;

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                video_url: videoUrl
            }
        });
    },

    // controllers/media.controllers.js
    storageFile: (req, res) => {
        const fileUrl = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`;

        return res.status(200).json({
            status: true,
            message: 'success',
            data: {
                file_url: fileUrl
            }
        });
    },

    imagekitUpload: async (req, res) => {
        try {
            const stringFile = req.file.buffer.toString('base64');

            const uploadFile = await imagekit.upload({
                fileName: req.file.originalname,
                file: stringFile
            });

            return res.json({
                status: true,
                message: 'success',
                data: {
                    name: uploadFile.name,
                    url: uploadFile.url,
                    type: uploadFile.fileType
                }
            });
        } catch (err) {
            throw err;
        }
    }
};
