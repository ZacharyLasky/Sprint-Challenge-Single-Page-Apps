import React from "react";
import styled from "styled-components";

//STYLE
const WrapperDiv = styled.div`
  width: 400px;
  margin-bottom: 50px;
  border: 1px solid black;
  text-align: center;
`;

export default function EpisodeCard(props) {
  // image={image}
  const episodeData = props.episodeData;
  return (
    <>
      {episodeData.map(episode => {
        return (
          <WrapperDiv className="episodeWrapper">
            <h1>{episode.name}</h1>
            <h1>{episode.air_date}</h1>
            <h1>{episode.episode}</h1>
          </WrapperDiv>
        );
      })}
    </>
  );
}
