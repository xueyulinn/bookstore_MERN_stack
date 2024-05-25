import express from "express";
import mongoose from "mongoose";
import { MongoURL, PORT } from "./config.js";
import booksRouter from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

app.use(express.json());

// mount it before any routing
app.use(cors());

app.use('/books', booksRouter);


mongoose.connect(MongoURL).then(() => {
    app.listen(PORT, () => {
        console.log(`App is Listening to ${PORT}`)
    })
}
).catch((error) => {
    console.log(error)
});

app.get("/", (req, res) => {
    console.log(req);

    return res.status(200).send("Hello Express")
})
