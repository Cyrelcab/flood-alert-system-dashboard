import express from "express";
import { sendSMS } from "./sendSMS.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS to allow requests from your dashboard
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// API endpoint to send SMS
app.post("/send-sms", async (req, res) => {
  const { body } = req.body;

  try {
    const result = await sendSMS(body);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    console.error("Error in /send-sms endpoint:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
