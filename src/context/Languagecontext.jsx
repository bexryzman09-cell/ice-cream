import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    ru: {

        header: { logo: 'IceDream', menu: 'Меню', about: 'О нас' },
        notfound: {
            title: '404',
            message: 'Упс! Эта страница растаяла...',
            desc: 'Кажется, вы попали не туда. Но не переживайте, у нас есть много вкусного мороженого!',
            button: 'Вернуться на главную'
        },
        home: {
            badge: '✨ Премиум качество',
            title: 'Магия льда',
            titleGradient: 'в Ургенче',
            ctaButton: 'Посмотреть меню',
            addButton: '+',
            orderTitle: 'Ваш заказ',
            namePlaceholder: 'Ваше имя',
            phonePlaceholder: 'Номер телефона',
            commentPlaceholder: 'Комментарий к заказу...',
            confirmButton: 'Подтвердить за',
            sum: 'сум',
            faqTitle: 'Часто задаваемые вопросы'
        },
        flavors: [
            { name: 'Клубничный Пломбир', desc: 'Сливочный вкус с кусочками свежей клубники.' },
            { name: 'Шоколадный Трюфель', desc: 'Бельгийский шоколад и какао высшего сорта.' },
            { name: 'Фисташка и Соль', desc: 'Иранская фисташка с легким оттенком соли.' },
            { name: 'Манго-Маракуйя', desc: 'Экзотический сорбет, 100% веган продукт.' },
            { name: 'Черничная Ночь', desc: 'Лесная черника и натуральный густой йогурт.' },
            { name: 'Ванильное Облако', desc: 'Классика с натуральной бурбонской ванилью.' },
            { name: 'Соленая Карамель', desc: 'Мягкая карамель собственного приготовления.' },
            { name: 'Мятное Печенье', desc: 'Освежающая мята и кусочки темного печенья.' },
            { name: 'Кокосовый Рай', desc: 'Молодой кокос и нежное кокосовое молоко.' }
        ],
        faq: [
            { q: "Есть ли у вас доставка?", a: "Да, мы доставляем по всему Ургенчу в течение 30-40 минут." },
            { q: "Мороженое не растает при доставке?", a: "Нет, мы используем специальные термо-боксы, которые держат температуру до 2 часов." },
            { q: "Используете ли вы натуральные продукты?", a: "Конечно! Только натуральное молоко, сливки и свежие фрукты без ГМО." }
        ],
        about: {
            title: 'Больше чем десерт',
            description: 'IceDream — это семейная мануфактура, основанная в 2021 году в Ташкенте. Мы начали с одного маленького аппарата и огромного желания доказать, что мороженое может быть здоровым продуктом. Сегодня мы — это лаборатория вкуса, где традиции встречаются с современными технологиями.',
            productionTitle: 'Как рождается магия?',
            steps: [
                { title: 'Отбор сырья', desc: 'Мы лично проверяем каждую партию молока на жирность и чистоту. Используем только фермерские продукты без ГМО.' },
                { title: 'Пастеризация', desc: 'Медленный нагрев позволяет уничтожить бактерии, сохраняя при этом структуру белка и естественный витаминный состав.' },
                { title: 'Созревание', desc: 'Смесь отдыхает 24 часа при температуре +4°C. Это секретный этап, который делает наше мороженое таким плотным и нежным.' },
                { title: 'Фризерование', desc: 'Мгновенная заморозка с минимальным добавлением воздуха (оверран всего 20%), что дает насыщенный вкус без «пустоты».' }
            ],
            stats: [
                { number: '100%', label: 'Натурально' },
                { number: '50+', label: 'Рецептов' },
                { number: '24ч', label: 'Созревания' }
            ],
            ingredients: [
                { title: 'Молоко и сливки', desc: 'Мы используем молоко только от коров джерсейской породы — оно самое жирное и сладкое от природы.' },
                { title: 'Настоящая Ваниль', desc: 'Никакого ванилина. Только стручки сорта "Бурбон" с Мадагаскара, которые мы разрезаем вручную.' },
                { title: 'Фрукты Узбекистана', desc: 'Самаркандская клубника, хорезмская дыня и сурхандарьинское манго — мы берем лучшее от нашей земли.' }
            ],
            philosophyTitle: 'Почему это важно?',
            philosophy: 'В мире масс-маркета мы выбрали путь ремесленного производства. Мы не стремимся к миллионным тиражам, мы стремимся к тому, чтобы каждый гость, закрыв глаза, почувствовал вкус настоящего счастья из детства.',
            extra: 'Наше производство открыто для аудита качества, а наши технологи постоянно стажируются в Италии — на родине лучшего в мире джелато.',
            footer: 'IceDream — создаем культуру правильных десертов. До встречи в нашей джелатерии! ✨'
        }

    },
    uz: {
        header: { logo: 'IceDream', menu: 'Menyu', about: 'Biz haqimizda' },
        notfound: {
            title: '404',
            message: 'Ups! Bu sahifa erib ketdi...',
            desc: 'Ko\'rinishidan, siz noto\'g\'ri joyga tushib qoldingiz. Lekin tashvishlanmang, bizda juda ko\'p mazali muzqaymoq bor!',
            button: 'Bosh sahifaga qaytish'
        },
        home: {
            badge: '✨ Premium sifat',
            title: 'Muzning sehri',     
            titleGradient: 'Urganchda',
            ctaButton: 'Menyuni ko\'rish',
            addButton: '+',
            orderTitle: 'Sizning buyurtmangiz',
            namePlaceholder: 'Ismingiz',
            phonePlaceholder: 'Telefon raqami',
            commentPlaceholder: 'Buyurtmaga izoh...',
            confirmButton: 'Tasdiqlash',
            sum: "so'm",
            faqTitle: 'Tez-tez beriladigan savollar'
        },
        flavors: [
            { name: 'Qulupnayli Plombir', desc: 'Qaymoqli ta\'m bilan yangi qulupnay bo\'laklari.' },
            { name: 'Shokoladli Tryufel', desc: 'Belgiya shokoladi va yuqori navli kakao.' },
            { name: 'Pista va Tuz', desc: 'Eron pistasi bilan engil tuz ta\'mi.' },
            { name: 'Mango-Marakuya', desc: 'Ekzotik sorbet, 100% vegan mahsulot.' },
            { name: 'Ko\'k Qovoq Kechasi', desc: 'O\'rmon ko\'k qovoq va tabiiy yogurt.' },
            { name: 'Vanil Buluti', desc: 'Klassika tabiiy Burbon vanili bilan.' },
            { name: 'Sho\'r Karamel', desc: 'Yumshoq karamel o\'z tayyorgarligimizda.' },
            { name: 'Yalpizli Pechenye', desc: 'Tetiklovchi yalpiz va qora pechenye bo\'laklari.' },
            { name: 'Kokos Jannat', desc: 'Yosh kokos va yumshoq kokos suti.' }
        ],
        faq: [
            { q: "Yetkazib berish xizmatingiz bormi?", a: "Ha, biz butun Urganch bo'ylab 30-40 daqiqada yetkazib beramiz." },
            { q: "Muzqaymoq yetkazib berishda erib ketmaydimi?", a: "Yo'q, biz maxsus termo-qutilarda haroratni 2 soatgacha ushlab turamiz." },
            { q: "Tabiiy mahsulotlar ishlatilsinmi?", a: "Albatta! Faqat tabiiy sut, qaymoq va GMO-siz yangi mevalar." }
        ],
        about: {
            title: 'Shirin taomdan ko\'proq',
            description: 'IceDream — bu 2021-yilda Toshkentda tashkil etilgan oilaviy ustaxona. Biz bitta kichik apparatdan boshladik va muzqaymoq sog\'lom mahsulot bo\'lishi mumkinligini isbotlash istagimiz bor edi. Bugun biz — ta\'m laboratoriyasimiz, bu yerda an\'analar zamonaviy texnologiyalar bilan uchrashadi.',
            productionTitle: 'Sehr qanday paydo bo\'ladi?',
            steps: [
                { title: 'Xom ashyoni tanlash', desc: 'Biz har bir sut partiyasini yog\'lilik va tozalikka shaxsan tekshiramiz. Faqat GMO-siz fermer mahsulotlarini ishlatamiz.' },
                { title: 'Pasterizatsiya', desc: 'Sekin isitish bakteriyalarni yo\'q qiladi, oqsil tuzilishi va tabiiy vitamin tarkibini saqlab qoladi.' },
                { title: 'Yetilish', desc: 'Aralashma +4°C haroratda 24 soat dam oladi. Bu sirli bosqich bizning muzqaymoqni shunchalik zich va yumshoq qiladi.' },
                { title: 'Muzlatish', desc: 'Minimal havo qo\'shish bilan bir zumda muzlatish (overrun atigi 20%), bu "bo\'shliqsiz" to\'yimli ta\'m beradi.' }
            ],
            stats: [
                { number: '100%', label: 'Tabiiy' },
                { number: '50+', label: 'Retseptlar' },
                { number: '24s', label: 'Yetilish' }
            ],
            ingredients: [
                { title: 'Sut va qaymoq', desc: 'Biz faqat jersi zotli sigirlardan olingan sutni ishlatamiz — bu tabiatan eng yog\'li va shirin sut.' },
                { title: 'Haqiqiy Vanil', desc: 'Hech qanday vanilin yo\'q. Faqat Madagaskardan "Burbon" navli poyalar, biz ularni qo\'lda kesib olamiz.' },
                { title: 'O\'zbekiston mevalari', desc: 'Samarqand qulupnayi, Xorazm qovuni va Surxondaryo mangosi — biz yurtimizdan eng yaxshisini olamiz.' }
            ],
            philosophyTitle: 'Nima uchun bu muhim?',
            philosophy: 'Ommaviy bozor dunyosida biz hunarmandchilik ishlab chiqarish yo\'lini tanladik. Biz millionlab tirajlarga intilmaymiz, biz har bir mehmon ko\'zlarini yumib, bolalikdan haqiqiy baxt ta\'mini his qilishiga intilamiz.',
            extra: 'Ishlab chiqarishimiz sifat auditi uchun ochiq va bizning texnologlarimiz doimiy ravishda Italiyada — dunyodagi eng yaxshi jelatoning vatanida — stajirovka o\'tadilar.',
            footer: 'IceDream — to\'g\'ri shirinliklar madaniyatini yaratamiz. Gelateriamizda ko\'rishguncha! ✨'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ru');

    // t - это объект с переводами для текущего языка
    const t = translations[language];

    const switchLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Создаем удобный хук для использования в компонентах
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage должен использоваться внутри LanguageProvider');
    }
    return context;
};

export default LanguageContext;
