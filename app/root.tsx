import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from '@remix-run/react';
import { Navbar } from './components/Navbar';
import stylesheet from '~/tailwind.css?url';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'icon', href: 'configs/icon.png' }
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="flex flex-col min-h-screen bg-[#FFE591]">
                <Navbar />

                <div className="w-5/6 mx-auto">
                    <Outlet />
                </div>

                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
