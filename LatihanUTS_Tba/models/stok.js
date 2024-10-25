const mongoose = require("mongoose");

const stokSchema = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    persentase_diskon:  {
        type: Number,
    },
    tanggal_mulai: {
        type: Date,
    },
    tanggal_selesai: {
        type: Date,
    },
    keterangan: {
        type: String,
    }
});

//untuk membuat model
const Stok = mongoose.model('Stok', stokSchema);
//harus di export agar bisa digunakan di controller
module.exports = Stok;