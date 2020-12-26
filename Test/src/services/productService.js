function getAllProduct(pool){
    const reponse = pool.query('SELECT * FROM product',function(error,results){
        console.log('Cannot find data');
    });
    return reponse;
}

function createProduct(req,pool){
    const {productName,quantity,unit} = req.body;
    pool.query('INSERT INTO product (name, quantity, unit) VALUES ($1,$2,$3)',[productName,quantity,unit],
    function(error,results){
        console.log('Cannot create data');
    });
}

module.exports = {
    getAllProduct,
    createProduct
}