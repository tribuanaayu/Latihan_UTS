const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    pengguna_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,
    },
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    jumlah: {
        type: Number,
    },
    status:  {
        type: String,
    },
    tanggal_pesanan: {
        type: Date,
    }
});

//untuk membuat model
const Pesanan = mongoose.model('Pesanan', pesananSchema);
//harus di export agar bisa digunakan di controller
module.exports = Pesanan;