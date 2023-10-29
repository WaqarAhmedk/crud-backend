const express = require('express');
const productController = require('../controllers/productController');
const { query, validationResult, body } = require('express-validator')

const router = express.Router();
const productValidation = [
    body('pName').notEmpty().withMessage('Product Name cannot be empty '),
    body('pPrice').notEmpty().withMessage('Product Price cannot be empty '),
    body('pQuantity').notEmpty().withMessage('Product Quantity cannot be empty '),

]

router.post('/create', productValidation, (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    productController.createProduct(req, res)
});
router.put('/update/:id', productValidation, (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    productController.updateProduct(req, res)
});
router.get('/get', productController.getProducts)
router.delete('/delete/:id', productController.deleteProduct)

module.exports = router;