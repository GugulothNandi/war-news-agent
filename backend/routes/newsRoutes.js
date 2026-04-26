import express from "express";
import { News } from "../models/News.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }).limit(1110); // ✅ increased from 20 → 50

    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
