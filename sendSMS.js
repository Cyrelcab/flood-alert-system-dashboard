import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export const sendSMS = async (body) => {
  let msgOption = {
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.TO_PHONE_NUMBER,
    body,
  };
  try {
    const message = await client.messages.create(msgOption);
    console.log("SMS sent:", message.sid);
    return { success: true, message: "SMS sent successfully" };
  } catch (error) {
    console.error("Error sending SMS:", error);
    return { success: false, error: "Failed to send SMS" };
  }
};
