import { Link } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-[#FFD562] font-blackOpsOne flex justify-between items-center p-4 sticky top-0 z-50">
            <div className="flex items-center">
                <img
                    src="configs/icon.png"
                    alt="icon"
                    className="w-8 h-8 mr-2"
                />
                <span className="font-bold text-lg">Shiqin Yan</span>
            </div>
            <div className="hidden md:flex space-x-6">
                <Link to="/about" className="text-black">
                    About
                </Link>
                <Link to="/experience" className="text-black">
                    Experience
                </Link>
                <Link to="/projects" className="text-black">
                    Projects
                </Link>
                <Link to="/footprints" className="text-black">
                    Footprints
                </Link>
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
            <div
                ref={menuRef}
                className="text-black text-2xl md:hidden relative"
            >
                <button onClick={toggleMenu}>&#9776;</button>
                {isMenuOpen && (
                    <div className="absolute right-0 mt-4 w-auto bg-[#FFD562] shadow-lg rounded-lg">
                        <Link
                            to="/about"
                            className="block px-4 py-2 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/experience"
                            className="block px-4 py-2 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Experience
                        </Link>
                        <Link
                            to="/projects"
                            className="block px-4 py-2 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/footprints"
                            className="block px-4 py-2 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Footprints
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
