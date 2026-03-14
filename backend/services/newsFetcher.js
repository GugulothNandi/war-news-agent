import Parser from "rss-parser";
const parser = new Parser();

export async function fetchNews() {
  const feed = await parser.parseURL(
    "https://news.google.com/rss/search?q=war",
  );

  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
  }));
}
