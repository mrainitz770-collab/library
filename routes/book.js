const express = require('express');
const bookController = require('../controllers/book');
const router = express.Router();






router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.add);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.remove);

module.exports = router;