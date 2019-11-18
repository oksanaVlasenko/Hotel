import React from 'react';
import Weather from './Weather';
import { UserConsumer } from '../components/Context';

const proxyUrl = `https://cors-anywhere.herokuapp.com/`


class Hotel extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        town: this.props.city,
        coords: [],
        hotel: {},
        photos: ''
      }
      //let hotels = [];
   }
  
   componentDidMount = () => {
            fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${this.state.town}&lang=en&lookFor=hotel&limit=10`)
                .then(res => res.json())
                .then(data => {
                        console.log(data)
                       
                        const hotels = data.results.hotels.map((id, index) =>  data.results.hotels[index].id);
                        //const hotelId = hotels
                        console.log(hotels);
                         this.setState(
                             {hotel: hotels},
                             () => {                        //callback
                                console.log(this.state.hotel, 'statrs') // Mustkeom
                              }
                             );
                        
                        //console.log(this.state.hotelID);
                 })
                 .catch(error => console.log('error', error));
                
                 console.log(this.state );
                 
                 
            fetch(`https://yasen.hotellook.com/photos/hotel_photos?id=4969960`)
                .then(res => res.json())
                .then(data => {
                console.log(data, 'photo id')
                this.setState({photos: data},
                    () => {                        //callback
                        console.log(this.state.photos, 'pgid') // Mustkeom
                      })
            })
            .catch(error => console.log('error', error));
          
}

   handleSubmit = (event) => {
    
    event.preventDefault();
  }

    render() {
        return (
            <div>
                <UserConsumer>
                 {({city}) => {
                     return (
                        <div>
                            <form onSubmit={this.handleSubmit} className="column ">
                                    <div className="d-flex flex-row justify-content-center">
                                        <label>
                                            <input className="form-control-sm" type="text" placeholder={'Search City'}
                                            value={city} onChange={this.handleSubmit} />
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
                            <img className="card-img-top"
                            src={`https://photo.hotellook.com/image_v2/limit/8695398307/800/520.auto`}
                            alt="movie poster"/>
                            <Weather city={city}/>
                        </div>
                        
                    )
                      }}
        
                 </UserConsumer>
            </div>
        )
        

          
    }

}

export default Hotel