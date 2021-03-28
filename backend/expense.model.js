const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create expense
const CreateExpense = new Schema ({
    expense_date: {type: Date, required: [true]},
    expense_category: {type: String},
    expense_item: {type: String},
    expense_descript: {type: String},
    expense_method: {type: String},
    expense_amount: {type: Number},
    expense_thirdPartyInvolved: { type: Boolean, default: false}
});
const createExpense = mongoose.model('expense', CreateExpense);

const Checkbook = new Schema ({
    person: {type: String},
    amount: {type: Number}    
});
const checkbook = mongoose.model('checkbook', Checkbook);

module.exports = createExpense;
module.exports = checkbook;
