import dotenv from "dotenv"
import express from "express"
import moviesRouter from "./routes/movies.js"
import tvRouter from "./routes/tv.js"
import peopleRouter from "./routes/people.js"
import trendingRouter from "./routes/trending.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use("/api/movies", moviesRouter)
app.use("/api/tv", tvRouter)
app.use("/api/people", peopleRouter)
app.use("/api/trending", trendingRouter)

// Documentacion de la API
app.get("/api", (req, res) => {
    res.send(`
        <h1>Movie API Documentation</h1>
        <h2>Endpoints</h2>
        <ul>
            <li><b>GET /api/movies</b> - Obtiene todas las películas, segun los parámetros. Por ejemplo: <b>/api/movies/505</b></li>
            <li><b>GET /api/tv</b> - Obtiene todos los TV shows, segun los parámetros. Por ejemplo: <b>/api/tv/132</b></li>
            <li><b>GET /api/people</b> - Obtiene todas las personas, segun los parámetros. Por ejemplo: <b>/api/people/233</b></li>
            <li><b>GET /api/trending/:type</b> - Obtiene contenido trending para <code>movie</code>, <code>tv</code> o <code>person</code> ademas del query parameter <code>time_window</code> que puede ser <code>day</code> o <code>week</code>, por defecto <code>day</code>. Por ejemplo: <b>/api/trending/movie?time_window=week</b></li>
        </ul>
        `)
})

app.listen(PORT, () => {
    console.clear()
    console.log(`Server running on port ${PORT}`)
})

