const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    nama_supplier: {
        type: String,
    },
    alamat:{
        type: String,
    },
    kontak: {
        type: String,
    },
    email: {
        type: String,
    },
    tanggal_mendaftar: {
        type: Date,
    }
});

//untuk membuat model
const Supplier = mongoose.model('Supplier', supplierSchema);
//harus di export agar bisa digunakan di controller
module.exports = Supplier;