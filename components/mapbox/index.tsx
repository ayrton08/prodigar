import { useRef, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-toolkit';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { SuccessButton } from '../../ui/buttons';
import { Small } from '../../ui/typography';
import { setLocation } from '@/store';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface IMapbox {
  edit?: boolean;
}

export function Mapbox({ edit }: IMapbox) {
  const dispatch = useAppDispatch();

  const mapContainer = useRef(null);
  const map: any = useRef();

  const [lng, setLng] = useState(-63.988684);
  const [lat, setLat] = useState(-31.497542);
  const [zoom, setZoom] = useState(6);

  const [locationUpdate, setlocationUpdate] = useState(false);

  const [markerLat, setMarkerLat] = useState();
  const [markerLng, setMarkerLng] = useState();

  const marker = useRef<any>(null);

  // const [newLocation, setNewLocation] = useState();

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
    map.current.on('click', (e: any) => {
      const coordinates = e.lngLat;

      dispatch(setLocation({ ...coordinates }));

      setMarkerLat(coordinates.lat);
      setMarkerLng(coordinates.lng);

      marker?.current?.remove();
      marker.current = new mapboxgl.Marker();
      marker.current.setLngLat(coordinates).addTo(map.current as any);
    });
  }, [dispatch, locationUpdate]);

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
        <Small color={edit && 'hidden'}>
          Please mark on the map the exact location with a click on the place 📍
        </Small>
        <div
          ref={mapContainer}
          className="w-full h-72 rounded-xl border border-gray-300 relative"
        ></div>
        <SuccessButton
          type="button"
          onClick={myLocation}
          className="w-40 absolute bottom-2 right-2 z-10 border border-gray-300"
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
