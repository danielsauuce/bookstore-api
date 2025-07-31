import Book from '../models/book.mjs'


const getAllBooks = async (req, res) => {
};

const getSingleBookById = async (req, res) => {};

const addNewBook = async (req, res) => {
    try {
        const newBookinput = req.body;
        const newlycreatedBook = await Book.create(newBookinput);

        if (newBookinput) {
            res.status(201).json({
                success: true,
                message: "Book added Successfully",
                data: newlycreatedBook
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        })
        
    }
};

const updateBook = async (req, res) => {};

const deleteBook = async (req, res) => {};


const bookController = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook};

export default bookController;
