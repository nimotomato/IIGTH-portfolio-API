import express from "express";
import cors from "cors";
const app = express();
const port = 3030;
import datesRouter from "./routes/dates.route.js";
import negCountRouter from "./routes/negCount.route.js";
import newsRouter from "./routes/news.route.js";
app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {
    response.send("You have arrived.");
});
app.use("/api/dates", datesRouter);
app.use("/api/news", newsRouter);
app.use("/api/negCount", negCountRouter);
app.listen(port, () => console.log(`app listening on ${port}`));
//# sourceMappingURL=app.js.map