const mongoose = require("mongoose");
const produk = require("./models/Stock")

mongoose.connect("mongodb://localhost:27017/uts");

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// Function CREATE
async function createInventory() {
    try {
        var produk = new Inventory({
            nama_barang: "Indomie Ayam Bawang",
            deskripsi: "Mie instan dengan rasa ayam bawang.",
            harga: 4000,
            jumlah: 12345,
            ketersediaan: true 
        });

        const result = await produk.save();
        console.log("Berhasil menambahkan barang: ");
        console.log(result);
    } catch (err) {
        console.error("Gagal menambahkan barang:", err);
    }
}

// Memanggil function untuk menambahkan produk
createInventory();
