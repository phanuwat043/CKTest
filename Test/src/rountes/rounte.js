const {Router} = require('express');
const rounter = Router();
// const rateLimit = require("express-rate-limit");

const {authentication, generateToken} = require('../controllers/authenticationController')
const {getUser} = require('../controllers/userController');
const {getProduct,createProducts} = require('../controllers/productController');

// Routes
/**
 * @swagger
 * /user:
 *  get:
 *    description: Use to request all user
 *    responses:
 *      '200':
 *        description: A successful response
 */
rounter.get('/user',getUser);

/**
 * @swagger
 * /products:
 *  get:
 *    description: get all product
 *    responses:
 *      '200':
 *        description: A successful response
 */
rounter.get('/products',getProduct);

/**
 * @swagger
 * /product:
 *    post:
 *      description: create product
 *    parameters:
 *      - productName: name for product
 *      - quantity: quantity of product
 *      - unit: unit of product
 *        description: createPrpduct
 *        in: body
 *        required: true
 *        type: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */

// const createAccountLimiter = rateLimit({
//     windowMs: 60 * 60 * 1000,
//     max: 2, // บล็อครีเควสหากมากกว่า 2 ครั้ง
//     message:
//       "คุณเพิ่มข้อมูลมากเกินไปในช่วงเวลานี้"
//   });
// rounter.post('/product',createAccountLimiter,createProducts);
rounter.post('/product',createProducts);

/**
 * @swagger
 * /login:
 *    post:
 *      description: login to get bearer token
 *    parameters:
 *      - username: username
 *        description: username
 *        in: body
 *        required: true
 *        type: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
rounter.post('/login',authentication);

module.exports = rounter;