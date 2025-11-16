import express from "express";
import { getTranslations } from "../../controllers/translation.controller.js";

const router = express.Router();

router.get("/", getTranslations);

export default router;
