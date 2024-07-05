import express from "express"
import { NEWS_API } from "../config.js"

const breakingEventsRouter = express.Router()

breakingEventsRouter.get("/", async (req, res) => {
    const language = req.query.language || "en";
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const region = req.query.region;
    const category = req.query.category;

    try {
        const response = await NEWS_API.get("event/getBreakingEvents", {
          params: {
            language: language,
            region: region,
            categoryUri: category,
            breakingEventsPage: page,
            breakingEventsCount: pageSize,
          },
        });
        return res.send(response.data.breakingEvents.results);
    } catch (error) {
        console.log(error);
    }
})

export default breakingEventsRouter