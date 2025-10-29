# Professional Portfolio Website

A modern, animated portfolio website built with React, featuring smooth animations and a beautiful UI.

## 🚀 Features

- **Modern Design**: Beautiful gradients, animations, and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive**: Fully responsive design that works on all devices
- **Three Main Sections**:
  - 🏠 **Intro/Home**: About me, professional experience, and education
  - 🔬 **Research**: AI/ML research timeline (coming soon)
  - 💬 **Chatbot**: Personal AI chatbot (under development)

## 📦 Technologies Used

- React 18
- React Router DOM (for navigation)
- Framer Motion (for animations)
- Vite (for fast development)
- Modern CSS with custom properties

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Intro.jsx
│   │   ├── Intro.css
│   │   ├── Research.jsx
│   │   ├── Research.css
│   │   ├── Chatbot.jsx
│   │   └── Chatbot.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

To customize the portfolio with your information:

1. **Edit Personal Info**: Update the content in `src/pages/Intro.jsx`
   - Change name, title, and description
   - Update professional experience
   - Modify education details
   - Adjust stats

2. **Change Colors**: Modify CSS variables in `src/index.css`
   - `--primary-color`
   - `--secondary-color`
   - `--accent-color`

3. **Add Profile Picture**: Replace the avatar placeholder in the hero section

## 🚀 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🎯 Future Enhancements

- [ ] Add AI/ML research timeline with interactive visualization
- [ ] Implement personal chatbot with AI capabilities
- [ ] Add contact form
- [ ] Include project showcase section
- [ ] Add blog functionality

## 📄 License

MIT License - feel free to use this for your own portfolio!

