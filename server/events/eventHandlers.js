const expense = require("../models/expenseModel");
const eventTypes = require("./eventTypes");
const ExpenseEvent = require('./expenseEvent');

const makeExpenseEvent = type => (data = {}) => {
    const { expenseId } = data;
    const tmp = Object.assign({}, data);

    delete tmp.expenseId;

    return new ExpenseEvent({
        type,
        expenseId,
        data: tmp,
    });
};

const createExpense = makeExpenseEvent(eventTypes.createExpense);
const updateDescription = makeExpenseEvent(eventTypes.updateDescription);

module.exports = { 
    createExpense,
    updateDescription
};
