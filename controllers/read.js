const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/monseu");

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const produk = require("../models/Stock");

async function readData() {
    try {
        // Cari satu produk berdasarkan nama_barang
        const findOneQuery = await produk.findOne({ nama_barang: "Indomie Ayam Bawang" });
        console.log("Hasil findOne nama_barang: Indomie Ayam Bawang", findOneQuery ? JSON.stringify(findOneQuery) : "No result found");

        // Cari semua produk dengan nama_barang tertentu (pakai array hasil)
        const findQuery = await produk.find({ nama_barang: "Indomie Ayam Bawang" });
        console.log("Hasil find nama_barang: Indomie Ayam Bawang:", findQuery.length ? JSON.stringify(findQuery) : "No results found");

        // Cari semua produk dengan jumlah stok lebih dari 10000
        const whereQuery = await produk.where('jumlah').gt(10000);
        console.log("Hasil where jumlah > 10000:", whereQuery.length ? JSON.stringify(whereQuery) : "No matching products");

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Memanggil fungsi untuk membaca data
readData();