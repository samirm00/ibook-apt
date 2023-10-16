let books = [
    {
        id: '1',
        name: 'JavaScript',
        author: 'Samir'
    },
    {
        id: '2',
        name: 'Java',
        author: 'Shield'
    }
];

const getBookById = (id) => {
    return books.find((book) => book.id === id);
};
const bookControllers = {
    getBooks: (req, res) => {
        res.status(200).json(books);
    },
    getBook: (req, res) => {
        const { id } = req.params;
        const bookExist = getBookById(id);
        if (bookExist) {
            res.status(200).json(bookExist);
        } else {
            res.status(200).json({
                message: `book with id ${id} does not existed `
            });
        }
    },
    addBook: (req, res) => {
        const { name, author } = req.body;
        const newBook = {
            id: String(books.length + 1),
            name: name,
            author: author
        };
        books.push(newBook);
        res.status(201).json(newBook);
    },
    updateBook: (req, res) => {
        const { id } = req.params;
        const { name, author } = req.body;
        console.log(id, name, author);

        const bookExist = getBookById(id);
        if (bookExist) {
            books.forEach((book, index) => {
                if (book.id === id) {
                    const updatedBook = { id: id, name: name, author: author };
                    books[index] = updatedBook;
                    res.status(200).json(updatedBook);
                }
            });
        } else {
            res.status(200).json({
                message: `book with id ${id} does not exist `
            });
        }
    },
    deleteBook: (req, res) => {
        const { id } = req.params;
        const bookExist = getBookById(id);
        if (bookExist) {
            books = books.filter((book) => book.id !== id);
            res.status(200).json({
                message: `book with id : ${id} deleted successfully`
            });
        } else {
            res.status(200).json({
                message: `book with id : ${id} doesn't exist`
            });
        }
    }
};

export default bookControllers;
