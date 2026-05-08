import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/Languagecontext'; 
import './NotFound.css';

const NotFound = () => {
    const { t } = useLanguage(); 


    if (!t?.notfound) return null;

    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <div className="notfound-emoji">🍦</div>
                <h1 className="notfound-title">{t.notfound.title}</h1>
                <p className="notfound-text">{t.notfound.message}</p>
                <p className="notfound-description">
                    {t.notfound.desc}
                </p>
                <Link to="/" className="notfound-button">
                    {t.notfound.button}
                </Link>
            </div>

            <div className="floating-elements">
                <div className="float-item">🍓</div>
                <div className="float-item">🍫</div>
                <div className="float-item">🥥</div>
                <div className="float-item">🍦</div>
            </div>
        </div>
    );
};

export default NotFound;