import axios from "axios";

const API_URL = "https://war-news-agent.onrender.com/api/news";

export const getNews = async () => {
  const res = await axios.get(API_URL);
  console.log(res.data);
  return res.data;
};
