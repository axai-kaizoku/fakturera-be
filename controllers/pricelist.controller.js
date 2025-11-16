import { asc, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { products } from "../db/schema.js";

export const getAllProducts = async (req, res) => {
  try {
    const result = await db.query.products.findMany({
      orderBy: [asc(products.id)],
    });

    return res.json({ data: result });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Failed to fetch products");
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db
      .update(products)
      .set(req.body)
      .where(eq(products.id, Number(id)))
      .returning();

    return res.json({ data: result });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Failed to update product");
  }
};
