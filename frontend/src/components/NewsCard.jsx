import { formatDistanceToNow } from "date-fns";

function NewsCard({ news }) {
  // ⏱ Time ago (e.g., "5 minutes ago")
  const timeAgo = formatDistanceToNow(new Date(news.createdAt), {
    addSuffix: true,
  });

  // 📅 Exact time (optional)
  const exactTime = new Date(news.createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      {/* 📰 Title */}
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

      {/* 📄 Summary */}
      <p className="text-gray-700 mb-3">{news.summary}</p>

      {/* ⏱ Time */}
      <p className="text-sm text-gray-500 mb-2">
        🕒 {timeAgo} ({exactTime})
      </p>

      {/* 🔗 Source link */}
      <a
        href={news.source}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        Read full article →
      </a>
    </div>
  );
}

export default NewsCard;
