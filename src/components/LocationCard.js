import React from "react";
import styled from "styled-components";

//STYLE
const WrapperDiv = styled.div`
  width: 400px;
  margin-bottom: 50px;
  border: 1px solid black;
  text-align: center;
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
            <h1>{location.type}</h1>
            <h1>{location.dimension}</h1>
          </WrapperDiv>
        );
      })}
    </>
  );
}
