import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <AddTodo />
            <TodoList />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
