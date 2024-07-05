import dotenv from "dotenv"
import express from "express"
import articlesRouter from "./routes/articles.js"
import breakingEventsRouter from "./routes/breakingEvents.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use("/api/articles", articlesRouter)
app.use("/api/breaking-events", breakingEventsRouter)

app.listen(PORT, () => {
    console.clear()
    console.log(`Server running on port ${PORT}`)
})