const translations = {
    en: {
        nav_features: "Features",
        nav_guide: "Guide",
        hero_title_1: "Level up your",
        hero_title_2: "Discord Status",
        hero_subtitle: "The most advanced, lightweight desktop application for managing your Discord Rich Presence. Immerse yourself in the Galaxy Glass UI.",
        hero_download: "Download for Windows",
        feat_title: "Engineering Meets Aesthetics",
        feat_subtitle: "Everything you need to craft the perfect digital identity.",
        feat_1_title: "Live Preview",
        feat_1_desc: "A 1:1 pixel-perfect recreation of Discord's UI. See exactly how your rich presence card will look in real-time before applying changes.",
        feat_2_title: "Theme Engine",
        feat_2_desc: "Six premium design systems included. Customize your glass blur intensity, pick custom accent colors, and toggle ambient glows.",
        feat_3_title: "100% Secure",
        feat_3_desc: "Built purely on Discord's official IPC protocols. No client injections, no tokens needed, no ban risks. Completely local execution.",
        guide_title: "How It Works",
        guide_subtitle: "Up and running in less than 2 minutes.",
        step_1_title: "Create Application",
        step_1_desc: "Navigate to the Discord Developer Portal, create a \"New Application\", name it whatever you want Discord to say you are playing, and copy the Application ID.",
        step_1_link: "<span>Developer Portal</span> <i data-lucide='external-link' class='w-3 h-3'></i>",
        step_2_title: "Add Images",
        step_2_desc: "Under the Rich Presence tab, upload your Art Assets and name them simply (e.g., \"logo\"). Or skip this step and just use direct URLs inside Nebula!",
        step_3_title: "Launch Status",
        step_3_desc: "Open Nebula Presence, paste your ID, fill out the text boxes, and hit \"Start Presence\". Your new custom profile is now live for everyone to see."
    },
    ru: {
        nav_features: "Возможности",
        nav_guide: "Как использовать",
        hero_title_1: "Прокачай свой",
        hero_title_2: "Discord Статус",
        hero_subtitle: "Самое продвинутое и легкое Desktop-приложение для управления вашим Discord Rich Presence. Погрузитесь в интерфейс Galaxy Glass.",
        hero_download: "Скачать для Windows",
        feat_title: "Инженерия и Эстетика",
        feat_subtitle: "Всё необходимое для создания идеального цифрового образа.",
        feat_1_title: "Живой Предпросмотр",
        feat_1_desc: "Pixel-perfect копия интерфейса Discord. Наблюдайте за тем, как выглядит ваша карточка в реальном времени, еще до запуска.",
        feat_2_title: "Система Тем",
        feat_2_desc: "Шесть премиальных стилей дизайна. Настраивайте размытие стекла, выбирайте свой цвет акцента и включайте фоновое свечение.",
        feat_3_title: "100% Безопасно",
        feat_3_desc: "Работает исключительно через официальные протоколы Discord IPC. Никаких инъекций в клиент, паролей или рисков бана. Локально.",
        guide_title: "Как это работает",
        guide_subtitle: "Настройка займет меньше двух минут.",
        step_1_title: "Создайте Приложение",
        step_1_desc: "Зайдите на портал разработчиков Discord, создайте «New Application», назовите его так, как хотите отображаться, и скопируйте Application ID.",
        step_1_link: "<span>Портал разработчиков</span> <i data-lucide='external-link' class='w-3 h-3'></i>",
        step_2_title: "Добавьте Картинки",
        step_2_desc: "Во вкладке Rich Presence загрузите ваши изображения и дайте им простые названия (например, «logo»). Или используйте прямые ссылки в программе!",
        step_3_title: "Запустите Статус",
        step_3_desc: "Откройте Nebula Presence, вставьте ваш ID, заполните текстовые поля и нажмите «Start Presence». Ваш новый профиль теперь видят все."
    }
};

function setLang(lang) {
    // Update active button styles
    document.getElementById('btn-en').className = lang === 'en' 
        ? "px-4 py-1.5 text-xs font-bold rounded-md bg-theme-accent text-white shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" 
        : "px-4 py-1.5 text-xs font-bold rounded-md text-gray-400 hover:text-white transition-all";
        
    document.getElementById('btn-ru').className = lang === 'ru' 
        ? "px-4 py-1.5 text-xs font-bold rounded-md bg-theme-accent text-white shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" 
        : "px-4 py-1.5 text-xs font-bold rounded-md text-gray-400 hover:text-white transition-all";

    // Update texts
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Re-initialize lucide icons after replacing innerHTML
    if(window.lucide) {
        lucide.createIcons();
    }

    localStorage.setItem('nebula_lang', lang);
}

// Scroll Navbar Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Start observer
    document.querySelectorAll('.reveal-up').forEach(el => {
        observer.observe(el);
    });

    // Init language
    const savedLang = localStorage.getItem('nebula_lang') || 'ru';
    setLang(savedLang);
});
