const express = require("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");

//fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/produk", produkController.Index);
router.post('/produk/insert', produkController.insert);
module.exports = router;