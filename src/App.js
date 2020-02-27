import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Wash the car',
        completed: false
      },
      {
        id: 2,
        title: 'Clean Dishes',
        completed: true
      },
      {
        id: 3,
        title: 'Mow the lawn',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete=(id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
    
}


render(){

  
  
  return (
    <div >
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
    </div>
  );
}
}

export default App;
