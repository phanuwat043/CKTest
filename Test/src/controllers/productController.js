const {Pool} = require('pg');
const {getAllProduct,createProduct} = require('../services/productService')

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'admin212224',
    database:'test',
    port:'5432'
})

const getProduct = async (req,res) => {
    const reponse = await getAllProduct(pool);
    res.status(200).json(reponse.rows)
}

const createProducts = async (req,res) => {
    await createProduct(req,pool);
    res.status(200).send('created product!')
}

module.exports = {
    getProduct,
    createProducts
}