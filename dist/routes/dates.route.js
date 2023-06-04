import express from "express";
import * as datesService from "../services/dates.service.js";
const newsRouter = express.Router();
// Get start and end dates in database
export default newsRouter.get("/", async (request, response) => {
    try {
        const dateRange = await datesService.getDates();
        return response.status(200).json(dateRange);
    }
    catch (error) {
        return response.status(500).json();
    }
});
//# sourceMappingURL=dates.route.js.map