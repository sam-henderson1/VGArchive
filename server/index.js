import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

dotenv.config();
const API_KEY = process.env.API_KEY;
const baseURL = "https://api.rawg.io/api/games";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/games", async (req, res) => {
  const { category, page = 1, search } = req.query;

  let ordering;
  switch (category) {
    case "popular":
      ordering = "-metacritic";
      break;
    case "recent":
      ordering = "-released";
      break;
    default:
      ordering = "-metacritic";
  }

  try {
    const response = await axios.get(baseURL, {
      params: {
        key: API_KEY,
        ordering,
        page,
        page_size: 20,
        search,
      },
    });

    res.json(response.data.results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
