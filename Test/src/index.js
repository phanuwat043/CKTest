require('dotenv').config()

const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const rateLimit = require("express-rate-limit");

const port = process.env.PORT || 4000;

const swaggerOptions = {
    swaggerDefinition: {
        info:{
            version: "1.0.0",
            title: "Test API",
            description: "Test data for api",
            contact: {
                name: "CK Developer"
              },
            servers: ["http://localhost:4000"]
        }
    },
    apis: ["src/rountes/rounte.js"]
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
  });
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(require('./rountes/rounte'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });