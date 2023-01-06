import { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import IpContext from '../context/IpContext';
import MarkerPosition from './MarkerPosition';

const Map = () => {
	const { locationInfo } = useContext(IpContext);
	const [position, setPosition] = useState([37.38605, -122.08385]);

	useEffect(() => {
		if (!locationInfo) {
			setPosition([37.38605, -122.08385]);
		} else {
			setPosition([locationInfo.location.lat, locationInfo.location.lng]);
		}
	}, [locationInfo]);

	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={true}
			style={{ height: '75vh', zIndex: '19' }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<MarkerPosition position={position} />
		</MapContainer>
	);
};

export default Map;
