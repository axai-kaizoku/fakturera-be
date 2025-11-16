import express from "express";
import authRoute from "./auth.route.js";
import pricelistRoute from "./pricelist.route.js";
import translationRoute from "./translation.route.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/pricelist",
    route: pricelistRoute,
  },
  {
    path: "/translation",
    route: translationRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
