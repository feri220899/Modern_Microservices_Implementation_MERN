import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import GatwayRouter from "./src/routes/GatewayRouter.js";

app.use('/api', GatwayRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
