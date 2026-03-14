export default async function summarize(text) {
  if (!text) return "";

  const sentences = text.split(".");
  return sentences.slice(0, 2).join(".") + ".";
}
