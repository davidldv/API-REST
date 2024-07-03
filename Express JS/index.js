import dotenv from "dotenv"
import express from "express"
import accountRouter from "./routes/account.js"

console.clear()

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.text())
app.use("/account",accountRouter)

app.get("/raiz", (req, res) => {
    res.send("test")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

