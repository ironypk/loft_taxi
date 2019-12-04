import { takeEvery, call, put, select } from "redux-saga/effects";
import { getRoute, getRouteSuccess } from "../reducers/taxi_reducer";
import * as Axios from "axios";

let  getRequest = async (route) => {
  try{
    let {data} = await Axios.get(`https://loft-taxi.glitch.me/route?address1=${route.from}&address2=${route.to}`)
    return data
  }catch(error){
    alert(error)
  }

};

const drawRoute = (map, coordinates) => {
  map.flyTo({ center: coordinates[0], zoom: 15 });
  map.addLayer( {
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates }
      }
    },
    layout: { "line-join": "round", "line-cap": "round" },
    paint: { "line-color": "#ffc617", "line-width": 8 }
  });
};



export function* getRouteSaga() {
  yield takeEvery(getRoute, function*() {
    let {
        taxi: { route, map }
      } = yield select();
      try{
        const data = yield call(getRequest, route);
        if (!data.length) {
          alert('путь не найдет');
        } else {
          yield drawRoute(map, data)
          yield put(getRouteSuccess(true))
        }
      }catch(error){;
      }
   });
}