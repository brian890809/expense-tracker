import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import CreateExpense from './components/create-expense.component';
import EditExpense from "./components/edit-expense.component";
import HistoryExpense from './components/history-expense.component';
class App extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class='navbar-brand'>
              <img scr={logo} width='30' height='30'/>
            </a>
            <Link to="/" className="navbar-brand">Expenses</Link>
            <div className="collapse navbar-collapse">
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>Create Expense</Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/history' className='nav-link'>History</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' exact component={Home}/>
          <Route path='/create' component={CreateExpense}/>
          <Route path='/edit/:id' component={EditExpense}/>
          <Route path='/history' component={HistoryExpense}/>
        </div>
      </Router>
      
    );
  }
}


export default App;
