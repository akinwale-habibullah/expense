const mongoose = require('mongoose');

const Model = mongoose.model;
const Schema = mongoose.Schema;

const expenseEventSchema = new Schema(
    {
        expenseId: { type: String, default: ""},
        type: { type: String, default: ""},
        timestamp: { type: Date, default: Date.now },
        data: { type: Schema.Types.Mixed, default: {} },
    }, 
    { retainKeyOrder: true, minimize: false }
);

module.exports = Model('ExpenseEvent', expenseEventSchema);