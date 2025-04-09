import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Task 1", "Task 2"],
      newTodo: ''
    };
  }

  componentDidMount(){
    const saveTodos = localStorage.getItem('todos');
    if(saveTodos){
      this.setState({todos: JSON.parse(saveTodos)});
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.todos !== this.state.todos){
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  componentWillUnmount(){
    console.log("Component is being removed from th DOM");
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.todos !== nextState.todos || this.state.newTodo !== nextState.newTodo){
      return true;
    }
    return false;
  }

  addTodo = () => {
    if(this.state.newTodo){
      this.setState((prevState) => ({
        todos: [...prevState.todos, prevState.newTodo],
        newTodo: '',
      }));
    }
  }

  deleteTodo = (index) => {
    this.setState((prevState) => {
      const updateTodos = [...prevState.todos];
      updateTodos.splice(index, 1);
      return { todos: updateTodos };
    })
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  }

  render() {
    return (
      <div className="todo-container">
        <input type="text" value={this.state.newTodo} onChange={this.handleInputChange} placeholder="Add a new job" />

        <button onClick={this.addTodo}>Add</button>

        <ul>
          {
            this.state.todos.map((todo, index) => (
              <li key={index}>
                {todo}{' '}
                <button onClick={() => this.deleteTodo(index)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ToDo