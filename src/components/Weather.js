import React from 'react';
import Card from '../components/Card';
import { UserConsumer } from '../components/Context';
//import Temp, {CITY} from '../components/Temp';

//const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q={CITY}&lang=en&units=metric&APPID=652891bdee8d99f67f715fab1624d14e";


class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days: [],
      town: this.props.city,
      coords: []
    }
    //const town  = this.props.city;
    console.log(props.city + '///' + this.state.town);
  }
  

  
  
  componentDidMount = () => {
      if (this.state.town !== undefined){
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.town}&lang=en&units=metric&APPID=652891bdee8d99f67f715fab1624d14e`)
            .then(res => res.json())
            .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
            const coord = data.city.coord;
            this.setState({coords: coord})
           // console.log(this.state)
            this.setState({days: dailyData})
            })
          } else {
            console.log(this.state.town + 'undefined');
          }
    
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
   
    return (
      <div className="">
         <h6 className="display-4 text-muted">{this.state.town}</h6>
        <div className="row justify-content-center">
        {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default Weather