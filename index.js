import express from "express";
import cors from "cors";
import routes from "./routes/v1/index.js";
import { corsOptions } from "./config/cors.js";

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/v1", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
