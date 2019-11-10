import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'
import DatePicker from "react-datepicker";
import Temp from '../components/Temp'
import "react-datepicker/dist/react-datepicker.css";
import '../components/Home.css'

 
export let START = [];
export let END = [];

class Home extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        city: '',
        startDate: new Date(),
        endDate: new Date()
      };
    
    }
  
    handleChange = (event) => {
      if(event.target.value.match("^[a-zA-Z ]*$") != null) {
      
        this.setState ({city: event.target.value});
      }
    }
  
    handleChangeStart = (date) => {
        START = date.toDateString();
        this.setState ({startDate: date });
    }
  
    handleChangeEnd = (date) => {
        END = date.toDateString();
        this.setState ({endDate: date });
    }
  
    handleSubmit = (event) => {
      console.log('Sent city: ' + this.state.city);
      console.log('Start date: ' + this.state.startDate);
      console.log('End date: ' + this.state.endDate);
      event.preventDefault();
    }
  
    render() {
      
      return (
        <div className="jumbotron">
          <h3 className="display-4">Only the best hotel for you!</h3>
          <p className="lead">We help you to prepare your vacation. <br /> 
          Enjoy with us</p>
          <div className="row justify-content-center">
              <div className="form-group">
                  <form onSubmit={this.handleSubmit} className="column ">
                        <div className="d-flex  justify-content-center">
                            <label>
                                <input className="form-control-sm" type="text" placeholder={'Search City'}
                                value={this.state.city || ''}  onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="d-flex flex-row justify-content-center" >
                            <label>
                                <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChangeStart}
                                dateFormat="d.M.yyyy"
                                className="form-control-sm"
                                />
                            </label>
                            <label>
                                <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                dateFormat="d.M.yyyy"
                                className="form-control-sm"
                                />
                            </label>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="submit" value="Submit" className=" btn btn-primary btn-sm"/>
                            <Link to='/form'><button className="btn btn-primary active btn-sm">Go ahead...</button></Link>
                        </div>
                  </form>   
              </div>     
          </div>
          <Temp 
          city = {this.state.city}
          />
        </div>  
      );
    }
  } 

export default Home;
