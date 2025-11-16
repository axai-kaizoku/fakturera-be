import { eq, or } from "drizzle-orm";
import { db } from "../db/index.js";
import { translations } from "../db/schema.js";

export const getTranslations = async (req, res) => {
  const { lang, page } = req.query;

  try {
    if (!lang) {
      return res.json({ data: {} });
    }
    const pageQuery = page ? eq(translations.page, page) : undefined;

    const result = await db.query.translations.findMany({
      where: or(eq(translations.language, lang), pageQuery),
    });

    let data = {};

    result.forEach((item) => {
      data[item.key] = item.value;
    });

    return res.json({
      data,
    });
  } catch (error) {
    console.error("Error fetching translations:", error);
    res.status(500).send("Failed to fetch translations");
  }
};
