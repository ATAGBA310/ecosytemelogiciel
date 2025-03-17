const express = require('express');
const productcontroller= require('../controller/product.controller.js');

const router = express.Router();

router.get('/', () => {
    res.send('This is a test');
});

router.get('/:id',productcontroller.getById);

router.post('/', productcontroller.create);

router.get("/pagination/:page", productcontroller.getPagination);
router.get("/pagination2/:page", productcontroller.getPagination2);

router.put('/:id', () => {});

router.delete('/:id', () => {});

module.exports = router;


