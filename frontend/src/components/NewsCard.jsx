function NewsCard({ news }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

      <p className="text-gray-700 mb-3">{news.summary}</p>

      <a
        href={news.source}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        Read full article
      </a>
    </div>
  );
}

export default NewsCard;
