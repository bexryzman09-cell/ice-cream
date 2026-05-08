import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/Languagecontext';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, language, switchLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Логотип */}
                <Link to="/" className="logo">
                    <div className="logo-icon">🍦</div>
                    <span className="logo-text">IceDream</span>
                </Link>


                <nav className="nav-menu">
                    <Link to="/" className="nav-link">
                        <span className="nav-number">01</span>

                        <span className="nav-text">{t.header.menu}</span>
                    </Link>
                    <Link to="/About" className="nav-link">
                        <span className="nav-number">02</span>

                        <span className="nav-text">{t.header.about}</span>
                    </Link>
                </nav>

                <div className="nav-lang">
                    <div className="language-switcher">
                        {language === 'ru' ? (
                            <button className="lang-btn-toggle" onClick={() => switchLanguage('uz')}>
                                <span className="lang-text">UZ</span>
                            </button>
                        ) : (
                            <button className="lang-btn-toggle" onClick={() => switchLanguage('ru')}>
                                <span className="lang-text">RU</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;