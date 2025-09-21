import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json()); // this middleware will parse the JSON bodies: req.body
app.use(rateLimiter);


// Example middleware (only console.log the message)
// app.use((req, res, next) => {
//   console.log(`request method: ${req.method}, request url is: ${req.url}`);
//   next() // without this the request won't happen
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server started on PORT:", PORT);
  });
});
