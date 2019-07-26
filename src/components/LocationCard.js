import React from "react";

export default function LocationCard(props) {
  // image={image}
  const locationData = props.locationData;
  return (
    <>
      {locationData.map(location => {
        return (
          <div className="locationWrapper">
            <h1>{location.name}</h1>
            <h1>{location.type}</h1>
            <h1>{location.dimension}</h1>
          </div>
        );
      })}
    </>
  );
}
