# Apoorva Bairi - Modern Portfolio

A modern, dynamic, and fully responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion animations.

## 🌟 Features

- **Modern Design**: Beautiful gradient backgrounds, smooth animations, and sleek UI components
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Eye-friendly dark mode for better viewing experience
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Interactive Components**: Hover effects, smooth transitions, and interactive elements
- **SEO Optimized**: Semantic HTML and proper metadata
- **Fast Performance**: Built with Vite for lightning-fast load times
- **TypeScript**: Fully typed for better code quality and developer experience

## 📋 Sections

1. **Navbar** - Smooth navigation with mobile menu support
2. **Hero Section** - Eye-catching introduction with animated background
3. **About** - Professional overview and key strengths
4. **Experience** - Work experience with timeline design
5. **Projects** - Showcase of featured projects with live links
6. **Skills** - Technical skills organized by category
7. **Education** - Academic background and qualifications
8. **Contact** - Get in touch with contact methods and social links
9. **Footer** - Quick navigation and copyright information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder ready for deployment.

## 📦 Technologies Used

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Lightning-fast build tool
- **Lucide React** - Icon library

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
