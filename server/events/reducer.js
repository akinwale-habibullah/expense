const eventTypes = require('./eventTypes');
const Expense = require('../models/expense');

const reduce = async expenseEvent => {
    console.log(`Trying to apply ${expenseEvent.type} - ${expenseEvent.data}`);
    console.log("expense event: ", expenseEvent);
    console.log("--------------------------");

    if (expenseEvent.type === eventTypes.createExpense) {
        // create new expense document
        const expense = new Expense({ expenseId: expenseEvent.expenseId });

        // save expense event and expense document
        await expenseEvent.save();
        const savedExpense = await expense.save();

        console.log(`Applied ${expenseEvent.type} successfully`);
        console.log("--------------------------");

        return savedExpense;
    }
};

module.exports = async events => {
    let expense;

    for (const event of events) {
        expense = await reduce(event);
    }

    return expense;
}