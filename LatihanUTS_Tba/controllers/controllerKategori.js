const Kategori = require("../models/kategori");

const Index = async (req,res) => {
    try{
        const kategori = await Kategori.find();
        res.status(200).json(kategori);
        if(!kategori){
            res.status(404).json({message: "Collection is Empty"});
        }
    } catch (error) {
        res.status(500).json({message: "Error retrieving users", error});
    }
}
//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const kategori = new Kategori({
      nama_kategori: req.body.nama_kategori,
      deskripsi: req.body.deskripsi,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      status: true,
    });
  
    kategori
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports ={ Index, insert };

