import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: 'transparent' // Or match your theme background
        }}>
            <motion.div
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '4px solid #e5e7eb', // Light gray
                    borderTop: '4px solid #3b82f6', // Blue (adjust to brand color)
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export default LoadingSpinner;
