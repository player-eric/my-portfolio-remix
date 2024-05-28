import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '~/styles/FootPrintMap.css';

interface FootPrintData {
    position: [number, number];
    image: string;
    title?: string;
}

interface FootPrintMapProps {
    footPrints: FootPrintData[];
}

const FootPrintMap: React.FC<FootPrintMapProps> = ({ footPrints }) => {
    const [selectedMarker, setSelectedMarker] = useState<FootPrintData | null>(
        null
    );

    const closeImage = () => {
        setSelectedMarker(null);
    };

    return (
        <div className="container">
            <div className="map-wrapper">
                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    doubleClickZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {footPrints.map((footPrint, idx) => (
                        <Marker
                            key={idx}
                            position={footPrint.position}
                            eventHandlers={{
                                click: () => {
                                    setSelectedMarker(footPrint);
                                },
                                mouseover: (e) => {
                                    e.target.openPopup();
                                },
                                mouseout: (e) => {
                                    e.target.closePopup();
                                }
                            }}
                        >
                            {footPrint.title && (
                                <Popup>{footPrint.title}</Popup>
                            )}
                        </Marker>
                    ))}
                </MapContainer>
                {selectedMarker && (
                    <div
                        className="full-screen-image-wrapper"
                        onClick={closeImage}
                    >
                        <img
                            src={selectedMarker.image}
                            alt={selectedMarker.image}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FootPrintMap;
