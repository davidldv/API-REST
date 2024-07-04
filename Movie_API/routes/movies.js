import express from "express"
import { TMDB_API } from "../config.js"

const moviesRouter = express.Router()

moviesRouter.get("/", async (req, res) => {
    const page = req.query.page || 1
    const language = req.query.language || "en-US"
    const genres = req.query.genres
    const query = req.query.query
    const region = req.query.region

    const response = await TMDB_API.get("/search/movie", {
        params: {
            page: page,
            language: language,
            query: query,
            region: region
        }
    })

    // Filtrar por genero de id
    if (!genres) return res.send(response.data.results)
    
    const dataFilter = response.data.results.filter((movie) => {
        return movie.genre_ids.includes(parseInt(genres))
    })

    return res.send(dataFilter)
})

moviesRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    const { language } = req.query

    try {
        const response = await TMDB_API.get(`/movie/${id}`, {
            params: {
                language: language
            }
        })

        return res.send(response.data)
    } catch (error) {
        return res.status(404).send({ error: "Movie not found" })
    }
})

export default moviesRouter