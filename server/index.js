import "dotenv/config";
import cors from "cors";
import express from "express";
import { corsOptions } from "./src/config/cors-options.js";
import { HttpException } from "./src/common/http-exception.js";
import eventsController from "./src/events/events.controller.js";
import announcementsController from "./src/announcements/announcements.controller.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});

app.use("/events", eventsController);
app.use("/announcements", announcementsController);

app.all("*", (req, res) => {
  throw new HttpException(404, "Not Found");
});

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
