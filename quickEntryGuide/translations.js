// 公共图片配置
const commonImages = {
    backTap: [
        'images/backTap1.png',
        'images/backTap2.png',
        'images/backTap3.png',
        'images/backTap4.png',
        'images/backTap5.png'
    ],
    sideTap: [
        'images/sideTap1.png',
        'images/sideTap2.png',
        'images/sideTap3.png'
    ]
};

// 多语言翻译配置
const translations = {
    'en': {
        pageTitle: 'Richmee Smart Quick Accounting',
        mainTitle: 'Richmee Smart Quick Accounting',
        subtitle: 'Trigger Method Settings',
        langLabel: 'Language: ',
        steps: [
            {
                title: 'Method 1: Tap the back of your phone to enable',
                description: '',
                images: 'backTap'
            },
            {
                title: 'Method 2: Side button to enable (iPhone 15 Pro and above)',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee. All rights reserved.'
    },
    'zh-CN': {
        pageTitle: 'Richmee智能快捷记账',
        mainTitle: 'Richmee智能快捷记账',
        subtitle: '触发方式设置',
        langLabel: '语言：',
        steps: [
            {
                title: '方式一：轻点手机背面开启',
                description: '',
                images: 'backTap'
            },
            {
                title: '方式二：侧边按钮开启（iPhone 15 Pro以上机型支持）',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee。保留所有权利。'
    },
    'zh-TW': {
        pageTitle: 'Richmee智能快捷記賬',
        mainTitle: 'Richmee智能快捷記賬',
        subtitle: '觸發方式設置',
        langLabel: '語言：',
        steps: [
            {
                title: '方式一：輕點手機背面開啟',
                description: '',
                images: 'backTap'
            },
            {
                title: '方式二：側邊按鈕開啟（iPhone 15 Pro以上機型支持）',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee。保留所有權利。'
    },
    'ja': {
        pageTitle: 'Richmeeスマート簡易記帳',
        mainTitle: 'Richmeeスマート簡易記帳',
        subtitle: 'トリガー方法設定',
        langLabel: '言語：',
        steps: [
            {
                title: '方法1：背面タップで起動',
                description: '',
                images: 'backTap'
            },
            {
                title: '方法2：サイドボタンで起動（iPhone 15 Pro以上）',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee。無断転載を禁じます。'
    },
    'ko': {
        pageTitle: 'Richmee 스마트 빠른 기장',
        mainTitle: 'Richmee 스마트 빠른 기장',
        subtitle: '트리거 방법 설정',
        langLabel: '언어: ',
        steps: [
            {
                title: '방법 1: 뒷면 탭으로 시작',
                description: '',
                images: 'backTap'
            },
            {
                title: '방법 2: 측면 버튼 시작 (iPhone 15 Pro 이상)',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee. 모든 권리 보유.'
    },
    'es': {
        pageTitle: 'Richmee Contabilidad Rápida Inteligente',
        mainTitle: 'Richmee Contabilidad Rápida Inteligente',
        subtitle: 'Configuración de Activación',
        langLabel: 'Idioma: ',
        steps: [
            {
                title: 'Método 1: Activar tocando la parte trasera',
                description: '',
                images: 'backTap'
            },
            {
                title: 'Método 2: Activar con botón lateral (iPhone 15 Pro+)',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee. Todos los derechos reservados.'
    },
    'fr': {
        pageTitle: 'Richmee Comptabilité Rapide Intelligente',
        mainTitle: 'Richmee Comptabilité Rapide Intelligente',
        subtitle: 'Configuration du Déclenchement',
        langLabel: 'Langue : ',
        steps: [
            {
                title: 'Méthode 1: Activer en tapotant l\'arrière',
                description: '',
                images: 'backTap'
            },
            {
                title: 'Méthode 2: Activer avec bouton latéral (iPhone 15 Pro+)',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee. Tous droits réservés.'
    },
    'de': {
        pageTitle: 'Richmee Intelligente Schnelle Buchhaltung',
        mainTitle: 'Richmee Intelligente Schnelle Buchhaltung',
        subtitle: 'Triggermethode Einstellungen',
        langLabel: 'Sprache: ',
        steps: [
            {
                title: 'Methode 1: Klopfen Sie auf die Rückseite Ihres Telefons',
                description: '',
                images: 'backTap'
            },
            {
                title: 'Methode 2: Seitentaste aktivieren (iPhone 15 Pro und höher)',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee. Alle Rechte vorbehalten.'
    },
    'ar': {
        pageTitle: 'Richmee المحاسبة الذكية السريعة',
        mainTitle: 'Richmee المحاسبة الذكية السريعة',
        subtitle: 'إعدادات طريقة التشغيل',
        langLabel: 'اللغة: ',
        steps: [
            {
                title: 'الطريقة 1: اضغط على ظهر هاتفك للتفعيل',
                description: '',
                images: 'backTap'
            },
            {
                title: 'الطريقة 2: تفعيل زر جانبي (iPhone 15 Pro والإصدارات الأحدث)',
                description: '',
                images: 'sideTap'
            }
        ],
        footer: '© 2025 Richmee. جميع الحقوق محفوظة.'
    }
};
