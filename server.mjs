import dotenv from "dotenv"
dotenv.config();

import express from "express"

const app = express();
const PORT = process.env.PORT

//connect to database