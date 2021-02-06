const express = require('express');
const bodyParser = require('body-parser');
const expenseRouter = require('./controllers/expenseRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Expese tracker app.");
});
app.use('/expense', expenseRouter);

module.exports = app;
