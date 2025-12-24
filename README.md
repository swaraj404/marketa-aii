# Marketa.ai - Marketing AI Platform

A modern, animated marketing website built with React, showcasing AI-powered marketing solutions.

## 🚀 Features

- **Hero Section**: Animated text with video background
- **Features Showcase**: Interactive, scroll-based feature cards
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP-powered scroll animations

## 📦 Tech Stack

- **React 19** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd marketa-aii
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚦 Running the Project

### Development Mode
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
marketa-aii/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Hero.jsx      # Main hero section
│   │   ├── HeroText.jsx  # Animated hero text
│   │   ├── Video.jsx     # Background video
│   │   ├── Features.jsx  # Features section
│   │   ├── LogoIntro.jsx # Logo intro animation
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Overview.jsx  # Overview section
│   │   └── ComingSoon.jsx # Coming soon page
│   ├── pages/            # Page components
│   │   └── Home.jsx      # Home page
│   ├── assets/           # Static assets
│   │   ├── fonts/        # Custom fonts
│   │   ├── vid1.mp4      # Background video
│   │   ├── vid2.mp4
│   │   ├── vid3.mp4
│   │   └── IMG_1966.png  # Logo
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Public assets
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🎨 Key Components

### Home Page (`src/pages/Home.jsx`)
- Entry point for the website
- Manages logo intro animation state
- Renders Hero and Features sections

### Hero (`src/components/Hero.jsx`)
- Video background with blur effects
- Animated hero text
- Responsive layout

### Features (`src/components/Features.jsx`)
- Scroll-triggered animations
- Interactive feature cards
- 6 main features displayed in a circular arrangement
- Mobile and desktop responsive

## 🔧 Configuration

### Custom Fonts
The project uses several custom fonts loaded via `@font-face` in `index.css`:
- Unbounded
- Ranade
- Gavoline
- Klaft
- Mavinea
- Nectron
- Brighten
- Reflow
- Baflen
- Caltine

### Routes
- `/` - Home page
- `/coming-soon` - Coming soon page

## 🌐 External Links
- Production App: [https://app.marketa.space](https://app.marketa.space)

## 📝 License

Private project. All rights reserved.

## 🤝 Contributing

This is a private project. Contact the owner for contribution guidelines.

---

Built with ❤️ by Marketa.ai Team
