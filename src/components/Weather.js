import React from 'react';
import Card from '../components/Card';
import Temp, {CITY} from '../components/Temp';

//const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q={CITY}&lang=en&units=metric&APPID=652891bdee8d99f67f715fab1624d14e";

const cit = CITY;
class Weather extends React.Component {
  state = {
    days: []
  }

  
  
  componentDidMount = () => {
      
          fetch("https://api.openweathermap.org/data/2.5/forecast?q=${cit}&lang=en&units=metric&APPID=652891bdee8d99f67f715fab1624d14e")
            .then(res => res.json())
            .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
            this.setState({days: dailyData})
            })
     
    
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
 
    return (
      <div className="">
         <h6 className="display-4 text-muted">{CITY}</h6>
        <div className="row justify-content-center">
        {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default Weather