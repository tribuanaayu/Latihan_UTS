const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    pengguna_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },
    rating: {
        type: String,
    },
     komentar: {
        type: String,
    },
    tanggal_ulasan: {
        type: Date,
    }
});

//untuk membuat model
const Ulasan = mongoose.model('Ulasan', ulasanchema);
//harus di export agar bisa digunakan di controller
module.exports = Ulasan;