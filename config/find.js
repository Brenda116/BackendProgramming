const { MongoClient } = require("mongodb");

const dbURL = "mongodb://localhost:27017/monseu";
const dbName = "inventory";

// Function untuk mencari data
async function findData() {
    try {
        const client = await MongoClient.connect(dbURL);
        const db = client.db(dbName);

        // Fetch data dari user
        const data = await db.collection("inventory").find().toArray();
        console.log(data); // Menunjukkan data

        // Menutup connection setelah operasi
        await client.close(); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Memanggil function untuk mencari data
findData();
