# Divy Singhvi - Personal Site

A modern personal portfolio website built with React and Vite, featuring a unique dual-mode interface that caters to both technical and non-technical audiences.

## 🌟 Features

### Dual-Mode Interface
- **Developer Mode**: Interactive terminal-based interface with command-line navigation
- **Simple Mode**: Clean, modern portfolio design inspired by Magic UI
- Smooth toggle between modes with preference persistence

### Developer Mode
- Full terminal emulation with command history
- Interactive commands: `help`, `about`, `experience`, `projects`, `skills`, `contact`, `social`, and more
- Easter eggs: `sudo`, `hack`, `matrix`, `coffee`, `rocket`
- Tab completion and keyboard navigation
- Mobile-optimized with quick command buttons

### Simple Mode
- Professional, modern portfolio design inspired by Magic UI
- Smooth animations with Framer Motion
- Responsive layout with gradient accents
- Clear presentation of experience, projects, and contact information
- Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/divysinghvi/PersonalSite.git
cd PersonalSite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Mobile Optimization

Both modes are fully responsive and optimized for mobile devices:
- Terminal mode includes quick command buttons for easy mobile navigation
- Simple mode features mobile-first responsive design
- Optimized font sizes and spacing for small screens
- Smooth scrolling and touch interactions

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 7
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Component-scoped CSS
- **State Management**: React hooks + localStorage

## 📂 Project Structure

```
PersonalSite/
├── src/
│   ├── components/
│   │   ├── ModeToggle.jsx       # Toggle between dev/simple modes
│   │   ├── Terminal.jsx          # Developer mode terminal
│   │   └── NonDevView.jsx        # Simple mode portfolio
│   ├── App.jsx                   # Main app component
│   ├── app.css                   # Global styles
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── index.html                    # HTML template
└── package.json                  # Dependencies and scripts
```

## 🎨 Customization

### Updating Content
- Terminal commands are defined in `src/components/Terminal.jsx`
- Simple mode content is in `src/components/NonDevView.jsx`
- Colors and styling can be customized in the respective component CSS files

### Adding New Commands
Add new commands in the `commands` object in `Terminal.jsx`:

```javascript
const commands = {
  mycommand: () => `Your command output here`,
  // ... other commands
};
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Divy Singhvi**
- GitHub: [@divysinghvi](https://github.com/divysinghvi)
- LinkedIn: [divysinghvi](https://linkedin.com/in/divysinghvi)
- Email: divysinghvi5@gmail.com

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Design inspired by [Magic UI](https://magicui.design/)

