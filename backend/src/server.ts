import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import shirtsRouter from "./routes/shirts.js";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";

import { testConnection } from "./db/testConnection.js";

dotenv.config();

const app = express();
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,

  message: {
    error:
      "Слишком много попыток, попробуйте позже"
  }
});
app.use(
  cors({
    origin: process.env.FRONTEND_URL
  })
);

app.use(express.json());

app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);

app.get("/health", (_, res) => {

  res.json({
    ok: true,
    service: "codtexa-backend",
  });

});

app.use(
  "/api/auth/login",
  authLimiter
);

app.use(
  "/api/auth/register",
  authLimiter
);

app.use(
  "/admin/login",
  authLimiter
);

app.use("/api/auth", authRouter);
app.use("/api/shirts", shirtsRouter);
app.use("/admin", adminRouter);

const port =
  Number(
    process.env.PORT || 4001
  );

app.listen(
  port,
  async () => {

    console.log(
      `Backend started on ${port}`
    );

    await testConnection();

  }
);
