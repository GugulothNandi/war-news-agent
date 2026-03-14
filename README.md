# 🌍 War News Agent

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A full-stack web application that fetches real-time war-related news, summarizes them, stores in MongoDB, and sends Telegram alerts. The frontend displays the latest news in a dashboard built with React.js.

---

## 🚀 Features

- Fetches latest war news from Google News RSS feed
- Summarizes news automatically
- Sends Telegram alerts for new news
- Full-stack dashboard to display news articles
- Cron job automation (every hour or configurable)

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **News fetching & summarization:** rss-parser, custom summarizer
- **Notifications:** Telegram Bot via Telegraf

---

## 📂 Project Structure
war-news-agent/
│
├─ backend/
│ ├─ config/db.js
│ ├─ controllers/newsController.js
│ ├─ jobs/cronJob.js
│ ├─ models/News.js
│ ├─ routes/newsRoutes.js
│ ├─ services/newsFetcher.js
│ ├─ services/summarizer.js
│ ├─ services/telegramService.js
│ ├─ server.js
│ └─ package.json
│
├─ frontend/
│ ├─ src/
│ │ ├─ components/NewsCard.jsx
│ │ ├─ pages/Home.jsx
│ │ ├─ services/api.js
│ │ ├─ App.jsx
│ │ ├─ main.jsx
│ │ └─ index.css
│ ├─ public/
│ ├─ package.json
│ └─ vite.config.js
│
├─ .gitignore
├─ README.md
└─ .env.example


---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/GugulothNandi/war-news-agent.git
cd war-news-agent

cd backend
npm install

creat a .env file
MONGO_URI=your_mongodb_connection
TELEGRAM_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

cd ../frontend
npm install
npm run dev

cd backend
node server.js

cd frontend
npm run dev


This is fully ready to push to GitHub.  

If you want, I can **also write a `.env.example` file and full `.gitignore`** ready for GitHub so you don’t accidentally push secrets.  

Do you want me to do that next?
