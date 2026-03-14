import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

export default async function sendAlert(message) {
  try {
    await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
    console.log("Telegram alert sent");
  } catch (err) {
    console.error("Error sending Telegram message:", err);
  }
}
