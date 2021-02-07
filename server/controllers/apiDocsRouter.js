const express = require('express');
const redoc = require('redoc-express');

const router = express.Router();


router.get('/swaggerjson', (req, res) => {
    res.sendFile('swagger.json', { root: './server' });
});

router.get("/", redoc({
    title: 'API Docs',
    specUrl: 'swaggerjson'
}));

module.exports = router;
