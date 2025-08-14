const multer = require('multer');


const stroage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
       const uniqueSuffix = Date.now();
       const fileExtension = file.originalname.split('.').pop();
       cb(null,file.fieldname+'-'+uniqueSuffix+'.'+fileExtension);
    }
})


const upload = multer({storage: storage,limits:{
    filesize: 1024 * 1024 * 5, // 5MB
}});

module.exports = upload;