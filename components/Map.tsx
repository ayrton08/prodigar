/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Marker } from "react-map-gl";
import { geoClient, Map, style, mapStyle } from "../lib/mapbox";
import marker from "../public/marker.png";
import { InputText } from "../ui/text-field";
import { MainButton } from "../ui/buttons";

type MapBoxProps = {
  onChange?: (arg1: any, arg2: any) => any;
  defaultValue?: string;
};

export function MapBox(props: MapBoxProps) {
  const initialCoords: any = [-68.838844, -32.888355];
  const [coords, setCoords] = useState(initialCoords);
  const [query, setQuery] = useState("");

  // async function search() {
  //   geoClient
  //     .forwardGeocode({
  //       query: query ? query : props.defaultValue,
  //       countries: ["ar"],
  //       limit: 2,
  //     })
  //     .send()
  //     .then((response) => {
  //       const match = response.body;
  //       const coordinates = match.features[0].geometry.coordinates;
  //       return coordinates;
  //     })
  //     .then((data) => {
  //       setCoords(data);
  //       // lo "tiro" hacia arriba para que reciban las coordenadas desde "afuera"
  //       if (props.onChange) {
  //         props.onChange(query, data);
  //       }
  //     });
  // }

  function inputChangeHandler(e: any) {
    setQuery(e.target.value ? e.target.value : props.defaultValue);
  }

  function keydownInputHandler(e: any) {
    // si no es con form, tengo que agregar esto
    if (e.key == "Enter") {
      // evito que se dispare el submit
      e.preventDefault();
      // search();
    }
  }

  return (
    <div className="w-full max-w-xs grid gap-4 justify-items-center align-middle m-0 md:max-w-sm">
      <Map
        style={style}
        containerStyle={mapStyle}
        center={coords}
        zoom={[13]}
        movingMethod="easeTo"
      ></Map>
      <div className="w-full grid gap-4 justify-items-center align-middle m-0 md:max-w-sm">
        <InputText
          placeholder="Mendoza"
          label="Ubicación"
          onChange={inputChangeHandler}
          onKeyDown={keydownInputHandler}
        ></InputText>
        <MainButton>Buscar</MainButton>
      </div>
    </div>
  );
}
