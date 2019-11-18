import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import Home from '../src/components/Home'
import Form from '../src/components/Form'
import { UserProvider } from '../src/components/Context';

const Header = () => {
  return (
    <div  className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/form'>Form</Link></li>
        </ul>
      </div>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <UserProvider>
     <Router>
       <div>
         <Header />
         
         <Route exact path='/' component={Home} />
         <Route path='/form' component={Form} />
       </div>
     </Router>
     </UserProvider>
  );
  }
  
}

export default App;
