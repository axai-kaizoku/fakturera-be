import express from "express";
import { getAllProducts, updateProduct } from "../../controllers/pricelist.controller.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

router.use(authenticateToken);

router.get("/", getAllProducts);
router.put("/:id", updateProduct);

export default router;
