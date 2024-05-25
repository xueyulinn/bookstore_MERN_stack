import express from "express";
import {Book} from "../models/bookModel.js"

const router  = express.Router();


// add books
router.post('/', async (req, res) => {
    try {
        // pre-check
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            console.log("Must send title, author and publishYear")
        }

        // create document
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const createdBook = await Book.create(newBook)

        res.status(200).send(createdBook)

    } catch (error) {
        console.log(error)
    }
})

// find all documents
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})

        res.status(200).send({
            'count': books.length,
            'data': books
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }

})

// find by Id
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            res.status(200).json({ message: "Book Not Found" })
        } else {
            res.status(200).send(book)

        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// edit books
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body)

        if (!book) {
            res.status(404).send({ error: 'book not found' })
        } else {
            res.status(200).send(book)
        }

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// delete books
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            res.status(404).json({ message: "Book Not Found" })
        } else {
            res.status(200).send({ message: "Delete Successfully!" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})




export default router;