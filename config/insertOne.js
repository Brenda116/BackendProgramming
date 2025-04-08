const { MongoClient } = require("mongodb");

const dbURL = "mongodb://localhost:27017/monseu";
const dbName = "inventory";

// Fungsi untuk memasukkan data
async function insertData() {
    try {
        const client = await MongoClient.connect(dbURL);
        const db = client.db(dbName);

        // Memasukkan data ke "inventory" collection 
        const newData= await db.collection("inventory")
            .insertOne({
                nama_barang: "Indomie Ayam Bawang",
                deskripsi: "Mie instan dengan rasa ayam bawang.",
                harga: 4000,
                jumlah: 12345,
                ketersediaan: true
            }, (error, db) => {
                if (error) throw error;
                console.log(db)
            })

            console.log("Data inserted succesfully: ", newData)

        // Menutup connection setelah operasi
        await client.close();
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

// Memanggil fungsi insert data
insertData();
