const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.postOne);
router.get('/', controller.getList);
router.get('/:id', controller.getOne);
router.put('/:id', controller.putOne);
router.delete('/:id', controller.deleteOne);

module.exports = router;
