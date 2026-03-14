import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Define the async function inside useEffect
    const loadNews = async () => {
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 War News Dashboard
      </h1>

      {news.length === 0 ? (
        <p className="text-center text-gray-500">No news available</p>
      ) : (
        news.map((item, index) => <NewsCard key={index} news={item} />)
      )}
    </div>
  );
}

export default Home;
