const mongoose = require('mongoose');

const Model = mongoose.model;
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
    {
        expenseId: {type: String, default: ""},
        description: { type: String, default: ""},
        amount: { type: Schema.Types.Decimal128, default: 0.0}
    },
    { retainKeyOrder: true, minimize: false }
);

module.exports = Model('Expense', expenseSchema);