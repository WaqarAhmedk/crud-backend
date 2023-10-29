const productModel = require("../models/createModel");

exports.createProduct = async (req, res) => {

    try {
        const { pName, pPrice, pQuantity } = req.body;

        await productModel.create({ pName, pPrice, pQuantity });


        res.status(200);
        res.json({
            message: 'New Product Created Successfully'
        })
        return res
    } catch (error) {
        console.log('Something bad happend', error)
    }
}



exports.getProducts = async (req, res) => {

    try {

        const products = await productModel.find();

        res.status(200);
        res.json({
            products: products,
            message: 'Got Products'
        })
        return res
    } catch (error) {
        console.log('Something bad happend', error)
    }
}
exports.updateProduct = async (req, res) => {

    try {
        const pid = req.params.id;
        const data = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(pid, data, { new: true });
        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(200);
        res.json({
            products: updatedProduct,
            message: ' Product updated succesfully'
        })
        return res
    } catch (error) {
        console.log('Something bad happend', error)
    }
}


exports.deleteProduct = async (req, res) => {

    try {
        const pid = req.params.id;

        const deleted = await productModel.findByIdAndDelete(pid);
        if (!deleted) {
            return res.status(404).send('Product not found');
        }
        res.status(200);
        res.json({

            message: ' Product deleted succesfully'
        })
        return res
    } catch (error) {
        console.log('Something bad happend', error)
    }
}