const { MongoClient } = require("mongodb");

const dbURL = "mongodb://localhost:27017/monseu";
const dbName = "inventory";

async function insertData() {
    try {
        const client = await MongoClient.connect(dbURL);
        const db = client.db(dbName);

        // Insert data to the "inventory" collection
        const newData= await db.collection("inventory")
            .insertOne({
                name: "Indomie Ayam Bawang",
                description: "Mie instan dengan rasa ayam bawang.",
                price: 4000,
                stock: 12345,
                isavailable: true
            }, (error, db) => {
                if (error) throw error;
                console.log(db)
            })

            console.log("Data inserted succesfully: ", newData)

        // Mneutup connection setelah operasi
        await client.close();
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

// Memanggil fungsi insert data
insertData();