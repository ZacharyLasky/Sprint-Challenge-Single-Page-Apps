import React from "react";

export default function CharacterCard(props) {
  const characterData = props.characterData;
  return (
    <div className="characterWrapper">
      {characterData.map(character => {
        return (
          <div>
            <h1>{character.name}</h1>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
          </div>
        );
      })}
    </div>
  );
}
