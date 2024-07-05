import express from "express"
import { TMDB_API } from "../config.js"

const peopleRouter = express.Router()

peopleRouter.get("/", async (req, res) => {
    const page = req.query.page || 1
    const include_adult = req.query.include_adult || false
    const language = req.query.language || "en-US"
    const query = req.query.query

    try {
      const response = await TMDB_API.get("/search/person", {
        params: {
          query: query,
          language: language,
          page: page,
          include_adult: include_adult,
        },
      });
      return res.send(response.data.results);
    } catch (error) {
      return res.status(404).send();
    }
})

peopleRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { language } = req.query;
  
    try {
      const response = await TMDB_API.get(`/person/${id}`, {
        params: {
          language: language
        }
      })
  
      return res.send(response.data)
    } catch (error) {
      return res.status(404).send({ error: "Person not found" })
    }
  })
  
  export default peopleRouter