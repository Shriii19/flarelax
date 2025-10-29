# ⚡ Flarelax - Premium Web Hosting Platform

A modern, high-performance web hosting platform built with React, Vite, TailwindCSS, and Framer Motion. Designed to compete with industry leaders like Hostinger, Bluehost, and Namecheap.

![Flarelax Banner](https://via.placeholder.com/1200x400/0F172A/22D3EE?text=Flarelax+Hosting)

## ✨ Features

- 🎨 **Modern Design System** - Professional UI with Inter font and cohesive color palette
- 🌈 **Stunning Gradients** - Eye-catching purple, cyan, and pink gradient combinations
- ⚡ **Lightning Fast** - Built on Vite for instant HMR and optimized builds
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🎭 **Smooth Animations** - Framer Motion for buttery-smooth interactions
- 🛡️ **Trust Indicators** - 99.9% uptime, SSL security, 24/7 support badges
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 🎯 **SEO Optimized** - Meta tags and semantic HTML

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (via SVG)

## 📁 Project Structure

```
hosting/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, logos, etc.
│   ├── components/     # React components
│   │   ├── Navbar.jsx  # Navigation with mega menu
│   │   ├── home.jsx    # Landing page with all sections
│   │   └── Footer.jsx  # Enhanced footer with links
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles & animations
│   └── App.css         # Component-specific styles
├── DESIGN_SYSTEM.md    # Complete design documentation
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎯 Current Pages

### ✅ Completed
- **Home/Landing Page** - Hero section, stats, services, pricing, testimonials, FAQ
- **Navbar** - Sticky navigation with mega dropdown menus
- **Footer** - Comprehensive footer with links and social media

### 🔜 Upcoming Pages

#### 1. **Pricing Plans** (`/pricing`)
- Detailed plan comparison table
- Monthly/Yearly toggle
- Feature comparison matrix
- Money-back guarantee badge
- Custom enterprise quote form

#### 2. **Features** (`/features`)
- Feature deep-dives with icons
- Performance benchmarks
- Technology stack showcase
- Integration partners
- Comparison with competitors

#### 3. **About Us** (`/about`)
- Company story and mission
- Team members with photos
- Company values
- Timeline/milestones
- Press mentions and awards

#### 4. **Contact/Support** (`/contact`)
- Contact form
- Live chat integration
- Support ticket system
- FAQ section
- Knowledge base links
- Office locations (if applicable)

#### 5. **Login** (`/login`)
- Email/password login
- Social login options
- "Remember me" checkbox
- Forgot password link
- Two-factor authentication

#### 6. **Signup** (`/signup`)
- Multi-step registration
- Plan selection
- Email verification
- Password strength indicator
- Terms & conditions acceptance

#### 7. **Dashboard** (`/dashboard`) - Future
- Account overview
- Active services
- Billing information
- Support tickets
- Domain management

#### 8. **Documentation** (`/docs`)
- Getting started guides
- API documentation
- Tutorials and how-tos
- Video tutorials
- Code examples

## 🎨 Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design guidelines including:
- Color palette
- Typography scale
- Component styles
- Animation guidelines
- Spacing system
- Accessibility standards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Shriii19/hosting.git

# Navigate to project directory
cd hosting

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Customization Guide

### Changing Brand Colors

Edit `src/index.css` to modify the color scheme:

```css
/* Primary gradient colors */
.bg-gradient-to-r {
  background: linear-gradient(to right, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### Adding New Pages

1. Create component in `src/components/`
2. Import and add route in `App.jsx`
3. Update navigation links in `Navbar.jsx`
4. Add footer link in `Footer.jsx`

### Modifying Animations

All animation configurations are in:
- `src/index.css` - CSS animations
- Component files - Framer Motion animations

## 🔐 Environment Variables

Create a `.env` file for API keys and configurations:

```env
VITE_API_URL=your_api_url
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
VITE_GOOGLE_ANALYTICS=your_ga_id
```

## 📈 Performance

- **Lighthouse Score**: 95+ (Desktop)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 200KB (gzipped)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [TailwindCSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vite](https://vitejs.dev/) - Build tool
- [Heroicons](https://heroicons.com/) - Icon set
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

## 📧 Contact

- **Website**: [flarelax.com](https://flarelax.com)
- **Email**: support@flarelax.com
- **Twitter**: [@flarelax](https://twitter.com/flarelax)
- **GitHub**: [@Shriii19](https://github.com/Shriii19)

---

Made with ❤️ by the Flarelax Team

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
