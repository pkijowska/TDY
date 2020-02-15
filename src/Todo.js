import React, {Component} from 'react';
import './App.css';

class Todo extends React.Component {

    constructor() {
      super();
      this.state = {
        value: "",
        todo : []
      }
       this.handleClick = this.handleClick.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleClick() {
     var newbutton= document.getElementsByClassName("todo__button")[0];
     newbutton.classList.add("button-todo--new");
     newbutton.classList.add("button-todo--nonvisible");
     var newinput = document.getElementsByClassName("todo__input")[0];
     newinput.classList.add("input-todo--visible");
    }

    handleChange(e) {
      this.setState({value: e.target.value});
      console.log(this.state.value);
    }

    handleSubmit(event) {
     event.preventDefault();
     let form = event.target;
     let input = form.querySelector("input");
     console.log(input);
     let todo = this.state.todo;
     todo.push(input.value);

      this.setState({
        todo: todo
    });

    input.value = "";

   }

      render() {
        const todolist = this.state.todo.map((list) =>
           <li>{list}</li>);
      return (
        <div>
          <div className="todo">
            <h3>All todos:</h3>
            <p>{todolist}</p>
            <button className="todo__button" onClick={this.handleClick}>New Todo</button>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} className="todo__input"></input>
            </form>
          </div>
        </div>
      );
    }
  }



  export default Todo;
