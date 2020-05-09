const multer = require('multer');
const path = require('path');

const fileFilter = (res, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    const error = 'Solo se admiten imagenes con extensión .jpeg, .jpg y .png';
    cb(error, false);
  }
}
const storage = multer.diskStorage({
  destination: 'src/uploads',
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});

module.exports = multer({
  storage,
  fileFilter
});