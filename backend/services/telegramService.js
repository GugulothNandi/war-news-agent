import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function sendAlert(message) {
  try {
    console.log("Sending to Telegram...");

    const res = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      },
      {
        timeout: 10000, // 10 sec timeout
      },
    );

    console.log("Telegram SUCCESS:", res.data);
  } catch (err) {
    console.error("Telegram ERROR:", err.message);

    // 🔁 Retry once (important)
    try {
      console.log("Retrying...");
      const retry = await axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
        {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        },
      );

      console.log("Telegram SUCCESS after retry:", retry.data);
    } catch (retryErr) {
      console.error("Retry failed:", retryErr.message);
    }
  }
}
