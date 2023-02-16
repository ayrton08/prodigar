import { useRef, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux-toolkit';
import mapboxgl, { Map, Marker } from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { SuccessButton } from '../../ui/buttons';
import { Small } from '../../ui/typography';
import { Location, setLocation } from '@/store';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface IMapbox {
  edit?: boolean;
  location?: Location;
}

export function Mapbox({ edit, location }: IMapbox) {
  const dispatch = useAppDispatch();

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map>();
  const marker = useRef<Marker>();

  const [lng, setLng] = useState(-63.988684);
  const [lat, setLat] = useState(-31.497542);
  const [zoom, setZoom] = useState(6);

  const [locationUpdate, setlocationUpdate] = useState(false);

  useEffect(() => {
    if (location?.lat && location.lng) {
      setLat(location?.lat as number);
      setLng(location?.lng as number);
      setZoom(14);
    }
  }, [location?.lat, location?.lng]);

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
      const lng = parseFloat(map?.current?.getCenter().lng.toFixed(4)!);
      const lat = parseFloat(map?.current?.getCenter().lat.toFixed(4)!);
      const zoom = parseFloat(map?.current?.getZoom().toFixed(2)!);
      setLng(lng);
      setLat(lat);
      setZoom(zoom);
    });
  }, [locationUpdate]);

  useEffect(() => {
    map.current?.on('click', (e: any) => {
      const coordinates = e.lngLat;

      dispatch(setLocation({ ...coordinates }));

      marker?.current?.remove();
      marker.current = new mapboxgl.Marker();
      console.log(e)
      marker.current.setLngLat(coordinates).addTo(map.current!);
    });
  }, [dispatch, edit, locationUpdate, zoom, location, lat]);

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
      <div className=""></div>
    </>
  );
}
