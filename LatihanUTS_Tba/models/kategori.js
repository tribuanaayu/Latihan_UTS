const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama_kategori: {
        type: String,
    },
    deskripsi:{
        type: String,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
    status: {
        type: Boolean,
    }
});

//untuk membuat model
const Kategori = mongoose.model('Kategori', kategoriSchema);
//harus di export agar bisa digunakan di controller
module.exports = Kategori;