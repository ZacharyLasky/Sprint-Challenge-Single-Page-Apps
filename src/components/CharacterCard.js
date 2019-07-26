import React from "react";
import styled from "styled-components";

//STYLE
const WrapperDiv = styled.div`
  width: 400px;
  margin-bottom: 50px;
  border: 1px solid black;
  text-align: center;
`;

export default function CharacterCard(props) {
  const characterData = props.characterData;
  return (
    <>
      {characterData.map(character => {
        return (
          <WrapperDiv className="characterWrapper">
            <h1>{character.name}</h1>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
          </WrapperDiv>
        );
      })}
    </>
  );
}
