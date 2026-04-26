import cron from "node-cron";
import { fetchNews } from "../services/newsFetcher.js";
import summarize from "../services/summarizer.js";
import sendAlert from "../services/telegramService.js";
import { News } from "../models/News.js";

// delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runJob() {
  try {
    console.log("Fetching war news...");

    const articles = await fetchNews();
    console.log("Articles fetched:", articles.length);

    // ✅ ONLY 10 NEWS
    const limitedArticles = articles.slice(0, 10);

    let message = "⚠ War News Updates:\n\n";

    for (let article of limitedArticles) {
      // ✅ avoid duplicates
      const exists = await News.findOne({ title: article.title });
      if (exists) continue;

      const summary = await summarize(article.title);

      await News.create({
        title: article.title,
        summary,
        source: article.link,
      });

      message += `• ${article.title}\n\n`;

      await delay(1000); // avoid API overload
    }

    // ✅ send only one message
    if (message !== "⚠ War News Updates:\n\n") {
      console.log("Sending message...");
      await sendAlert(message);
    } else {
      console.log("No new unique news");
    }
  } catch (err) {
    console.error("CRON ERROR:", err);
  }
}

// ✅ RUN EVERY 20 MINUTES
export default function startCron() {
  console.log("Cron job started...");
  cron.schedule("* * * * *", runJob);
}
