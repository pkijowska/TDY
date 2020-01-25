import React, {Component} from 'react';
import './App.css';

class Todo extends React.Component {

    constructor() {
      super();
      this.state = {

      }

       this.handleClick = this.handleClick.bind(this);
    }



    handleClick() {
     console.log("click");
     var newbutton= document.getElementsByClassName("button-todo")[0];
     newbutton.classList.add("button-todo--new")
    }



      render() {
      return (
        <div>
          <button className="button-todo" onClick={this.handleClick}>New Todo</button>
        </div>
      );
    }
  }



  export default Todo;
