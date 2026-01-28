# Divy Singhvi - Personal Site
ad
A modern personal portfolio website built with Svelte and Vite, featuring a unique dual-mode interface that caters to both technical and non-technical audiences.

## 🌟 Features

### Dual-Mode Interface
- **Developer Mode**: Interactive terminal-based interface with command-line navigation
- **Simple Mode**: Clean, minimalistic landing page for general audience
- Smooth toggle between modes with preference persistence

### Developer Mode
- Full terminal emulation with command history
- Interactive commands: `help`, `about`, `experience`, `projects`, `skills`, `contact`, `social`, and more
- Easter eggs: `sudo`, `hack`, `matrix`, `coffee`, `rocket`
- Tab completion and keyboard navigation
- Mobile-optimized with quick command buttons

### Simple Mode
- Professional, clean design
- Smooth section navigation
- Responsive layout
- Clear presentation of experience, projects, and contact information

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
- Optimized font sizes and spacing for small screens
- Smooth scrolling and touch interactions

## 🛠️ Tech Stack

- **Framework**: Svelte 5
- **Build Tool**: Vite 7
- **Styling**: Component-scoped CSS
- **State Management**: Svelte stores + localStorage

## 📂 Project Structure

```
PersonalSite/
├── src/
│   ├── lib/
│   │   ├── ModeToggle.svelte    # Toggle between dev/simple modes
│   │   ├── Terminal.svelte       # Developer mode terminal
│   │   └── NonDevView.svelte     # Simple mode landing page
│   ├── App.svelte                # Main app component
│   ├── app.css                   # Global styles
│   └── main.js                   # Entry point
├── public/                       # Static assets
├── index.html                    # HTML template
└── package.json                  # Dependencies and scripts
```

## 🎨 Customization

### Updating Content
- Terminal commands are defined in `src/lib/Terminal.svelte`
- Simple mode content is in `src/lib/NonDevView.svelte`
- Colors and styling can be customized in the respective component styles

### Adding New Commands
Add new commands in the `commands` object in `Terminal.svelte`:

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

- Built with [Svelte](https://svelte.dev/)
- Powered by [Vite](https://vitejs.dev/)

