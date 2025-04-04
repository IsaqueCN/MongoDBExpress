const mongoose = require("mongoose");

const option = {
    serverApi: { version: '1', strict: true, deprecationErrors: true }
}

async function connect() {
    await mongoose.connect(process.env.MONGOURL, option)
    console.log("Connected to MongoDB Successfully\n")
}

module.exports = {connect};
