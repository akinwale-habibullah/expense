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
    const expense = await E.reduceEvents([createEvent]); // helps persist data 

    res.json(createEvent);
});

router.put("/:id", async (req, res) => {
    const expenseId = req.params.id;
    const { description } = req.body;

    // Persist expenseEvent using E.eventHandlers.updateDescription
    // Update expenseModel by calling reduceEvents ( [ createdEvent ])

    res.send(expenseId);
})

module.exports = router;
