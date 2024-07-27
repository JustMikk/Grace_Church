import express from "express";
import { asyncHandler } from "../common/async-handler.js";
import {
  createMember,
  deleteMember,
  getManyMembers,
  getOneMember,
  updateMember,
} from "./members.service.js";

import { validationPipe } from "../common/validation.pipe.js";
import { createMemberSchema } from "./members.schema.js";
import e from "cors";

const membersController = express.Router();

membersController.get(
  "/",
  asyncHandler(async (req, res) => {
    const members = await getManyMembers();
    return res.json(members);
  })
);

membersController.post(
  "/",
  validationPipe(createMemberSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const member = await createMember(data);
    return res.json(member);
  })
);

membersController.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const member = await getOneMember(id);
    return res.json(member);
  })
);

membersController.put(
  "/:id",
  validationPipe(createMemberSchema),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const member = await updateMember(id, data);
    return res.json(member);
  })
);

membersController.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const memberId = parseInt(id, 10);
    const member = await deleteMember(memberId);
    return res.json(member);
  })
);

export default membersController;
