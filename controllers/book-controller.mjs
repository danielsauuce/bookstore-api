import Book from '../models/book.mjs'


const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
  
      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  };
  

const getSingleBookById = async (req, res) => {
    try {
        const inputId = req.params.id
        const getSingleBook = await Book.findById(inputId);

        if(!getSingleBook) {
            return res.status(404).json({
                success: false,
                message: "Invalid id, try again!",
            })
        }

        res.status(200).json({
            success: true,
            message: "Book found",
            data: getSingleBook
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        })
        
    }
};

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
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        })
        
    }
};

const updateBook = async (req, res) => {
    try {
        const getFormData = req.body;
        const inputId = req.params.id;
        
        const updateBook = await Book.findByIdAndUpdate(inputId, getFormData, {new: true});
        
        if(!updateBook) {
            return res.status(404).json({
                success: false,
                message: "Unable to update Book, Invalid id."
            });
        }

        res.status(200).json({
            success: true,
            message: "Book Updated Successfully",
            data: updateBook
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        })
        
    }
};

const deleteBook = async (req, res) => {
    try {
        const inputId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(inputId);

        if(!deleteBook) {
            return res.status(404).json({
                success: false,
                message: "Unable to delete book, input a valid ID."
            })
        }

        res.status(200).json({
            success: true,
            message: "Book deleted Successfully",
            data: deleteBook
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        })
    }
};


const bookController = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook};

export default bookController;
