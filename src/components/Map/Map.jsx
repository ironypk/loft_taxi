import React from "react";
import style from "./Map.module.css";
import mapboxgl from "mapbox-gl";
import RequestCard from "../RequestCard/RequestCard";
import TakeTaxiContainer from "../TakeTaxi/TakeTaxiContainer";
import GetNewRoute from "../GetNewRoute/GetNewRoute";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXJvbnlwayIsImEiOiJjazJqbXNubXMxOGYyM2hudG9jbDk5YjNvIn0.j2u3tq3iMynj-Xl6GwXHqw";

class Maps extends React.Component {
  map;

  constructor(props) {
    super(props);
    this.state = {
      latitude: 55.7983,
      longitude: 37.6111,
      zoom: 10
    };
  }
  

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [this.state.longitude, this.state.latitude],
      zoom: this.state.zoom,
      height: this.state.height,
      width: this.state.width
    });
    this.props.getMap(this.map);

    if(!this.props.isCard && localStorage.card){
      this.props.checkStorageCard()
    }
  }

  render() {
    return (
      <div>
        {!this.props.isCard && !this.props.isRoute ? <RequestCard /> : null}
        {this.props.isCard && !this.props.isRoute ? <TakeTaxiContainer /> : null}
        {this.props.isRoute ? <GetNewRoute/> : null}
        <div
          ref={el => (this.mapContainer = el)}
          className={style.map_container}
        />
      </div>
    );
  }
}

export default Maps;
