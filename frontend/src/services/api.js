import axios from "axios";

const BASE_URL = "https://war-news-agent.onrender.com";

export const getNews = async () => {
  const res = await axios.get(`${BASE_URL}/api/news`);
  console.log(res.data);
  return res.data;
};
