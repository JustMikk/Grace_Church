import express from "express";
import { asyncHandler } from "../common/async-handler.js";
import {
  createAnnouncement,
  deleteAnnouncement,
  getManyAnnouncements,
  getOneAnnouncement,
  updateAnnouncement,
} from "./announcements.service.js";
import { validationPipe } from "../common/validation.pipe.js";
import { createAnnouncementSchema } from "./announcements.schema.js";
import e from "cors";

const announcementsController = express.Router();

announcementsController.get(
  "/",
  asyncHandler(async (req, res) => {
    const announcements = await getManyAnnouncements();
    return res.json(announcements);
  })
);

announcementsController.post(
  "/",
  validationPipe(createAnnouncementSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const announcement = await createAnnouncement(data);
    return res.json(announcement);
  })
);

announcementsController.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const announcement = await getOneAnnouncement(id);
    return res.json(announcement);
  })
);

announcementsController.put(
  "/:id",
  validationPipe(createAnnouncementSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const announcement = await updateAnnouncement(id, data);
    return res.json(announcement);
  })
);

announcementsController.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const announcement = await deleteAnnouncement(id);
    return res.json(announcement);
  })
);

export default announcementsController;
