import express from 'express';

import bookControllers from '../controllers/books.js';

const router = express.Router();

router.get('/', bookControllers.getBooks);
router.get('/:id', bookControllers.getBook);
router.post('/', bookControllers.addBook);
router.put('/:id', bookControllers.updateBook);
router.delete('/:id', bookControllers.deleteBook);

export default router;
