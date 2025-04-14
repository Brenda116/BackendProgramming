const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/uts");

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const produk = require("../models/Stock");

// Function Update
async function updateInventory() {
    try {
        // Melakukan pembaruan data
        await produk.updateOne(
            { nama_barang: "Indomie Ayam Bawang" }, // filter
            { harga: 4500, jumlah: 20000 } // data yang diubah
        );

        // Menampilkan data setelah diperbarui
        const data = await produk.findOne({ nama_barang: "Indomie Ayam Bawang" });
        if (data) {
            console.log("Find One: " + JSON.stringify(data));
        }
    } catch (err) {
        console.log("Error updating inventory:", err);
    }
}

updateInventory(); // Panggil fungsi
