import React from "react";
import styled from "styled-components";

//STYLE
const WrapperDiv = styled.div`
  width: 400px;
  margin-bottom: 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  background-color: green;
`;

export default function LocationCard(props) {
  // image={image}
  const locationData = props.locationData;
  return (
    <>
      {locationData.map(location => {
        return (
          <WrapperDiv className="locationWrapper">
            <h1>{location.name}</h1>
            <h2>{location.type}</h2>
            <h3>{location.dimension}</h3>
          </WrapperDiv>
        );
      })}
    </>
  );
}
