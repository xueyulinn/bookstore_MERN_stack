import express, { request, response } from "express"
import { PORT, MongoURL } from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js"


const app = express();

app.use(express.json())

// add books
app.post("/books", async (request, response) => {
    try {
        // pre-check
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            console.log("Must send title, author and publishYear")
        }

        // create document
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }

        const createdBook = await Book.create(newBook)

        response.status(200).send(createdBook)

    } catch (error) {
        console.log(error)
    }
})


app.get("/", (request, response) => {
    console.log(request);

    return response.status(200).send("Hello Express")
})

mongoose.connect(MongoURL).then(() => {
    app.listen(PORT, () => {
        console.log(`App is Listening to ${PORT}`)
    })
}
).catch((error) => {
    console.log(error)
}
)