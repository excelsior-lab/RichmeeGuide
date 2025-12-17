# 多语言功能指南网页

这是一个支持自动检测浏览器语言并显示相应翻译的功能介绍网页。

## 功能特性

✅ **自动语言检测**：根据浏览器/手机的语言设置自动显示对应语言  
✅ **多语言支持**：支持中文（简体/繁体）、英语、日语、韩语、西班牙语、法语  
✅ **手动切换**：用户可以手动选择显示语言  
✅ **本地存储**：记住用户的语言选择偏好  
✅ **响应式设计**：完美适配手机和桌面设备  
✅ **步骤展示**：清晰的步骤编号、标题、描述和配图

## 文件说明

- `index.html` - 主页面，包含结构和样式
- `translations.js` - 多语言翻译配置文件
- `app.js` - 核心逻辑，处理语言检测和切换
- `README.md` - 说明文档

## 使用方法

1. **直接打开**：用浏览器打开 `index.html` 即可
2. **本地服务器**：使用任何 Web 服务器（如 Python 的 http.server）

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 自定义内容

### 1. 修改步骤内容

编辑 `translations.js` 文件中的 `steps` 数组：

```javascript
steps: [
    {
        title: '步骤标题',
        description: '步骤详细描述',
        image: '图片URL'
    },
    // 添加更多步骤...
]
```

### 2. 替换图片

将示例中的占位符图片 URL 替换为你的实际图片：

```javascript
image: 'https://your-domain.com/images/step1.png'
// 或使用相对路径
image: './images/step1.png'
```

### 3. 添加新语言

在 `translations.js` 中添加新的语言对象：

```javascript
'de': { // 德语
    pageTitle: 'Funktionsanleitung',
    mainTitle: 'So verwenden Sie diese Funktion',
    subtitle: 'Folgen Sie diesen einfachen Schritten',
    langLabel: 'Sprache: ',
    steps: [...],
    footer: '© 2025 Funktionsanleitung. Alle Rechte vorbehalten.'
}
```

然后在 `index.html` 的语言选择器中添加选项：

```html
<option value="de">Deutsch</option>
```

## 工作原理

1. **自动检测**：页面加载时，JavaScript 读取 `navigator.language` 获取浏览器语言
2. **匹配语言**：将检测到的语言与可用翻译进行匹配
3. **渲染内容**：根据选定的语言动态生成页面内容
4. **记住选择**：使用 `localStorage` 保存用户的语言偏好

## 浏览器兼容性

- ✅ Chrome/Edge (最新版本)
- ✅ Firefox (最新版本)
- ✅ Safari (最新版本)
- ✅ iOS Safari
- ✅ Android Chrome

## 技术栈

- 纯 HTML5
- CSS3 (Flexbox, Grid, Animations)
- 原生 JavaScript (ES6+)
- 无依赖，无需构建工具

## 部署建议

### GitHub Pages
1. 将文件上传到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为源

### Netlify/Vercel
直接拖拽文件夹到平台即可部署

### 自己的服务器
上传文件到 Web 服务器的根目录或子目录

## 优化建议

1. **图片优化**：使用 WebP 格式并压缩图片
2. **CDN 加速**：将图片放在 CDN 上加快加载速度
3. **懒加载**：图片已配置懒加载 (`loading="lazy"`)
4. **缓存策略**：配置适当的 HTTP 缓存头

## 许可证

MIT License - 可自由使用和修改
