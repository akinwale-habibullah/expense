const eventTypes = require('./eventTypes');
const Expense = require('../models/expenseModel');

const reduce = async expenseEvent => {
    console.log(`Trying to apply ${expenseEvent.type}`);
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
    } else {
        const expense = await Expense.findOne({expenseId: expenseEvent.expenseId});

        switch (expenseEvent.type) {
            case eventTypes.updateAmount:
                expense.amount = expenseEvent.amount
                break;
            case eventTypes.updateDescription:
                expense.description = expenseEvent.description;
                break
            default:
                console.log(`There is no match for the event type ${expenseEvent.type}`);
                console.log("--------------------------");
                break;
        }

        await expenseEvent.save()
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