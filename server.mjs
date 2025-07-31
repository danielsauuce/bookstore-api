import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./database/db.mjs";
import bookRoutes from "./routes/book-routes.mjs";




const app = express();
const PORT = process.env.PORT;

//CONNECTING TO DATABASE
connectDB();

//MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/api/books',bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
