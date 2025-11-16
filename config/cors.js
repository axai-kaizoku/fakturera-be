import "dotenv/config";

const allowedOrigins = process.env.FRONTEND_URL;
// const allowedOrigins = "*";

export const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};
