import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

let Maps = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiaXJvbnlwayIsImEiOiJjazJqbXNubXMxOGYyM2hudG9jbDk5YjNvIn0.j2u3tq3iMynj-Xl6GwXHqw"
  });
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
};

export default Maps;
