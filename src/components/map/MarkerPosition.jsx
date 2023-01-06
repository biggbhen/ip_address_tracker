import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MarkerPosition = ({ position }) => {
	const icon = L.icon({
		iconRetinaUrl: iconRetina,
		iconUrl: iconMarker,
		shadowUrl: iconShadow,
	});
	const map = useMap();
	useEffect(() => {
		map.flyTo(position, 13, {
			animate: true,
		});
	}, [map, position]);
	return (
		<>
			<Marker position={position} icon={icon}>
				<Popup>hey there!</Popup>
			</Marker>
		</>
	);
};

export default MarkerPosition;
