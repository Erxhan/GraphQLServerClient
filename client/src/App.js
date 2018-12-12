import React, { Component } from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Launches from './components/Launches';
import spaceXLogo from './SpaceXLogo.svg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  margin: 50px auto;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Container className="App">
          <Logo src={spaceXLogo} alt="SpaceX" />
          <Launches />
        </Container>
      </ApolloProvider>
    );
  }
}

export default App;
