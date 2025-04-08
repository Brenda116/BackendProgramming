const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    nama_barang: { type: String, required: true },
    deskripsi: { type: String, required: true },
    jumlah: { type: Number, required: true },
    harga: { type: Number, required: true },
    ketersediaan: { type: Boolean, required: true }
});

module.exports = mongoose.model("Stock", StockSchema);
