<div align="center">

<img src="public/logo.png" alt="Flarelax Logo" width="120" height="120" />

# ⚡ Flarelax

### Premium Web Hosting & Domain Management Platform

[![Live Site](https://img.shields.io/badge/Live-Production-success?style=for-the-badge&logo=vercel)](https://flarelax.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**[Visit Live Site](https://flarelax.com)** • **[Documentation](#-documentation)** • **[Contact](#-contact)**

---

</div>

## 📋 Overview

Flarelax is a **production-ready, enterprise-grade** web hosting platform designed to deliver **speed, reliability, and affordability** — **optimized for India**.

**🌐 Live Platform**: [https://flarelax.com](https://flarelax.com)

### ✨ Key Highlights

- ✅ **Live & Production-Ready** – Serving real users
- 🚀 **99.9% Uptime Guarantee** – Enterprise infrastructure
- 🔒 **Free SSL + DDoS Protection** – Built-in security
- 💬 **24/7 Support** – <50ms response time
- 🌍 **Global CDN + LiteSpeed** – Lightning-fast loading

---

## 🚀 Features

### 🖥️ Hosting Solutions

- 🌐 **Shared Hosting** – For websites & blogs
- ☁️ **Cloud Hosting** – Auto-scaling for high traffic
- 🖥️ **VPS Hosting** – Ryzen CPU, full root access
- 🔧 **Dedicated Servers** – Max performance
- 🎮 **Game Hosting** – Minecraft, CS:GO, Discord bots
- 📝 **WordPress Hosting** – 1-click install, auto-updates
- ☁️ **Nextcloud Hosting** – Private cloud storage

### 🔧 Additional Services

- 🌍 **Domain Registration & Transfer**
- 🎛️ **Full DNS Management**
- 📧 **Professional Email Hosting**
- 🔒 **SSL Certificates** (Free & Premium)
- 🏢 **Reseller Hosting** – Start your own brand

### 🎯 Platform Features

- 🎨 **Modern UI/UX** – Clean, animated, responsive
- ⚡ **Lightning Performance** – Vite + Tailwind
- 🎯 **SEO Optimized** – Built for Google
- ♿ **WCAG 2.1 AA Compliant** – Accessible to all

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | TailwindCSS 4 |
| **Animations** | Framer Motion |
| **Routing** | React Router |
| **Icons** | Heroicons |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
flarelax/
├── public/                    # Static files
├── src/
│   ├── assets/               # Images & media
│   ├── components/           # Navbar, Footer, Hero
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── home.jsx
│   ├── pages/                # All pages
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── GameHosting.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── RefundPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── services/         # Service pages
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
│   │   └── Resources/        # Resource pages
│   │       ├── Blog.jsx
│   │       ├── BlogPost.jsx
│   │       ├── Community.jsx
│   │       ├── Documentation.jsx
│   │       └── KnowledgeBase.jsx
│   ├── App.jsx               # Routes
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   └── App.css               # Component styles
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── vercel.json               # Vercel deployment config
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🏁 Getting Started

### 📋 Prerequisites

- **Node.js** 18+ or higher
- **npm** 9+ (or pnpm/yarn)

### ⚡ Installation

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

**Open**: [http://localhost:5173](http://localhost:5173)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |

---

## 🌐 Deployment

**Live on Vercel** – Auto-deploy on push to `main`

```bash
git push origin main
```

### Environment Variables

Create a `.env` file for local development:

```env
VITE_API_URL=your_api_endpoint
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
VITE_GOOGLE_ANALYTICS=your_analytics_id
VITE_SUPPORT_EMAIL=support@flarelax.com
```

---

## 📊 Performance

| Metric | Score |
|--------|-------|
| **Lighthouse** | 95+ |
| **First Paint** | < 1.5s |
| **Time to Interactive** | < 3.5s |
| **Bundle Size** | < 200KB |

---

## 📖 Documentation

### Available Pages

- **Home** – Hero, pricing, testimonials, FAQ
- **Services** – 20+ hosting pages with detailed specs
- **Legal** – Privacy Policy, Terms, Refund Policy
- **Resources** – Blog, Documentation, Community

---

## 🔒 Security

- ✅ **SSL/TLS Everywhere** – End-to-end encryption
- ✅ **Secure Auth (JWT)** – Token-based authentication
- ✅ **DDoS Protection** – Enterprise-grade defense
- ✅ **GDPR Compliant** – Data protection standards
- ✅ **Regular Security Audits** – Continuous monitoring

---

## 🤝 Contributing

We welcome contributors! Help make **Flarelax India's #1 Hosting Platform**.

### 💡 How to Contribute

```bash
# 1. Fork the repository

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/flarelax.git

# 3. Create a feature branch
git checkout -b feature/your-feature

# 4. Make changes and commit
git add .
git commit -m "feat: Add your feature"

# 5. Push and open Pull Request
git push origin feature/your-feature
```

### 📝 Contribution Rules

- ✅ **Follow code style** – Use Prettier & ESLint
- ✅ **Write clear commit messages** – `feat:`, `fix:`, `docs:`
- ✅ **One PR = One Feature** – Keep it focused
- ✅ **Add tests** if adding new logic
- ✅ **Update docs** if changing UI/behavior
- ✅ **No force pushes** to main
- ✅ **Be respectful** – Kind & professional communication

**Label your PR**: `enhancement`, `bug`, `docs`, `good first issue`

---

## 📄 License

**MIT License** – Free to use, modify, and share.

See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

### Get in Touch

- 🌐 **Website**: [https://flarelax.com](https://flarelax.com)
- 📧 **Email**: [support@flarelax.com](mailto:support@flarelax.com)
- 💬 **Live Chat**: Available 24/7 on our website
- 🐦 **Twitter**: [@flarelax](https://twitter.com/flarelax)
- 💼 **LinkedIn**: [Flarelax](https://linkedin.com/company/flarelax)
- 👨‍💻 **GitHub**: [@Shriii19](https://github.com/Shriii19)

### 🕐 Support Hours

- **Live Chat**: 24/7
- **Email Support**: 24/7

---

<div align="center">

**⚡ Flarelax - Premium Hosting Made Simple**

Made with ❤️ by the Flarelax Team

[Website](https://flarelax.com) • [Blog](https://flarelax.com/blog) • [Support](https://flarelax.com/contact)

[![Follow on Twitter](https://img.shields.io/twitter/follow/flarelax?style=social)](https://twitter.com/flarelax)
[![GitHub Stars](https://img.shields.io/github/stars/Shriii19/flarelax?style=social)](https://github.com/Shriii19/flarelax)

</div>
