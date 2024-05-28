import type { LinksFunction } from '@remix-run/node';

import ClientOnly from '~/components/ClientOnly';
import MapComponent from '~/components/FootPrintMap.client';

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css'
    }
];

export default function Index() {
    return (
        <>
            <ClientOnly>
                {() => (
                    <MapComponent
                        footPrints={[
                            {
                                position: [51.505, -0.09],
                                image: './LanZhou.png',
                                title: 'Lanzhou'
                            }
                        ]}
                    ></MapComponent>
                )}
            </ClientOnly>
        </>
    );
}
