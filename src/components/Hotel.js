import React from 'react';
import Weather from './Weather';

class Hotel extends React.Component {
   constructor(props){
       super(props);

    
   }
   
   componentDidMount = () => {
    
        fetch("http://engine.hotellook.com/api/v2/lookup.json?query=Kharkiv&lang=en&lookFor=hotel&limit=10")
          .then(res => res.json())
          .then(data => {
          console.log(data)
          })
    
  
}

   handleSubmit = (event) => {
    
    event.preventDefault();
  }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="column ">
                        <div className="d-flex flex-row justify-content-center">
                            <label>
                                <input className="form-control-sm" type="text" placeholder={'Search City'}
                                value='s' onChange={this.handleSubmit} />
                            </label>
                            <label>
                            <input className="form-control-sm" type="text" placeholder={'start'}
                                value='s' onChange={this.handleSubmit} />
                            </label>
                            <label>
                            <input className="form-control-sm" type="text" placeholder={'end'}
                                value='s' onChange={this.handleSubmit} />
                            </label>
                        </div>

                </form>
                <Weather />
            </div>
            
        )
    }
}

export default Hotel