import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

dotenv.config();
const baseURL = "https://api.rawg.io/api/games";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/games", async (req, res) => {
  const { category, page = 1, search } = req.query;

  //switch case for ordering based on category
  let ordering;
  let dates;
  const today = new Date().toISOString().split('T')[0];

  const pastDate = new Date();
  pastDate.setMonth(pastDate.getMonth() - 1);
  const past = pastDate.toISOString().split('T')[0];

  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 1);
  const future = futureDate.toISOString().split('T')[0];
  
  switch (category) {
    case "HRated":
      ordering = "-metacritic";
      break;
    case "recent":
      ordering = "-released";
      dates = `${past},${today}`;
      break;
    case "upcoming":
      ordering = "-added";
      dates = `${today},${future}`;
      break;
    default:
      ordering = "";
      break;
  }

  try {
    // Fetch games from RAWG API
    const response = await axios.get(baseURL, {
      params: {
        key: process.env.API_KEY,
        ordering,
        page,
        page_size: 21,
        search,
        dates,
      },
    });
    // Return the results to the client
    res.json(response.data.results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
