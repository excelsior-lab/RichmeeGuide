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
                <span class="step-number">${index + 1}</span>
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

    // 返回带语言后缀的路径，如：../images/backTap1_zh-CN.png
    return `${pathWithoutExt}_${lang}${extension}`;
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

// 切换语言
function changeLanguage(lang) {
    if (lang === 'auto') {
        currentLanguage = detectBrowserLanguage();
    } else {
        currentLanguage = lang;
    }

    // 保存用户选择到 localStorage
    localStorage.setItem('selectedLanguage', lang);

    // 更新页面
    updatePageText(currentLanguage);
    renderSteps(currentLanguage);

    // 更新下拉框选中状态
    document.getElementById('language').value = lang;
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
