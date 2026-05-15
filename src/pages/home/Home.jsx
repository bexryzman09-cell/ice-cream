import React, { useState } from 'react';
import './Home.css';
import { useLanguage } from '../../context/Languagecontext';
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
    const { t } = useLanguage();
    const [cart, setCart] = useState([]);
    const [isOrderModalOpen, setModalOpen] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        comment: ''
    });

    const TG_BOT_TOKEN = '7716786716:AAFbYA6YcyTuf0DgyBGnz1021TaTEp4TAO0';
    const TG_CHAT_ID = '7898096707';

    const flavors = [
        { id: 1, price: 5000, color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', img: 'https://irecommend.ru/sites/default/files/product-images/1912266/cJbKuKj0wKvzZ2XLUBVplQ.png' },
        { id: 2, price: 7000, color: 'linear-gradient(135deg, #a18ed1 0%, #121212 100%)', img: '/image.png' },
        { id: 3, price: 8000, color: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)', img: '/green.png' },
        { id: 4, price: 12000, color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', img: '/oreng.png' },
        { id: 5, price: 15000, color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', img: '/blueberry.png' },
        { id: 6, price: 25000, color: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', img: '/vanilla.png' },
        { id: 7, price: 35000, color: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)', img: '/caramel.png' },
        { id: 8, price: 50000, color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', img: '/mint.png' },
        { id: 9, price: 8000, color: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', img: '/coconut.png' }
    ];

    const addToCart = (item, translation) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            updateQuantity(existingItem.cartId, 1);
        } else {
            setCart([...cart, { ...item, name: translation.name, cartId: Date.now(), quantity: 1 }]);
        }
    };

    const updateQuantity = (cartId, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.cartId === cartId) {
                const newQty = item.quantity + delta;
                return { ...item, quantity: newQty > 0 ? newQty : 1 };
            }
            return item;
        }));
    };

    const removeFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const itemsList = cart
            .map(item => `• ${item.name} x${item.quantity} — ${(item.price * item.quantity).toLocaleString()} ${t.home.sum}`)
            .join('\n');

        const message =
            `🍦 *Новый заказ!*\n\n` +
            `👤 Имя: ${formData.name}\n` +
            `📞 Телефон: ${formData.phone}\n` +
            `💬 Комментарий: ${formData.comment || '—'}\n\n` +
            `🛒 *Состав заказа:*\n${itemsList}\n\n` +
            `💰 *Итого: ${totalPrice.toLocaleString()} ${t.home.sum}*`;

        try {
            await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TG_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });

            setCart([]);
            setFormData({ name: '', phone: '', comment: '' });
            setModalOpen(false);
            alert('Заказ отправлен! ✅');
        } catch (err) {
            alert('Ошибка при отправке заказа. Попробуйте ещё раз.');
            console.error(err);
        }
    };

    return (
        <div className="app-main">
            <div className="animated-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            <AnimatePresence>
                {cart.length > 0 && (
                    <motion.div
                        className="float-cart"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setModalOpen(true)}
                    >
                        <div className="cart-content">
                            <span>🛍️</span>
                            <div className="count-badge">
                                {cart.reduce((total, item) => total + item.quantity, 0)}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="content-container">
                <header className="hero-section">
                    <motion.div className="hero-info" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="status-badge">{t.home.badge}</div>
                        <h1>{t.home.title} <br /><span className="gradient-text">{t.home.titleGradient}</span></h1>
                        <button className="cta-button" onClick={() => scrollTo('menu')}>
                            {t.home.ctaButton}
                        </button>
                    </motion.div>
                </header>

                <main id="menu" className="catalog">
                    <div className="grid">
                        {flavors.map((f, index) => {
                            const flavorText = t.flavors[index];
                            return (
                                <motion.div
                                    key={f.id}
                                    className="card"
                                    style={{ '--bg': f.color }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="glass-inner">
                                        <div className="img-wrapper">
                                            <img src={f.img} alt={flavorText?.name} className="product-card-img" />
                                        </div>
                                        <h3>{flavorText?.name}</h3>
                                        <p>{flavorText?.desc}</p>
                                        <div className="footer">
                                            <span className="price">{f.price.toLocaleString()} {t.home.sum}</span>
                                            <button className="add-btn" onClick={() => addToCart(f, flavorText)}>
                                                {t.home.addButton}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </main>

                <section className="faq-section">
                    <h2 className="section-title">{t.home.faqTitle}</h2>
                    <div className="faq-container">
                        {t.faq.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
                                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                            >
                                <div className="faq-question">
                                    <span>{item.q}</span>
                                    <span className="arrow">{activeQuestion === index ? '▲' : '▼'}</span>
                                </div>
                                <AnimatePresence>
                                    {activeQuestion === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="faq-answer"
                                        >
                                            <p>{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <AnimatePresence>
                {isOrderModalOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
                    >
                        <motion.div
                            className="modal-box"
                            initial={{ y: 50, scale: 0.9 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                        >
                            <button className="close-x" onClick={() => setModalOpen(false)}>&times;</button>
                            <h2>{t.home.orderTitle}</h2>

                            <div className="order-items-list">
                                {cart.map(item => (
                                    <div key={item.cartId} className="item-row">
                                        <img src={item.img} className="mini-img" alt="" />
                                        <div className="i-info">
                                            <span className="i-name">{item.name}</span>
                                            <span className="i-price">{(item.price * item.quantity).toLocaleString()} {t.home.sum}</span>
                                        </div>
                                        <div className="i-controls">
                                            <button onClick={() => updateQuantity(item.cartId, -1)}>−</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.cartId, 1)}>+</button>
                                            <button className="trash" onClick={() => removeFromCart(item.cartId)}>🗑️</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <form className="order-form" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder={t.home.namePlaceholder}
                                        required
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                    />
                                    <input
                                        type="tel"
                                        placeholder={t.home.phonePlaceholder}
                                        required
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                    />
                                </div>
                                <textarea
                                    placeholder={t.home.commentPlaceholder}
                                    value={formData.comment}
                                    onChange={(e) => handleInputChange('comment', e.target.value)}
                                ></textarea>
                                <button type="submit" className="final-btn">
                                    {t.home.confirmButton} {totalPrice.toLocaleString()} {t.home.sum}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;