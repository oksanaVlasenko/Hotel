import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'
import { UserConsumer } from '../components/Context';

class FormCity extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date()
           
          };
    }

    handleSubmit = (event) => {
        console.log('Sent city: ' + this.state.startDate + ' ' + this.state.endDate );
        event.preventDefault();
    }

    handleChangeStart = (date) => {
        this.setState ({startDate: date});
    }

    handleChangeEnd = (date) => {
        this.setState ({endDate: date});
    }


    render() {
        return(
            <div>
                <UserConsumer>
                    {({ updateCity, city, updateCoord, coord}) => {
                        return (
                        <div className="row justify-content-center">
              <div className="form-group">
                  <form onSubmit={this.handleSubmit} className="column ">
                        <div className="d-flex  justify-content-center">
                            <label>
                                <input className="form-control-sm" type="text" placeholder={'Search City'}
                                value={city || ''}  onChange={event => {
                                    updateCity(event.target.value)
                                }} />
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
          )
                    }}
                </UserConsumer>
            </div>
        )
    }

}

export default FormCity