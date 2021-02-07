const express = require('express');
const bodyParser = require('body-parser');

const expenseRouter = require('./controllers/expenseRoutes');
const apiDocsRouter = require('./controllers/apiDocsRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Expese tracker app.");
});
app.use('/api-docs', apiDocsRouter);
app.use('/api/v1/expense', expenseRouter);

module.exports = app;
