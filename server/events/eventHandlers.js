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

const createExpenseEvent = makeExpenseEvent(eventTypes.createExpense);
const updateDescriptionEvent = makeExpenseEvent(eventTypes.updateDescription);
const updateAmountEvent = makeExpenseEvent(eventTypes.updateAmount);

module.exports = { 
    createExpenseEvent,
    updateDescriptionEvent,
    updateAmountEvent
};
