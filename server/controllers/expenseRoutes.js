const uuid = require('node-uuid');
const express = require('express');
const E = require('../events');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Expense - get all");
});

router.get("/:id", (req, res) => {
    res.send("Expense - get one");
});

router.post("/", async (req, res) => {
    const createEvent = E.eventHandlers.createExpense({ expenseId: uuid.v4() });
    const expense = E.reduceEvents([createEvent]);

    res.json(expense);
});

module.exports = router;
