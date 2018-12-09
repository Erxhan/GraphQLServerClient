import React, { Component } from 'react';
import styled from 'styled-components';

const SpaceXTitle = styled.h1`
  text-align: center;
  color: #FFF;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpaceXTitle>SpaceX</SpaceXTitle>
      </div>
    );
  }
}

export default App;
