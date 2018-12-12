import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 10px -5px rgba(255, 255, 255, 1);
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const LaunchButton = styled.button`
  padding: 10px 0;
  border-radius: 5px;
  background: #ccc;
`;

export default function LaunchItem({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success
  }}) 
  {
  return (
    <Card>
      <h4>Mission: {mission_name}</h4>
      <p>Date: {launch_date_local}</p>
      <LaunchButton>Launch details</LaunchButton>
    </Card>
  )
}
