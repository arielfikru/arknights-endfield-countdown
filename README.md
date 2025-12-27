# 🎮 Arknights Endfield Countdown

<div align="center">
<img width="800" height="400" alt="Arknights Endfield Countdown" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">

**A cyberpunk-themed fan-made countdown website for Arknights Endfield**

[![Deploy to GitHub Pages](https://github.com/your-username/arknights-endfield-countdown/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/arknights-endfield-countdown/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## ✨ Features

- ⏰ **Real-time Countdown** - Live countdown to Arknights Endfield launch (January 22, 2026)
- 🎨 **Cyberpunk UI** - Glitch effects, scanlines, and tech aesthetics
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🚀 **Fast & Lightweight** - Built with modern React and Vite
- 🎯 **Interactive Elements** - Hover effects and smooth animations
- 🌟 **Community Section** - Game information and milestone tracking

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS Animations
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/arknights-endfield-countdown.git
   cd arknights-endfield-countdown
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/arknights-endfield-countdown.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source

3. **The deployment will happen automatically** when you push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Install gh-pages package
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d dist
```

## 📁 Project Structure

```
arknights-endfield-countdown/
├── public/
├── src/
│   ├── components/
│   │   ├── Countdown.tsx          # Real-time countdown component
│   │   ├── HeroSection.tsx        # Main hero section with title
│   │   ├── InfoCards.tsx          # Game information cards
│   │   ├── CommunitySection.tsx   # Community features
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Milestones.tsx         # Game milestones
│   │   ├── Navigation.tsx         # Navigation component
│   │   └── TechDecoration.tsx     # Tech aesthetic decorations
│   ├── App.tsx                    # Main App component
│   ├── index.tsx                  # App entry point
│   └── index.css                  # Global styles
├── package.json
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── README.md
```

## 🎨 Customization

### Change Launch Date

Edit the `targetDate` in `src/components/HeroSection.tsx`:

```tsx
<Countdown targetDate="2026-01-22T00:00:00-05:00" />
```

### Customize Styling

- Colors: Edit Tailwind classes in components
- Animations: Modify CSS in `index.html` or component styles
- Content: Update text and images in respective components

## 📄 License

This project is a fan-made creation and is not affiliated with Hypergryph, Gryphline, or Yostar. Arknights Endfield and related assets are trademarks of their respective owners.

**MIT License** - feel free to use this project for your own purposes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features

---

<div align="center">

**Made with ❤️ for the Arknights community**

[🌐 Live Demo](https://your-username.github.io/arknights-endfield-countdown/) • [🎮 Arknights Official](https://www.arknights.global/)

</div>
