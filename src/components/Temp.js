import React from 'react';


class Temp extends React.Component {
    constructor(props) {
        super(props);
       
    }
    
    
    render() {
        let CITY = this.props.city;
        console.log(CITY);
        return (
            <div>{CITY}</div>
        )
    }
}

export let CITY
//export const CITY;
export default Temp