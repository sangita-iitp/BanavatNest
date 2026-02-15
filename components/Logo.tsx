import React from 'react';
import logo from '../assets/logo2.jpg';

interface LogoProps {
    className?: string;
    white?: boolean; // Option for white version if needed later
}

const Logo: React.FC<LogoProps> = ({ className = "h-16" }) => {
    return (
        <img
            src={logo}
            alt="BanavatNest Logo"
            className={`object-contain ${className}`}
        />
    );
};

export default Logo;
