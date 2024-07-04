import express from "express"
import { TMDB_API } from "../config.js"

const trendingRouter = express.Router()

trendingRouter.get("/:type", async (req, res) => {
    const { type } = req.params;
    const time_window = req.query.time_window || "day"
    const { language } = req.query;
  
    // Validar el tipo de contenido y la ventana de tiempo
    const validTypes = ["movie", "tv", "person"]
    const validTimeWindows = ["day", "week"]

    if (!validTypes.includes(type)) {
      return res.status(400).send({ error: "Invalid type" })
    }

    if (!validTimeWindows.includes(time_window)) {
      return res.status(400).send({ error: "Invalid time window" })
    }

    try {
      const response = await TMDB_API.get(`/trending/${type}/${time_window}`, {
        params: {
          language: language
        }
      })
  
      return res.send(response.data.results)
    } catch (error) {
      return res.status(500).send({ error: error.message })
    }
  })
  
  export default trendingRouter