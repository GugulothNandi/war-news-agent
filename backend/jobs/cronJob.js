import cron from "node-cron";
import { fetchNews } from "../services/newsFetcher.js";
import sendAlert from "../services/telegramService.js";

async function runJob() {
  try {
    console.log("Fetching war news...");
    const articles = await fetchNews();

    console.log("Articles fetched:", articles.length);

    // ✅ take only 3 articles for testing
    const limitedArticles = articles.slice(0, 3);

    let message = "⚠ War News Updates:\n\n";

    for (let article of limitedArticles) {
      message += `• ${article.title}\n\n`;
    }

    console.log("Sending message...");

    // ✅ ALWAYS send (for testing)
    await sendAlert(message);
  } catch (err) {
    console.error("CRON ERROR:", err);
  }
}

export default function startCron() {
  console.log("Cron job started...");
  cron.schedule("* * * * *", runJob); // every minute
}
