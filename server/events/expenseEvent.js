const mongoose = require('mongoose');

const Model = mongoose.model;
const Schema = mongoose.Schema;

const expenseEventSchema = new Schema({
    type: { type: String, default: ""},
    expenseId: { type: String, default: ""},
    timestamp: { type: Date, default: Date.now },
    data: { type: Schema.Types.Mixed, default: {}}
});

module.exports = Model('ExpenseEvent', expenseEventSchema);