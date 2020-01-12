import React, {Component} from 'react';
import Fetchbutton from './Fetchbutton';
import './App.css';

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleImg() {
    fetch(`https://source.unsplash.com/1800x950/?wallpapers`).then((response)=> {
  document.body.style.backgroundImage = `url(${response.url})`;
})
}


  handleClick() {
  console.log("click");
    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
  		"x-rapidapi-key": "f37f535d68mshb86f13a915b762cp16cb04jsn76a3bf17ed18"
  	}
    })
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
    // this.setState({quote: data[0]["quote"]});
    })
    .catch(err => {
  	console.log(err);
    });
  }

  componentDidMount() {
    this.handleClick();
    this.handleImg();
  }





  render() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
  return (
    <div className="button">
      <div className="button__random">
    <div>  {time} </div>

        <hr/>
        <button onClick={this.handleClick}> New Quote</button>
    <p> {this.state.quote}</p>
      </div>
    </div>
  );
}
}

export default Quote;
