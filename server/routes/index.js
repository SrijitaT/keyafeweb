var express = require('express');
const multer = require('multer');
const path = require("path");
const { imageFilter } = require("../helpers/imageHelper");
var router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/../public/uploads/images'));
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, extension) + '_' + Date.now() + extension)
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Keyafe Server' });
});
router.post('/upload-product-pic', (req, res) => {
  let upload = multer({ storage: storage, fileFilter: imageFilter }).single('prod_pic');
  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    }
    else if (!req.file) {
      return res.send('Please select an image to upload');
    }
    else if (err instanceof multer.MulterError) {
      return res.send(err);
    }
    else if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    const fileUploaded = req.protocol + "://" + req.hostname + ":5000/uploads/images/" + req.file.filename;
    res.send(`You have uploaded this image: <hr/><img src=${fileUploaded} width="500"><hr /><a href="./">Upload another image</a>`);
  });
});

module.exports = router;
