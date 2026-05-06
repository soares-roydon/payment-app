import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
