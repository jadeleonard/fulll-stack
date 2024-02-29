import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv"; // Correct import method for dotenv
import cors from "cors"; // Import cors middleware

// Load environment variables from .env file
config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const port = 3001;
const app = express();

// Use cors middleware
app.use(cors());

// Define router
const router = express.Router();

// Define route handler for the root path
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Use router middleware
app.use('/', router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
