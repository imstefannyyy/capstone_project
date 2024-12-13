import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 

function Map({ coordinate, name }) {
    return (
        <>
            {coordinate && coordinate.length === 2 ? (
                <MapContainer
                    center={coordinate}
                    zoom={6}
                    style={{ height: '200px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                        <Marker position={coordinate}>
                        <Popup>{name}</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <>No map data available.</>
            )}
        </>
    )
}

export default Map;
