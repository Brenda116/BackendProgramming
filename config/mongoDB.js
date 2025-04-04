const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/monseu"; 
const client = new MongoClient(url);

async function connectMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        await client.close();
    }
}

// Function untuk connect ke MongoDB
connectMongoDB();
