import { Link } from '@remix-run/react';

export function Navbar() {
    return (
        <div className="bg-[#FFD562] flex font-blackOpsOne justify-between items-center p-3 sticky top-0 z-50">
            <div className="flex items-center">
                <img
                    src="configs/icon.png"
                    alt="icon"
                    className="w-10 h-10 mr-2"
                />
                <span className="font-bold text-2xl">Shiqin Yan</span>
            </div>
            <div className="text-black text-2xl flex space-x-6">
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/footprints">Footprints</Link>
            </div>
            <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-black text-base">
                    FB
                </a>
                <a href="https://twitter.com" className="text-black text-base">
                    TW
                </a>
                <a href="https://linkedin.com" className="text-black text-base">
                    LI
                </a>
            </div>
        </div>
    );
}
