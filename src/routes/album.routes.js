const express = require('express');
const router = express.Router();
const album = require('../controllers/album.controller');

router.get('/', album.getAlbums);
router.post('/', album.createAlbum);
router.get('/:id', album.getAlbum);
/*router.put('/:id', album.editalbum);
router.delete('/:id', album.deletealbum); */

module.exports = router;