import React from 'react';
import '../components/Card.css';

class Card extends React.Component {
  // Props: day, key(index)

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('en', {weekday: 'short'});

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

    // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32


    return (
      <div className="col-auto">
          <h3 className="card-title">{weekdayName}</h3>
          <i className={imgURL}></i>
          <h2>{Math.round(this.props.day.main.temp)} °C</h2>
      </div>
    )
  }
}

export default Card