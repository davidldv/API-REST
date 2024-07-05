import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

const API_KEY = process.env.API_KEY

export const BASE_URL = "https://www.newsapi.ai/"

export const NEWS_API = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY
    }
})