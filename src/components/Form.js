import React from 'react';
//import {CITY, START, END} from '../components/Home'

import Hotel from './Hotel';
 
//console.log(CITY + ' ' + START + ' ' + END);
const Form = (props) =>{
   
   return (
       
      <div className="jumbotron">
          <h1 className="display-3">Hello, form</h1>
          
          <Hotel />

      </div>
   );
}


export default Form