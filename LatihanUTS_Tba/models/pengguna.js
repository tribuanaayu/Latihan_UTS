const mongoose = require("mongoose");

const penggunaSchema = new mongoose.Schema({
    nama: {
        type: String,
    },
    email:{
        type: String,
    },
    password: {
        type: String,
    },
    alamat: {
        type: String,
    },
    tanggal_daftar: {
        type: Date,
    }
});

//untuk membuat model
const Pengguna = mongoose.model('Pengguna', penggunaSchema);
//harus di export agar bisa digunakan di controller
module.exports = Pengguna;