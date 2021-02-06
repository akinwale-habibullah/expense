const expense = require("../models/expense");
const eventTypes = require("./eventTypes");
const ExpenseEvent = require('./expenseEvent');

const makeExpenseEvent = type => (data = {}) => {
    const { expenseId } = data;
    const tmp = Object.assign({}, data);

    delete tmp.expenseId;


    return new ExpenseEvent({
        type: type,
        expenseId: expenseId,
        data: tmp,
    });
};

const createExpense = makeExpenseEvent(eventTypes.createExpense);

module.exports = { createExpense };
