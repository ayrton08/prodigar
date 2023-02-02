import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import css from './Mapbox.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { InputText } from '../../ui/text-field/index';
import { MainButton, SuccessButton } from '../../ui/buttons/index';
import { Small } from '../../ui/typography/index';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export function Mapbox() {
  const mapContainer = useRef(null);
  const map:any = useRef();

  const [lng, setLng] = useState(-63.988684);
  const [lat, setLat] = useState(-31.497542);
  const [zoom, setZoom] = useState(6);

  const [locationUpdate, setlocationUpdate] = useState(false);

  const [markerLat, setMarkerLat] = useState();
  const [markerLng, setMarkerLng] = useState();

  const marker = useRef<any>(null);

  const [newLocation, setNewLocation] = useState();

  console.log('location', newLocation);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lat, lng, zoom]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [locationUpdate]);

  useEffect(() => {
    console.log(map);
    map.current.on('click', (e: any) => {
      const coordinates = e.lngLat;
      setNewLocation(coordinates);

      setMarkerLat(coordinates.lat);
      setMarkerLng(coordinates.lng);

      marker?.current?.remove();
      marker.current = new mapboxgl.Marker();
      marker.current.setLngLat(coordinates).addTo(map.current as any);
    });
  }, [locationUpdate]);

  const myLocation = (e: any) => {
    e.preventDefault();
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);
        setZoom(14);
        setlocationUpdate(!locationUpdate);
      });
    } else {
      console.log('Geolocation not avaliable');
    }
  };

  return (
    <>
      <div className="relative grid gap-2">
        <Small>
          Please mark on the map the exact location with a click on the place 📍
        </Small>
        <div
          ref={mapContainer}
          className="w-full h-72 rounded-xl border border-gray-300 relative"
        ></div>
        <SuccessButton
          type="button"
          onClick={myLocation}
          className="w-40 absolute bottom-2 right-2 z-30 border border-gray-300"
        >
          Go to my location 🗺️
        </SuccessButton>
      </div>
      <div className="">
        {/* <InputText
          placeholder="Mendoza"
          label="Ubicación"
          // onChange={inputChangeHandler}
          // onKeyDown={keydownInputHandler}
        ></InputText>
        <MainButton type="button">Buscar</MainButton> */}
      </div>
    </>
  );
}
