# Pratham Patel - Portfolio

A modern, responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion. This portfolio showcases my expertise in DevOps, Cloud Engineering, and Full-Stack Development.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Contact Form**: Integrated with EmailJS for easy communication
- **Project Showcase**: Dynamic project filtering and detailed project cards
- **Skills Visualization**: Interactive skill bars with proficiency levels

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Project images and profile photo
│   ├── resume.pdf         # Resume file
│   └── vite.svg          # Favicon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBar.jsx
│   │   └── ContactForm.jsx
│   ├── pages/            # Main page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── data/             # JSON data files
│   │   ├── about.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── contacts.json
│   ├── context/          # React context
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
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

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **`src/data/about.json`** - Personal info, bio, social links
2. **`src/data/projects.json`** - Your projects and case studies
3. **`src/data/skills.json`** - Your skills and proficiency levels
4. **`src/data/contacts.json`** - Contact information

### Images

Add your images to the `public/images/` directory:
- `profile.png` - Your profile photo
- `resume.pdf` - Your resume
- Project images for each project

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `src/components/ContactForm.jsx`:
   - Replace `YOUR_SERVICE_ID`
   - Replace `YOUR_TEMPLATE_ID`
   - Replace `YOUR_PUBLIC_KEY`

### Styling

The project uses TailwindCSS with a custom configuration. You can:
- Modify colors in `tailwind.config.js`
- Update the design system in `src/index.css`
- Customize component styles in individual files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Theme Support

- Light mode (default)
- Dark mode with smooth transitions
- Theme preference saved in localStorage
- System preference detection

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: prathamp2301@gmail.com
- **LinkedIn**: [Pratham Patel](http://www.linkedin.com/in/pratham-patel-62533820b)
- **GitHub**: [Prathamwin23](https://github.com/Prathamwin23)

---

Built with ❤️ by Pratham Patel
