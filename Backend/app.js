import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import router from "./routes/index.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/api', router);


import db from './config/db.js';
db();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
