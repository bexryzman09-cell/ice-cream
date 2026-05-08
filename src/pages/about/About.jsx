import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { useLanguage } from '../../context/Languagecontext';

const About = () => {
    const { t } = useLanguage();

    // Если данные еще не загрузились или структура отличается, предотвращаем ошибку
    if (!t?.about) return null;

    return (
        <div className="about-page">
            <div className="about-container">
                <motion.div
                    className="about-glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* SECTION 1: ГЛАВНАЯ МИССИЯ */}
                    <div className="about-header-section">
                        <h1 className="about-title">
                            {t.about.title} <span className="icon-badge">🍦</span>
                        </h1>
                        <p className="about-description">
                            {t.about.description}
                        </p>
                    </div>

                    {/* SECTION 2: ЭТАПЫ ПРОИЗВОДСТВА */}
                    <div className="production-steps">
                        <h2 className="sub-title">{t.about.productionTitle}</h2>
                        <div className="steps-grid">
                            {t.about.steps.map((step, index) => (
                                <div className="step-item" key={index}>
                                    <span className="step-num">0{index + 1}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 3: СТАТИСТИКА */}
                    <div className="about-stats-grid">
                        {t.about.stats.map((stat, index) => (
                            <motion.div className="stat-card" whileHover={{ y: -10 }} key={index}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* SECTION 4: ИНГРЕДИЕНТЫ ПОДРОБНО */}
                    <div className="ingredients-detail">
                        {t.about.ingredients.map((ing, index) => (
                            <div className="ing-card" key={index}>
                                <h3>{ing.title}</h3>
                                <p>{ing.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* SECTION 5: ФИЛОСОФИЯ */}
                    <div className="about-philosophy">
                        <h2>{t.about.philosophyTitle}</h2>
                        <p>{t.about.philosophy}</p>
                        <p className="extra-info">
                            {t.about.extra}
                        </p>
                    </div>

                    <div className="about-footer-info">
                        <p>{t.about.footer}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;