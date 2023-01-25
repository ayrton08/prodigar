import ReactMapboxGl from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
const mbxClient = require('@mapbox/mapbox-sdk')

const REACT_APP_MAPBOX_TOKEN =
	'pk.eyJ1IjoibGVhbmRybzExNCIsImEiOiJjbDYzdXB3azkya3AwM2NvMW51YXY1enM3In0.necHMcCoi9IuQWZ2wUBdZg'

const baseClient = mbxClient({
	accessToken: REACT_APP_MAPBOX_TOKEN,
})

const geoClient = mbxGeocoding(baseClient)

const Map = ReactMapboxGl({
	accessToken: REACT_APP_MAPBOX_TOKEN,
})

const style = 'mapbox://styles/mapbox/streets-v9'

const mapStyle = {
	height: '250px',
	width: '100%',
}

export { geoClient, Map, style, mapStyle }
