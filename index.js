// import express from 'express';
// import dotenv from 'dotenv';

// dotenv.config();
// const PORT = process.env.PORT || 3005;

// // initial express
// const app = express();

// import bookRoutes from './routes/books.js';

// // parse body
// app.use(express.json());

// // use routes
// app.use('/api/books', bookRoutes);

// // listen
// app.listen(PORT, () => {
//     console.log(`Server is up and running on port : ${PORT}`);
// });

let books = [
    {
        id: '1',
        name: 'Around the world ',
        author: 'Jack H'
    },
    {
        id: '2',
        name: 'crazy Mars ',
        author: 'Sara H'
    },
    {
        id: '3',
        name: 'crazy cat ',
        author: 'Jackie H'
    }
];

books = books.filter((book) => book.id !== '1');

console.log(books);
