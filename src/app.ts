import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port: number = 3030;

import datesRouter from "./routes/dates.route.js";
import negCountRouter from "./routes/negCount.route.js";
import newsRouter from "./routes/news.route.js";


app.use(cors());
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  response.send("You have arrived.");
});

app.use("/api/dates", datesRouter);
app.use("/api/news", newsRouter);
app.use("/api/negCount", negCountRouter);

app.listen(port, () => console.log(`app listening on ${port}`));
