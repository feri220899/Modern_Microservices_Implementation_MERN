import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const port = 8001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import AuthRouter from "./src/routes/AuthRouter.js";

app.use('/auth-service', AuthRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
