import React, { useState, useEffect } from 'react';

import './blinker.css';

const Blinker = props => {
    const [blink, setBlink] = useState('hidden');
    const setOpcity = () => {
        blink === 'hidden' ? setBlink('visible') : setBlink('hidden');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setOpcity();
        }, 530);
        return () => clearInterval(interval);
    });

    return (
        <span className={`blink ${blink}`}>|</span>
    );
};

export default Blinker;