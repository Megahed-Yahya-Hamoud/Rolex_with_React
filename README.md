# GENÈVE — React + CSS Modules (بدون Tailwind)

## التشغيل
1. انسخ مجلد الصور الأصلي `images/` إلى `public/images/`
2. `npm install`
3. `npm run dev`

## المكتبات
dependencies:    react, react-dom
devDependencies: vite, @vitejs/plugin-react
(الخطوط: Noto Serif / Plus Jakarta Sans / Material Symbols عبر Google Fonts في index.html)

## تنظيم الـ CSS
- `src/index.css`  : متغيرات التصميم (ألوان/مسافات/خطوط) + reset + أساسيات النماذج. يجب استيراده أولاً (main.jsx).
- `*.module.css`   : ملف لكل مكوّن بجانبه. الألوان والمسافات من المتغيرات: var(--color-secondary)، var(--space-md) ...
- الألوان الشفافة: rgb(var(--color-secondary-rgb) / 0.2)
