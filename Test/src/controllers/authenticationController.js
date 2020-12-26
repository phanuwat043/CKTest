const jwt = require('jsonwebtoken');

const authentication = (req,res) => {
    const username = req.body.username
    const user = {name: username}

    const accessToken = generateToken(user);
    res.status(200).json({accessToken: accessToken});
}

function generateToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '60s'});
}

module.exports = {
    authentication,
    generateToken
}