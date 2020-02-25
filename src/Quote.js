import React, {Component} from 'react';
import './App.css';
import Google from './Google';
import Todo from './Todo';


class Quote extends React.Component {
    constructor() {
      super();
      this.state = {
        quote: "",
        city: "",
        temp: 0,
        icon: "",
        x: 0,
        y: 0
      }

      this.handleClick = this.handleClick.bind(this);

      // this.handleImg = this.handleImg.bind(this);

      // this.getWeather = this.getWeather.bind(this);
      this.getLocation = this.getLocation.bind(this);
      this.showPosition = this.showPosition.bind(this);
    }



      handleClick() {
        fetch("http://quotes.rest/qod.json")
        .then((response) => {
          return response.json();
        })
        .then(data => {
        this.setState({quote: data["contents"]["quotes"][0]["quote"]});
        console.log(data["contents"]["quotes"][0]["quote"]);

        })
        .catch(err => {
      	console.log(err);
        });
      }


    getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    }
    showPosition(position) {
      this.setState({x :position.coords.latitude});
      this.setState({y :position.coords.longitude});
      const apiKey = '0c1fc18fa9208d2579871cb527b4215e';
      const x = this.state.x;
      const y = this.state.y;
      var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${x}&lon=${y}&APPID=${apiKey}`;
    // additional code
        fetch(url).then(response => response.json()).then(data=> {
          this.setState({city: data['city']['name']});
          this.setState({temp: data['list'][0]['main']['temp']});
          this.setState({icon: data['list'][0]['weather'][0]['icon']});
          console.log(this.state.icon);
        });
      }

    handleImg() {
      fetch(`https://source.unsplash.com/1800x950/?wallpapers`).then((response)=> {
        document.body.style.backgroundImage = `url(${response.url})`
      });
    }



    componentDidMount() {
      this.handleClick();
      this.handleImg();
      this.getLocation();
    }

    render() {
      var x = 0;
      var y = 0;
      const weather = Math.round(this.state.temp - 273);
      console.log(weather);
      const icon = this.state.icon;
      const src = "http://openweathermap.org/img/w/"+ icon +".png";

    return (

      <div>
        <div className="upper-container">
          <div className="upper-container__inner">
            <p className="upper-container__inner--small"> {this.state.city}</p>
            <p className="upper-container__inner--small"> {weather}<sup>O</sup>C</p>
            <img className="upper-container__img" src={src} alt="" />
          </div>
          <div className="upper-container__inner">
            <Google />
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-container__inner">
            <div>  {new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
            </div>
          </div>
            <hr/>
          <div className="bottom-container__inner">
            <p className="bottom-container__inner--small"> <span>Quote of the day:</span> {this.state.quote}</p>
          </div>
        </div>
      <Todo/>
      </div>

    );
  }
}



export default Quote;
