const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/monseu");

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const produk = require("../models/Stock");

// Function DELETE
async function deleteInventory () {
    try {
        // Menghapus produk
        await produk.deleteOne({ nama_barang: "Indomie Ayam Bawang" });

        // Mencari produk yang dihapus
        const data = await produk.findOne({ nama_barang: "Indomie Ayam Bawang" });
        if (data) {
            console.log("Find One: " + JSON.stringify(data));
        } else {
            console.log("Produk tidak ditemukan."); // Jika produk sudah terhapus
        }
    } catch (err) {
        console.log("Error saat menghapus produk:", err);
    }
};

deleteInventory(); // Memanggil fungsi
