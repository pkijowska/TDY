import React, {Component} from 'react';
import Fetchbutton from './Fetchbutton';
import './App.css';

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      city: "",
      temp: 0,
      icon: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.getWeather = this.getWeather.bind(this);
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
    console.log(this.state.quote);
  }

//
getWeather() {


const x = 0;
const y = 0;



  const apiKey = '0c1fc18fa9208d2579871cb527b4215e';
  var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${x}&lon=${y}&APPID=${apiKey}`;
// additional code


  fetch(url).then(response => response.json()).then(data=> {
    this.setState({city: data['city']['name']});
    this.setState({temp: data['list'][0]['main']['temp']});
    this.setState({icon: data['list'][0]['weather'][0]['icon']});
    console.log(this.state.icon);
  });



};

  handleImg() {
    fetch(`https://source.unsplash.com/1800x950/?wallpapers`).then((response)=> {
  document.body.style.backgroundImage = `url(${response.url})`
  });
  }




// this.getWeather(-33,151);
componentDidMount() {
  this.getWeather();
  this.handleClick();
  this.handleImg();
}


  render() {

    const weather = Math.round(this.state.temp - 273);
    console.log(weather);
    const icon = this.state.icon;
    const src = "http://openweathermap.org/img/w/"+ icon +".png";
    console.log(src);
  return (
    <div>
      <img className="img__icon" src={src} alt="" />
      <p> {this.state.city}</p>
      <p> {weather}<sup>O</sup>C</p>
      <div className="button">
        <div className="button__random">
          <div>  {new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</div>
          <hr/>
          <button onClick={this.handleClick}> New Quote</button>
          <p> {this.state.quote}</p>
        </div>
      </div>
    </div>
  );
}
}

export default Quote;
