// 应用主逻辑
let currentLanguage = 'en';

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    // 精确匹配
    if (translations[browserLang]) {
        return browserLang;
    }

    // 匹配主语言代码（例如 zh-CN, zh-TW）
    const mainLang = browserLang.split('-')[0];
    const matchedLang = Object.keys(translations).find(lang =>
        lang.startsWith(mainLang)
    );

    return matchedLang || 'en'; // 默认英语
}

// 渲染步骤
function renderSteps(lang) {
    const stepsContainer = document.getElementById('steps-container');
    const data = translations[lang];

    stepsContainer.innerHTML = '';

    data.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';

        // 生成图片HTML，支持多张图片
        let imagesHTML = '';
        // 支持字符串引用和数组两种格式
        const images = typeof step.images === 'string' ? commonImages[step.images] : step.images;

        if (images && images.length > 0) {
            images.forEach((imagePath, imgIndex) => {
                // 获取语言特定的图片路径
                const localizedImagePath = getLocalizedImagePath(imagePath, lang);
                imagesHTML += `
                    <div class="image-wrapper">
                        <img src="${localizedImagePath}" alt="" loading="lazy" onerror="this.onerror=null; this.src='${imagePath}';">
                        <div class="image-number">${imgIndex + 1}</div>
                    </div>
                `;
            });
        }

        stepElement.innerHTML = `
            <div class="step-header">
                <h2 class="step-title">${step.title}</h2>
            </div>
            ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
            <div class="step-image">
                ${imagesHTML}
            </div>
        `;
        stepsContainer.appendChild(stepElement);
    });
}

// 获取语言特定的图片路径
function getLocalizedImagePath(originalPath, lang) {
    // 解析路径和扩展名
    const lastDotIndex = originalPath.lastIndexOf('.');
    const pathWithoutExt = originalPath.substring(0, lastDotIndex);
    const extension = originalPath.substring(lastDotIndex);

    // 简化中文语言代码
    let simplifiedLang = lang;
    if (lang.startsWith('zh-')) {
        simplifiedLang = 'zh';
    }

    // 返回带语言后缀的路径，如：../images/backTap1_zh.png
    return `${pathWithoutExt}_${simplifiedLang}${extension}`;
}

// 更新页面文本
function updatePageText(lang) {
    const data = translations[lang];

    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('main-title').textContent = data.mainTitle;
    document.getElementById('subtitle').textContent = data.subtitle;
    document.getElementById('lang-label').textContent = data.langLabel;
    document.getElementById('footer').innerHTML = `<p>${data.footer}</p>`;

    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
}

// 语言切换函数
function changeLanguage(lang) {
    if (lang === 'auto') {
        // 清除保存，重新检测
        localStorage.removeItem('selectedLanguage');
        location.reload();
    } else {
        // 保存选择的语言
        localStorage.setItem('selectedLanguage', lang);
        renderPage(lang);
    }
}

// 页面渲染函数
function renderPage(lang) {
    // 确保语言存在，否则使用英文
    if (!translations[lang]) {
        lang = 'en';
    }

    const data = translations[lang];

    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('main-title').textContent = data.mainTitle;
    document.getElementById('subtitle').textContent = data.subtitle;
    document.getElementById('lang-label').textContent = data.langLabel;
    document.getElementById('footer').textContent = data.footer;

    renderSteps(lang);
}

// 初始化
function init() {
    // 检查是否有保存的语言偏好
    const savedLang = localStorage.getItem('selectedLanguage');

    if (savedLang && savedLang !== 'auto') {
        currentLanguage = savedLang;
        document.getElementById('language').value = savedLang;
    } else {
        currentLanguage = detectBrowserLanguage();
        document.getElementById('language').value = 'auto';
    }

    // 初始化页面
    updatePageText(currentLanguage);
    renderSteps(currentLanguage);

    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// 页面加载时自动检测语言
document.addEventListener('DOMContentLoaded', function () {
    // 获取保存的语言或默认语言
    let lang = localStorage.getItem('selectedLanguage');

    // 如果没有保存的语言，尝试检测浏览器语言
    if (!lang || lang === 'auto') {
        const browserLang = navigator.language || navigator.userLanguage;
        // 匹配支持的语言
        if (browserLang.startsWith('zh-Hans')) {
            lang = 'zh-CN';
        } else if (browserLang.startsWith('zh-Hant') || browserLang.startsWith('zh-TW')) {
            lang = 'zh-TW';
        } else if (browserLang.startsWith('ja')) {
            lang = 'ja';
        } else if (browserLang.startsWith('ko')) {
            lang = 'ko';
        } else if (browserLang.startsWith('es')) {
            lang = 'es';
        } else if (browserLang.startsWith('fr')) {
            lang = 'fr';
        } else {
            lang = 'en'; // 默认英文
        }
    }

    // 设置选择器的值
    document.getElementById('language').value = lang;

    // 渲染页面
    renderPage(lang);
});
