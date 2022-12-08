import { config } from "dotenv"; config();
import express from "express";
import { router } from "./routes";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
