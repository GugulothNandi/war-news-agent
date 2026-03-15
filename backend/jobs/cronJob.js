import cron from "node-cron";
import { fetchNews } from "../services/newsFetcher.js";
import summarize from "../services/summarizer.js";
import sendAlert from "../services/telegramService.js";
import { News } from "../models/News.js";

async function runJob() {
  console.log("Fetching war news...");
  const articles = await fetchNews();

  for (let article of articles) {
    const summary = await summarize(article.title);

    const news = await News.create({
      title: article.title,
      summary,
      source: article.link,
    });

    await sendAlert(`⚠ War News\n${news.title}\n\n${summary}`);
  }
}

export default function startCron() {
  console.log("Cron job started...");
  cron.schedule("* * * * *", runJob);
}
