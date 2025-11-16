import express from "express";
import { login, signup, verifyToken } from "../../controllers/auth.controller.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/verify", authenticateToken, verifyToken);

export default router;
