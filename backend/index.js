import express from "express";
import mongoose from "mongoose";
import { MongoURL, PORT } from "./config.js";
import booksRouter from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.use(cors())

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
