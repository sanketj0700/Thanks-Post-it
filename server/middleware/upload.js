const multer = require('multer');
const path = require('path');
const { GridFsStorage } = require('multer-gridfs-storage');


const storage = new GridFsStorage({
    
    url: process.env.MONGO_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
                const filename = path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'images'
                };
        });
    },
    options: { useUnifiedTopology: true }
});

const upload = multer({storage});

module.exports = { upload };