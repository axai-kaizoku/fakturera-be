import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

const customCreatedAt = (name) => timestamp(name).default(sql`CURRENT_TIMESTAMP`);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  email: varchar("email", { length: 256 }),
  password: varchar("password"),
});

export const translations = pgTable("translations", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 256 }).notNull(),
  language: varchar("language", { length: 10 }).notNull(),
  value: text("value").notNull(),
  page: varchar("page", { length: 50 }).notNull(),
  createdAt: customCreatedAt("created_at"),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  articleNo: varchar("article_no", { length: 100 }),
  productService: text("product_service").notNull(),
  inPrice: varchar("in_price", { length: 10 }),
  price: varchar("price", { length: 10 }),
  unit: varchar("unit", { length: 50 }),
  inStock: varchar("in_stock", { length: 10 }),
  description: text("description"),
  createdAt: customCreatedAt("created_at"),
});
