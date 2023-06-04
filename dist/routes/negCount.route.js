import express from "express";
import * as getNegService from "../services/negCount.service.js";
const negCountRouter = express.Router();
// Router using query params as start and end date
export default negCountRouter.get("/", async (request, response) => {
    if (typeof request.query.startDate !== "string" || typeof request.query.endDate !== "string") {
        return response.status(500).json();
    }
    try {
        const startDate = request.query.startDate;
        const endDate = request.query.endDate;
        // Call prisma query
        const news = await getNegService.getNegCount(startDate, endDate);
        return response.status(200).json(news);
    }
    catch (error) {
        return response.status(500).json();
    }
});
//# sourceMappingURL=negCount.route.js.map