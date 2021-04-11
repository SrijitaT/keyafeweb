var express = require('express');
const multer = require('multer');
const path = require("path");
const models = require("../../models");
const { imageFilter } = require("../../helpers/imageHelper");
var router = express.Router();

function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/../../public/uploads/images'));
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, extension) + '_' + Date.now() + extension)
  }
});

/* GET home page. */
router.get('/products', function (req, res, next) {
  if(req.query.category_id){
  models.Product.findAll({ where: { category_id: parseInt(req.query.category_id)} }).then(prod => res.send(prod))
  }else{
    models.Product.findAll().then(prod=>res.send(prod))
  }
});

router.post('/uploadCatalog', (req, res) => {
  let upload = multer({ storage, fileFilter: imageFilter }).single('file');
  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any
    let { name, price, category_id } = req.body;
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
    models.Product.create({ name, img_url: fileUploaded, price, category_id }, { fields: ['name', 'img_url', 'price', 'category_id'] })
    .then(prod => {
      res.send({ name, img_url: fileUploaded, price, category_id })
    }).catch(err => res.status(500).send({error:err.message}))
  });
});

module.exports = router;
