import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import styled from "styled-components";
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LaunchesQuery = gql`
  query LaunchesQuery{
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const LaunchesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1>Launches</h1>
        <Query query={LaunchesQuery}>
          {
            ({loading, error, data}) => {
              if (loading) return <h4>Loading...</h4>
              if (error) return <h4>Error!</h4>
              console.log(data);
              return <LaunchesContainer>
              {
                data.launches.map(launch => (
                  <LaunchItem
                    key={launch.flight_number}
                    launch={launch}
                  />
                ))
              }
              </LaunchesContainer>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launches
