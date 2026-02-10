# Premium Portfolio Website

A modern, dynamic, and visually stunning personal portfolio built with React, Vite, Framer Motion, and Tailwind CSS. Features a dark theme with purple-pink gradient accents, smooth animations, and a functional contact form backend.

![Portfolio Preview](./preview.png)

## 🎯 Features

- **Premium Dark Theme** with purple-pink gradient accents
- **Smooth Animations** using Framer Motion
- **Responsive Design** for all devices (mobile, tablet, desktop)
- **Interactive Elements** with hover effects and micro-interactions
- **Functional Contact Form** with backend API
- **Scroll-based Animations** for engaging user experience
- **Project Showcase** with modal detail views
- **Skills Display** with animated progress indicators
- **Timeline Experience** section with scroll animations
- **SEO Optimized** with proper meta tags
- **Accessible** with ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Express.js** - Node.js web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📦 Installation

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
copy .env.example .env

# Edit .env with your SMTP credentials
# Then start the server
npm start
```

## 🔧 Configuration

### Environment Variables (Backend)

Create a `.env` file in the `backend` directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FRONTEND_URL=http://localhost:5173
PORT=3001
```

**Note:** For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

### Customizing Content

Edit `src/data/content.js` to update:
- Personal information (name, email, bio, social links)
- Projects (title, description, tags, links)
- Skills (categories and proficiency levels)
- Work experience (company, position, duration)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Vercel:**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Netlify:**
   ```bash
   npm run build
   # Deploy the `dist` folder
   ```

### Backend Deployment (Railway/Render)

1. **Railway:**
   - Connect your GitHub repository
   - Set environment variables
   - Deploy from `backend` directory

2. **Render:**
   - Create new Web Service
   - Point to `backend` folder
   - Add environment variables
   - Deploy

### CORS Configuration

Update `backend/server.js` CORS origin to match your deployed frontend URL:

```javascript
app.use(cors({
  origin: 'https://your-portfolio.vercel.app',
  credentials: true
}));
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingShapes.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useInView.js
│   │   └── useScrollPosition.js
│   ├── data/                # Static content
│   │   └── content.js
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── backend/
│   ├── server.js            # Express API server
│   ├── package.json
│   └── .env.example
├── public/                  # Static assets
│   ├── profile.jpg
│   └── resume.pdf
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md
```

## 🎨 Design System

### Colors
- **Primary:** Purple shades (#a855f7, #9333ea, #7e22ce)
- **Accent Pink:** #ec4899
- **Accent Purple:** #a855f7
- **Accent Blue:** #3b82f6
- **Dark Backgrounds:** #0a0a0a, #121212, #1a1a1a

### Animations
- Pulse glow effect on profile image
- Typewriter effect for role text
- Scroll-based reveal animations
- Hover tilt on project cards
- Smooth page transitions

### Typography
- Font Family: Inter, system-ui
- Gradient text for headings
- Clear hierarchy with proper sizing

## 🔍 SEO & Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible styles
- Alt text for images
- Proper heading structure
- Meta tags for social sharing

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Contact Form Not Working

1. Check backend server is running on port 3001
2. Verify CORS settings in `backend/server.js`
3. Ensure .env file has correct SMTP credentials
4. Check browser console for errors

### Animations Not Smooth

1. Ensure Framer Motion is installed
2. Check browser hardware acceleration
3. Reduce animation complexity if needed

### Build Errors

1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
2. Clear Vite cache:
   ```bash
   npm run build -- --force
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Contact

For questions or feedback, you can reach me at:
- Email: alex.johnson@example.com
- GitHub: [@alexjohnson](https://github.com/alexjohnson)
- LinkedIn: [Alex Johnson](https://linkedin.com/in/alexjohnson)

---

**Built with ❤️ using React, Vite, Framer Motion, and Tailwind CSS**
