const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.postBatches);
router.get('/', controller.getBatches);
router.get('/:id', controller.getBatchesSingle);
router.delete('/:id', controller.deleteBatchesSingle);

module.exports = router;
