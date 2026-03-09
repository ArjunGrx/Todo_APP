const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.URI);

    } catch (error) {
        console.error("Database connection Failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;