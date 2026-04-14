# Ferrari Showcase Website

A premium React + Tailwind CSS website showcasing luxury Ferrari supercars with dark mode, favorites system, and smooth animations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will open automatically at `http://localhost:3000`

## 📋 Features

✅ **Landing Page** - Hero section with featured cars
✅ **Car Listing** - Browse all Ferrari models with filtering & sorting
✅ **Car Details** - Detailed view with specifications and features
✅ **Dark Mode** - Toggle dark mode with localStorage persistence
✅ **Favorites** - Save favorite cars with localStorage
✅ **Smooth Animations** - Hover effects, scroll animations, transitions
✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Modern UI** - Tailwind CSS with custom styling

## 📁 Project Structure

```
ferrari-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CarCard.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Cars.jsx
│   │   └── CarDetail.jsx
│   ├── data/               # Data files
│   │   └── ferrariCars.js
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── project.md              # Project documentation
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Primary Red**: `#DC143C` (Ferrari Red)
- **Dark**: `#1a1a1a`
- **White**: `#FFFFFF`
- **Accent**: `#FF1744`

### Typography
- Font Family: Inter
- Headings: Bold (700/800 weight)
- Body: Regular (400 weight)

### Components
- Reusable `.card` styling
- Consistent `.btn-*` button styles
- Responsive `.section` padding
- Custom animations

## 🚗 Car Models

1. **Ferrari SF90 Stradale** - Plug-in hybrid supercar
2. **Ferrari 488 GTB** - Mid-engine V8 supercar
3. **Ferrari F8 Tributo** - V12 sports car

## 🔧 Technologies

- **Frontend**: React 18.2.0
- **Build**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6
- **State**: React Hooks (useState, useEffect)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 💾 Storage

- **Dark Mode**: localStorage (`darkMode` key)
- **Favorites**: localStorage (`favorites` key - array of car IDs)

## 🎯 Next Steps

- [ ] Add animations (Step 8)
- [ ] Final optimization (Step 9)
- [ ] Deploy to production

## 📖 Documentation

See [project.md](./project.md) for complete project documentation, architecture details, and progress tracking.

## 📝 License

© 2024 Ferrari Showcase. All rights reserved.
