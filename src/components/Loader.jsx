import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader-content">
                <div className="loader-ice-cream">🍦</div>
                <div className="loader-line-container">
                    <div className="loader-line"></div>
                </div>
                <p className="loader-text">Готовим нежность...</p>
            </div>
        </div>
    );
};

export default Loader;