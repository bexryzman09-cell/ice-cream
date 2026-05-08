const translations = {
    ru: {
        header: {
            logo: 'IceDream',
            menu: 'Меню',
            about: 'О нас'
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
        header: {
            logo: 'IceDream',
            menu: 'Menyu',
            about: 'Biz haqimizda'
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
            { name: 'Qulupnayli Pломбир', desc: 'Qaymoqli ta\'m bilan yangi qulupnay bo\'laklari.' },
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
            extra: 'Ishlab chiqarishimiz sifat auditi uchun ochiq va bizning texnologlarimiz doimiy ravishda Italiyada — dunyodagi eng yaxshi jelatoning vatanida — stajировka o\'tadilar.',
            footer: 'IceDream — to\'g\'ri shirinliklar madaniyatini yaratamiz. Gelateriamizda ko\'rishguncha! ✨'
        }
    },
    en: {
        header: {
            logo: 'IceDream',
            menu: 'Menu',
            about: 'About Us'
        },
        home: {
            badge: '✨ Premium Quality',
            title: 'Ice Magic',
            titleGradient: 'in Urgench',
            ctaButton: 'View Menu',
            addButton: '+',
            orderTitle: 'Your Order',
            namePlaceholder: 'Your Name',
            phonePlaceholder: 'Phone Number',
            commentPlaceholder: 'Order comment...',
            confirmButton: 'Confirm for',
            sum: 'sum',
            faqTitle: 'Frequently Asked Questions'
        },
        flavors: [
            { name: 'Strawberry Cream', desc: 'Creamy taste with fresh strawberry pieces.' },
            { name: 'Chocolate Truffle', desc: 'Belgian chocolate and premium cocoa.' },
            { name: 'Pistachio & Salt', desc: 'Iranian pistachio with a light touch of salt.' },
            { name: 'Mango-Passionfruit', desc: 'Exotic sorbet, 100% vegan product.' },
            { name: 'Blueberry Night', desc: 'Wild blueberry and natural thick yogurt.' },
            { name: 'Vanilla Cloud', desc: 'Classic with natural Bourbon vanilla.' },
            { name: 'Salted Caramel', desc: 'Soft homemade caramel.' },
            { name: 'Mint Cookie', desc: 'Refreshing mint and dark cookie pieces.' },
            { name: 'Coconut Paradise', desc: 'Young coconut and tender coconut milk.' }
        ],
        faq: [
            { q: "Do you offer delivery?", a: "Yes, we deliver throughout Urgench within 30-40 minutes." },
            { q: "Won't the ice cream melt during delivery?", a: "No, we use special thermo-boxes that maintain temperature for up to 2 hours." },
            { q: "Do you use natural products?", a: "Of course! Only natural milk, cream and fresh fruits without GMO." }
        ],
        about: {
            title: 'More than dessert',
            description: 'IceDream is a family-owned manufactory founded in 2021 in Tashkent. We started with one small machine and a huge desire to prove that ice cream can be a healthy product. Today we are a taste laboratory where traditions meet modern technology.',
            productionTitle: 'How is magic born?',
            steps: [
                { title: 'Raw Material Selection', desc: 'We personally check each batch of milk for fat content and purity. We use only farm products without GMO.' },
                { title: 'Pasteurization', desc: 'Slow heating destroys bacteria while preserving the protein structure and natural vitamin composition.' },
                { title: 'Maturation', desc: 'The mixture rests for 24 hours at +4°C. This is the secret stage that makes our ice cream so dense and tender.' },
                { title: 'Freezing', desc: 'Instant freezing with minimal air addition (overrun only 20%), which gives a rich taste without "emptiness".' }
            ],
            stats: [
                { number: '100%', label: 'Natural' },
                { number: '50+', label: 'Recipes' },
                { number: '24h', label: 'Maturation' }
            ],
            ingredients: [
                { title: 'Milk and Cream', desc: 'We use milk only from Jersey cows — it is naturally the fattiest and sweetest.' },
                { title: 'Real Vanilla', desc: 'No vanillin. Only "Bourbon" variety pods from Madagascar, which we cut by hand.' },
                { title: 'Uzbekistan Fruits', desc: 'Samarkand strawberry, Khorezm melon and Surkhandarya mango — we take the best from our land.' }
            ],
            philosophyTitle: 'Why is this important?',
            philosophy: 'In the world of mass market, we chose the path of artisan production. We do not strive for millions of copies, we strive for every guest to close their eyes and feel the taste of true happiness from childhood.',
            extra: 'Our production is open for quality audit, and our technologists are constantly trained in Italy — the birthplace of the world\'s best gelato.',
            footer: 'IceDream — creating a culture of proper desserts. See you in our gelateria! ✨'
        }
    }
};

export default translations;