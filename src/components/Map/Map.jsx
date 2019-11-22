import React, { useState } from "react";
import ReactMapGl, { Layer, Feature } from "react-map-gl";
import { connect } from "react-redux";

let Maps = props => {
  const TOKEN =
    "pk.eyJ1IjoiaXJvbnlwayIsImEiOiJjazJqbXNubXMxOGYyM2hudG9jbDk5YjNvIn0.j2u3tq3iMynj-Xl6GwXHqw";
  const [viewport, setViewport] = useState({
    latitude: 55.7983,
    longitude: 37.6111,
    height: "100vh",
    width: "100vw",
    zoom: 10
  });
  return (
    <div>
      <ReactMapGl
        mapStyle="mapbox://styles/mapbox/streets-v9"
        {...viewport}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        mapboxApiAccessToken={TOKEN}
      >
      </ReactMapGl>
    </div>
  );
};
let mapStateToProps = state => {
  return {
    coord: state.taxi.coord
  };
};
export default connect(mapStateToProps, null)(Maps);

// export const drawRoute = (map, coordinates) => {
//   map.flyTo({ center: coordinates[0], zoom: 15 });
//   map.addLayer({
//     id: "route",
//     type: "line",
//     source: {
//       type: "geojson",
//       data: {
//         type: "Feature",
//         properties: {},
//         geometry: { type: "LineString", coordinates }
//       }
//     },
//     layout: { "line-join": "round", "line-cap": "round" },
//     paint: { "line-color": "#ffc617", "line-width": 8 }
//   });
// };
