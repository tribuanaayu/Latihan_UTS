const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    transaksi_id:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi',
        required: true,
    },
    etode_pembayaran: {
        type: String,
    },
    jumlah: {
        type: Number,
    },
    tanggal_pembayaran: {
        type: Date,
    },
    status: {
        type: String,
    }
});

//untuk membuat model
const Pembayaran = mongoose.model('Pembayaran', pembayaranSchema);
//harus di export agar bisa digunakan di controller
module.exports = Pembayaran;