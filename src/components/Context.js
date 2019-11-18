import React, { createContext } from 'react';

const Context = createContext({
  city: 'Kharkiv',
  updateCity: () => {},
  coord: [],
  updateCoord: () => {},
});

export class UserProvider extends React.Component {
  updateCity = newCity => {
    this.setState({ city: newCity });
  };

  updateCoord = newCoord => {
      this.setState({coord: newCoord});
  };

  state = {
    city: 'Kharkiv',
    updateCity: this.updateCity,
    coord: [],
    updateCoord: this.updateCoord
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const UserConsumer = Context.Consumer;