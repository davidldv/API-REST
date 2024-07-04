import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

const API_KEY = process.env.API_KEY

export const BASE_URL = "https://api.themoviedb.org/3"

export const TMDB_API = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY
    }
})