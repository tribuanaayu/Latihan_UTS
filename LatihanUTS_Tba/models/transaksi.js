const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
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
    jumlah: {
        type: Number,
    },
    total_harga: {
        type: Number,
    },
    tanggal_transaksi: {
        type: Date,
    }
});

//untuk membuat model
const Transaksi = mongoose.model('Transaksi', transaksiSchema);
//harus di export agar bisa digunakan di controller
module.exports = Transaksi;