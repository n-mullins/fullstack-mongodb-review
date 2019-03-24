import React, { Component } from 'react';
import ListComponent from './ListComponent.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      priority: 0,
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('/api/todos')
      .then(response => this.setState({ todos: response.data }))
      .catch(err => console.log(err));
  }

  postTodo() {
    const { name, priority } = this.state;
    axios
      .post('/api/todos', { name, priority })
      .then(() => {
        this.getTodos();
      })
      .catch(err => console.log(err));
  }

  deleteTodo(_id) {
    axios
      .delete(`/api/todos/${_id}`)
      .then(() => this.getTodos())
      .catch(err => console.log(err));
  }

  updateTodo(index, change) {
    const target = this.state.todos[index];
    const _id = target._id;
    const newPriority = target.priority + change;
    axios
      .put(`/api/todos/${_id}`, { priority: newPriority })
      .then(() => this.getTodos())
      .catch(err => console.log(err));
  }

  handleChange(e) {
    event.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    this.postTodo();
    // const { name, priority, todos } = this.state;
    // const newTodos = [...todos];
    // newTodos.push({ name, priority });
    // this.setState(
    //   {
    //     todos: newTodos
    //   },
    //   () => console.log(this.state)
    // );
  }

  render() {
    return (
      <div>
        <form>
          Todo:
          <input type="text" name="name" onChange={this.handleChange} />
          Priority:
          <input type="number" name="priority" onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        {this.state.todos.map((todo, index) => {
          return (
            <ListComponent
              key={index}
              index={index}
              todo={todo}
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
