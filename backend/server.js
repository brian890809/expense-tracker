const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const expenseRoutes = express.Router();
const {createExpense} = require('./expense.model');
const {checkbook} = require('./expense.model');
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use('/create', expenseRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/expenses', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

expenseRoutes.route('/history').get(function(req, res) {
    createExpense.find(function (err, expense) {
        if (err) {
            console.log(err);
        } else {
            res.json(expense);
        }
    });
});
expenseRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    createExpense.findById(id, function (err, expense) {
        res.json(expense);
    });
});
expenseRoutes.route('/update/:id').post(function(req, res) {
    createExpense.findById(req.params.id, function (err, expense) {
        if (!expense) {
            res.status(404).send('data not found');
        } else {
            expense.expense_date = req.body.expense_date;
            expense.expense_category = req.body.expense_category;
            expense.expense_item = req.body.expense_item;
            expense.expense_descript = req.body.expense_descript;
            expense.expense_method = req.body.expense_method;
            expense.expense_amount = req.body.expense_amount;
            expense.expense_thirdPartyInvolved = req.body.expense_thirdPartyInvolved;

            expense.save().then(expense => {
                res.json('updated');
            })
            .catch(err => {
                res.status(400).send("update failed");
            });
        }
    });
});

expenseRoutes.route('/create').post(function(req, res) {
    let expense = new createExpense(req.body);
    expense.save()
        .then (expense => {
            res.status(200).json({'expense': 'recorded successfully'});
        })
        .catch (err => {
            res.status(400).send('failed');
        });
});


app.listen(PORT, function() {
    console.log("server is running on port: " + PORT);
});
