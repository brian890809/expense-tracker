import React, { Component } from 'react';

export default class CreateExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense_date: '',
            expense_total: 0.0,
            expense_payment_method: '',
            expense_item: '',  // general (eg coffee)
            expense_description: '',  // speicific (eg Starbucks)
            expense_category: ''  // eg Drinks
        }
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onChangePayment = this.onChangePayment.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeDate(e) {
        this.setState({
            expense_date: e.target.value
        });
    }
    onChangeTotal(e) {
        this.setState({
            expense_total: e.target.value
        });
    }
    onChangePayment(e) {
        this.setState({
            expense_payment_method: e.target.value
        });
    }
    onChangeItem(e) {
        this.setState({
            expense_item: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            expense_description: e.target.value
        });
    }
    onChangeCategory(e) {
        this.setState({
            expense_category: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`Expense amount: ${this.state.expense_total}`);
        console.log(`Expense Item: ${this.state.expense_item}`);
        this.setState({
            expense_date: '',
            expense_total: 0.0,
            expense_payment_method: '',
            expense_item: '', 
            expense_description: '', 
            expense_category: ''
        });
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>New Expense</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Date: </label>
                        <input type='date'
                            className='form-control'
                            value={this.state.expense_date}
                            onChange={this.onChangeDate}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Category: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.expense_category}
                            onChange={this.onChangeCategory}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Item: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.expense_item}
                            onChange={this.onChangeItem}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.expense_description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Payment Method: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.expense_payment_method}
                            onChange={this.onChangePayment}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Amount: </label>
                        <input type='number' step="0.01"
                            className='form-control'
                            value={this.state.expense_total}
                            onChange={this.onChangeTotal}
                            />
                    </div>
                    <div className="form-group">
                        <input type='submit' value='Create Expense' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}