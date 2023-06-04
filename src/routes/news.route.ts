import express from "express";

import * as newsService from "../services/news.service.js";

const newsRouter = express.Router();


//Get label and region for selected dates, specified via query string. 
export default newsRouter.get("/", async (request, response) => {
    if (typeof (request.query).startDate !== "string" || typeof request.query.endDate !== "string") {
        return response.status(500).json();
      }

    try {
        const startDate: string = (request.query).startDate;
        const endDate: string = (request.query).endDate;

        const news = await newsService.getSentiments(startDate, endDate)

        return response.status(200).json(news)
    } catch (error) {
        return response.status(500).json()
    }
});