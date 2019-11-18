import React from 'react';
import DatePicker from "react-datepicker";
import Temp from '../components/Temp'
import "react-datepicker/dist/react-datepicker.css";
import '../components/Home.css'
import FormCity from './FormCity';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      
      return (
        <div className="jumbotron">     
          <h3 className="display-4">Only the best hotel for you!</h3>
          <p className="lead">We help you to prepare your vacation. <br /> 
          Enjoy with us</p>
          <FormCity />
         
        </div>  
      );
    }
  } 

export default Home;