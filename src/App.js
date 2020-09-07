import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addForm';


class App extends Component {
  state = {
    todos: this.getTodos()
  }
  curId = this.state.todos[this.state.todos.length -1].id
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
    });
    this.updateData(todos)
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{
    todo.id = this.curId+=1;
    let todos=[...this.state.todos, todo];
    this.updateData(todos);
    this.setState({
      todos
    })
    console.log(this.state)
  }
  updateData(todo){
    localStorage.setItem('todos', JSON.stringify(todo));
  }
  getTodos(){
    let todos;
    if(localStorage.length < 1){
      todos= [
        {id: 1, content: "Buy some Milk"},
        {id: 2, content: "Play zelda"}
      ]
    }else{
      const curdos = localStorage.getItem('todos');
      todos = JSON.parse(curdos);
    }
    return todos;
  }
  render(){
    return (
      <div className="App container">
        <h1 className="text-center my-5 font-weight-bolder">Just Do It</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    )
  }
}

export default App;
