import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents
} from 'react-leaflet';
import '~/styles/FootPrintMap.css';

export interface FootPrintData {
    position: [number, number];
    image?: string;
    title?: string;
}

interface FootPrintMapProps {
    footPrintsWithPicture: FootPrintData[];
    footPrintsWithoutPicture: FootPrintData[];
}

function MyComponent() {
    const map = useMapEvents({
        click: (e) => {
            console.log(`{position: [${e.latlng.lat}, ${e.latlng.lng}]},`);
        }
    });
    return null;
}

const FootPrintMap: React.FC<FootPrintMapProps> = ({
    footPrintsWithPicture,
    footPrintsWithoutPicture
}) => {
    const [selectedMarker, setSelectedMarker] = useState<FootPrintData | null>(
        null
    );

    useEffect(() => {
        document.addEventListener('keydown', closeImage);

        return () => {
            document.removeEventListener('keydown', closeImage);
        };
    }, []);

    const closeImage = () => {
        setSelectedMarker(null);
    };

    return (
        <div className="container">
            <div className="map-wrapper">
                <MapContainer
                    center={[31.18821, -177.293818]}
                    zoom={2}
                    minZoom={2}
                    maxBounds={[
                        [90, -180],
                        [-90, 180]
                    ]}
                    style={{ height: '100%', width: '100%' }}
                    doubleClickZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {footPrintsWithPicture.map((footPrint, idx) => (
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
                            icon={
                                new Icon.Default({
                                    iconSize: [20, 32],
                                    shadowSize: [32, 32]
                                })
                            }
                        >
                            {footPrint.title && (
                                <Popup closeButton={false}>
                                    {footPrint.title}
                                </Popup>
                            )}
                        </Marker>
                    ))}
                    {footPrintsWithoutPicture.map((footPrint, idx) => (
                        <Marker
                            icon={
                                new Icon({
                                    iconUrl: './icons/pin.png',
                                    iconSize: [18, 18],
                                    className: 'footprint-without-image-icon'
                                })
                            }
                            key={idx}
                            position={footPrint.position}
                        ></Marker>
                    ))}
                    <MyComponent />
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
