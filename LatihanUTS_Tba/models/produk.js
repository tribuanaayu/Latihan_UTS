const mongoose = require("mongoose");

const produkSchema = new mongoose.Schema({
    nama: {
        type: String,
    },
    deskripsi:{
        type: String,
    },
    harga: {
        type: Number,
    },
    stok: {
        type: Number,
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kategori',
        required: true,
    }
});

//untuk membuat model
const Produk = mongoose.model('Produk', produkSchema);
//harus di export agar bisa digunakan di controller
module.exports = Produk;