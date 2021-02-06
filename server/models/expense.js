const mongoose = require('mongoose');

const Model = mongoose.model;
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    id: { type: String, default: ""},
    description: { type: String, default: ""},
    amount: { type: Schema.Types.Decimal128, default: 0.0}
});

module.exports = Model('Expense', expenseSchema);