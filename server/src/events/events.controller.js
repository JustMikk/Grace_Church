import express from "express";
import { asyncHandler } from "../common/async-handler.js";
import {
  createEvent,
  deleteEvent,
  getManyEvents,
  getOneEvent,
  updateEvent,
} from "./events.service.js";
import { validationPipe } from "../common/validation.pipe.js";
import { createEventSchema } from "./events.schema.js";
import e from "cors";

const eventsController = express.Router();

eventsController.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await getManyEvents();
    return res.json(events);
  })
);

eventsController.post(
  "/",
  validationPipe(createEventSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const event = await createEvent(data);
    return res.json(event);
  })
);

eventsController.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const event = await getOneEvent(id);
    return res.json(event);
  })
);

eventsController.put(
  "/:id",
  validationPipe(createEventSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const event = await updateEvent(id, data);
    return res.json(event);
  })
);

eventsController.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const eventId = parseInt(id, 10);
    const event = await deleteEvent(eventId);
    return res.json(event);
  })
);

export default eventsController;
