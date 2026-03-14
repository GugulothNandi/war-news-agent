import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    source: { type: String, required: true },
  },
  { timestamps: true },
);

export const News = mongoose.model("News", newsSchema);
