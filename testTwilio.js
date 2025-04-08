import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

client.messages
  .create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.TO_PHONE_NUMBER,
    body: "Test SMS from Twilio",
  })
  .then((message) => console.log("SMS sent:", message.sid))
  .catch((error) => console.error("Error sending SMS:", error));