const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    nama_barang: { type: String, required: true },
    jumlah: { type: Number, required: true },
    harga: { type: Number, required: true }
});

module.exports = mongoose.model("Stock", StockSchema);
