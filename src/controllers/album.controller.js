const Album = require('../models/album.model');
const albumCtrl = {};

albumCtrl.getAlbums = async (req, res) => {
  const albums = await Album.find();
  res.json(albums);
}

albumCtrl.createAlbum = async (req, res) => {
  const { name } = req.body;
  const newAlbum = new Album({
    name,
    albumImage: req.file.filename
  });
  await newAlbum.save();
  console.log(req.file.path);
  res.json({ status: "Se creo correctamente." });
}

albumCtrl.getAlbum = async (req, res) => {
  const album = await Album.findById(req.params.id);
  console.log(req.file);
  res.json(album);
}

module.exports = albumCtrl;