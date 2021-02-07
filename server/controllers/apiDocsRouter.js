const fs = require('fs');
const path = require('path');
const express = require('express');
const redoc = require('redoc-express');
const yaml = require('js-yaml');

const router = express.Router();


router.get('/swaggerjson', (req, res) => {
    const rootPath = path.resolve("./server");
    const filePath = path.resolve("./server", "swagger.yaml");    
    fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            return res.status(404).send();
        }

        swaggerObject = yaml.load(data);

        res.json(swaggerObject);
    });
});

router.get("/", redoc({
    title: 'API Docs',
    specUrl: 'swaggerjson'
}));

module.exports = router;
