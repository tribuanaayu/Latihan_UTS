const express = require("express");
const router = express.Router();
const kategoriController = require("../controllers/controllerKategori");

//fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/kategori", kategoriController.Index);
router.post('/kategori/insert', kategoriController.insert);
module.exports = router;