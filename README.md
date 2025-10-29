<div align="center">

<img src="public/logo.png" alt="Flarelax Logo" width="120" height="120" />

# ⚡ Flarelax

### Premium Web Hosting & Domain Management Platform

[![Live Site](https://img.shields.io/badge/Live-Production-success?style=for-the-badge)](https://flarelax.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**[Visit Live Site](https://flarelax.com)** • **[Documentation](#-documentation)** • **[Features](#-features)** • **[Contact](#-contact)**

---

</div>

## 📋 Overview

Flarelax is a **production-ready, enterprise-grade** web hosting platform designed to deliver exceptional performance, reliability, and user experience. Built with cutting-edge technologies, our platform offers comprehensive hosting solutions including web hosting, VPS, dedicated servers, domain registration, and more.

**🌐 Live Platform**: [flarelax.com](https://flarelax.com)

### 🎯 Key Highlights

- ✅ **Live & Production-Ready** - Serving customers worldwide
- 🚀 **99.9% Uptime Guarantee** - Enterprise-grade infrastructure
- 🔒 **SSL Secured** - End-to-end encryption for all services
- 💬 **24/7 Support** - Round-the-clock customer assistance
- 🌍 **Global CDN** - Lightning-fast content delivery worldwide


---

## ✨ Features

### Hosting Solutions

- 🌐 **Shared Web Hosting** - Perfect for websites and blogs
- ☁️ **Cloud Hosting** - Scalable and flexible cloud infrastructure
- 🖥️ **VPS Hosting** - Virtual private servers with full control
- 🔧 **Dedicated Servers** - Maximum performance and resources
- 🎮 **Game Server Hosting** - Minecraft, CS:GO, and more
- 📝 **WordPress Hosting** - Optimized for WordPress sites
- ☁️ **Nextcloud Hosting** - Private cloud storage solutions

### Additional Services

- 🌍 **Domain Registration** - Register your perfect domain
- 🔄 **Domain Transfer** - Easy domain migration
- 🎛️ **Domain Management** - Complete DNS control
- 📧 **Email Hosting** - Professional email solutions
- 🔒 **SSL Certificates** - Secure your websites
- 🏢 **Reseller Hosting** - Start your hosting business

### Platform Features

- 🎨 **Modern UI/UX** - Intuitive, professional interface
- ⚡ **Lightning Performance** - Optimized for speed
- 📱 **Fully Responsive** - Perfect on all devices
- 🎭 **Smooth Animations** - Enhanced user experience with Framer Motion
- ♿ **Accessibility Compliant** - WCAG 2.1 Level AA standards
- 🎯 **SEO Optimized** - Built for search engine visibility


---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | TailwindCSS 4 |
| **Animations** | Framer Motion |
| **Routing** | React Router |
| **Typography** | Inter (Google Fonts) |
| **Icons** | Heroicons |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
flarelax/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, logos, media files
│   ├── components/           # React components
│   │   ├── Navbar.jsx       # Main navigation with mega menu
│   │   ├── home.jsx         # Landing page components
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Page components
│   │   ├── About.jsx        # About us page
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Login.jsx        # User authentication
│   │   ├── Signup.jsx       # User registration
│   │   ├── GameHosting.jsx  # Game hosting services
│   │   ├── PrivacyPolicy.jsx
│   │   ├── RefundPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── services/        # Service pages
│   │   │   ├── WebHosting.jsx
│   │   │   ├── VPSHosting.jsx
│   │   │   ├── CloudHosting.jsx
│   │   │   ├── DedicatedServer.jsx
│   │   │   ├── MinecraftHosting.jsx
│   │   │   ├── CSGOHosting.jsx
│   │   │   ├── WordPressHosting.jsx
│   │   │   ├── NextcloudHosting.jsx
│   │   │   ├── ResellerHosting.jsx
│   │   │   ├── DomainRegistration.jsx
│   │   │   ├── DomainTransfer.jsx
│   │   │   ├── DomainManagement.jsx
│   │   │   ├── EmailHosting.jsx
│   │   │   └── SSLCertificates.jsx
│   │   └── Resources/       # Resource pages
│   │       ├── Blog.jsx
│   │       ├── BlogPost.jsx
│   │       ├── Community.jsx
│   │       ├── Documentation.jsx
│   │       └── KnowledgeBase.jsx
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles & animations
│   └── App.css              # Component-specific styles
├── eslint.config.js         # ESLint configuration
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/Shriii19/flarelax.git

# Navigate to project directory
cd flarelax

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`


---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

---

## 🌐 Deployment

Flarelax is deployed on **Vercel** with automatic deployments from the main branch.

### Production Deployment

The site is automatically deployed to production on every push to the `main` branch:

```bash
git push origin main
```

### Environment Configuration

Production environment variables are managed through Vercel dashboard. For local development, create a `.env` file:

```env
VITE_API_URL=your_api_endpoint
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
VITE_GOOGLE_ANALYTICS=your_analytics_id
VITE_SUPPORT_EMAIL=support@flarelax.com
```

### Build Optimization

The production build is optimized with:
- Code splitting and lazy loading
- Asset compression and minification
- Tree shaking for smaller bundle sizes
- Image optimization
- CSS purging with TailwindCSS

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| **Lighthouse Performance** | 95+ |
| **First Contentful Paint** | < 1.5s |
| **Time to Interactive** | < 3.5s |
| **Bundle Size (gzipped)** | < 200KB |
| **Cumulative Layout Shift** | < 0.1 |

---

## 🎨 Customization

### Brand Colors

Modify the color scheme in `src/index.css`:

```css
/* Update gradient colors */
.gradient-primary {
  background: linear-gradient(to right, #your-color-1, #your-color-2);
}
```

### Adding New Routes

1. Create page component in `src/pages/`
2. Import and configure route in `App.jsx`
3. Add navigation link in `Navbar.jsx`
4. Update footer links in `Footer.jsx`

### Animation Customization

- **CSS Animations**: Defined in `src/index.css`
- **Framer Motion**: Configured within component files
- **Transition Duration**: Adjust timing in component props

---

## 📖 Documentation

### Available Pages

#### Core Pages
- 🏠 **Home** - Landing page with hero, features, pricing, testimonials
- 📖 **About** - Company information and mission
- 📞 **Contact** - Contact form and support information
- 🔐 **Login/Signup** - User authentication system

#### Service Pages
All hosting services are fully documented with:
- Feature comparison tables
- Pricing details
- Technical specifications
- Getting started guides

#### Legal Pages
- Privacy Policy
- Terms of Service
- Refund Policy

#### Resources
- Blog and articles
- Knowledge base
- Documentation
- Community forums

---

## 🔒 Security

- ✅ SSL/TLS encryption for all connections
- ✅ Secure authentication and authorization
- ✅ Regular security updates and patches
- ✅ GDPR and data protection compliance
- ✅ DDoS protection
- ✅ Regular security audits

---

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add appropriate tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with industry-leading technologies:

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Router](https://reactrouter.com/) - Client-side routing
- [Heroicons](https://heroicons.com/) - Beautiful icon set
- [Vercel](https://vercel.com/) - Hosting and deployment platform

---

## 📧 Contact

### Get in Touch

- 🌐 **Website**: [flarelax.com](https://flarelax.com)
- 📧 **Email**: support@flarelax.com
- 💬 **Live Chat**: Available 24/7 on our website
- 🐦 **Twitter**: [@flarelax](https://twitter.com/flarelax)
- 💼 **LinkedIn**: [Flarelax](https://linkedin.com/company/flarelax)
- 👨‍💻 **GitHub**: [@Shriii19](https://github.com/Shriii19)

### Support Hours

- **Live Chat**: 24/7
- **Email Support**: 24/7
- **Phone Support**: Mon-Fri, 9 AM - 6 PM EST

---

<div align="center">

**⚡ Flarelax - Premium Hosting Made Simple**

Made with ❤️ by the Flarelax Team

[Website](https://flarelax.com) • [Documentation](https://flarelax.com/docs) • [Blog](https://flarelax.com/blog) • [Support](https://flarelax.com/contact)

[![Follow on Twitter](https://img.shields.io/twitter/follow/flarelax?style=social)](https://twitter.com/flarelax)
[![GitHub Stars](https://img.shields.io/github/stars/Shriii19/flarelax?style=social)](https://github.com/Shriii19/flarelax)

</div>
