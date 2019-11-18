import React from 'react';
//import {CITY, START, END} from '../components/Home'

import Hotel from './Hotel';
import { UserConsumer } from '../components/Context';
 
//console.log(CITY + ' ' + START + ' ' + END);
class Form extends React.Component{
  render() {
     return (
        <div>
           <UserConsumer>
      {({city}) => {
         return (
         <div className="jumbotron">
            <h1 className="display-3">Hello, {city}</h1> 
            <Hotel city={city}/>
         </div>
         )
      }}
   </UserConsumer>  
        </div>
     )
  }

}  



export default Form