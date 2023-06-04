import express, { Request, Response, Router } from "express";

import * as getNegService from "../services/negCount.service.js";

const negCountRouter: Router = express.Router();

// Router using query params as start and end date
export default negCountRouter.get("/", async (request: Request, response: Response) => {
  if (typeof request.query.startDate !== "string" || typeof request.query.endDate !== "string") {
    return response.status(500).json();
  }

  try {
    const startDate: string = request.query.startDate;
    const endDate: string = request.query.endDate;

    // Call prisma query
    const news = await getNegService.getNegCount(startDate, endDate);

    return response.status(200).json(news);
  } catch (error) {
    return response.status(500).json();
  }
});
