import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const [email, setEmail] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const stats = [
    { 
      value: "99.9%", 
      label: "Uptime Guarantee", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-green-600"
    },
    { 
      value: "24/7", 
      label: "Expert Support", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "text-blue-600"
    },
    { 
      value: "100K+", 
      label: "Happy Customers", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "text-purple-600"
    },
    { 
      value: "<50ms", 
      label: "Response Time", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-orange-600"
    }
  ];

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Shared Hosting",
      description: "Affordable hosting solution for small websites and blogs",
      features: ["10GB SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "24/7 Support"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "VPS Hosting",
      description: "Scalable virtual private servers for growing businesses",
      features: ["50GB SSD Storage", "Dedicated Resources", "Root Access", "Free Migration"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "WordPress Hosting",
      description: "Optimized hosting solution for WordPress websites",
      features: ["1-Click WordPress Install", "Automatic Updates", "Daily Backups", "WP Toolkit"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Cloud Hosting",
      description: "Flexible cloud infrastructure for high-traffic websites",
      features: ["Auto Scaling", "Load Balancing", "Global CDN", "99.9% Uptime"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Email Hosting",
      description: "Professional email solutions for your business",
      features: ["Custom Domain", "50GB Storage", "Spam Protection", "IMAP/POP3 Access"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Dedicated Servers",
      description: "High-performance dedicated hardware for enterprise",
      features: ["Full Root Access", "Dedicated Resources", "DDoS Protection", "Managed Option"]
    }
  ];

  const hostingPlans = [
    {
      name: "Starter",
      monthlyPrice: "2.99",
      yearlyPrice: "1.99",
      popular: false,
      features: ["1 Website", "10GB SSD Storage", "Unlimited Bandwidth", "Free SSL Certificate", "24/7 Support"]
    },
    {
      name: "Business",
      monthlyPrice: "5.99",
      yearlyPrice: "4.99",
      popular: true,
      features: ["5 Websites", "50GB SSD Storage", "Unlimited Bandwidth", "Free SSL & CDN", "Priority Support", "Daily Backups"]
    },
    {
      name: "Professional",
      monthlyPrice: "9.99",
      yearlyPrice: "7.99",
      popular: false,
      features: ["Unlimited Websites", "100GB SSD Storage", "Unlimited Bandwidth", "Free SSL, CDN & Email", "24/7 Priority Support", "Daily Backups", "Free Migration"]
    },
    {
      name: "Enterprise",
      monthlyPrice: "19.99",
      yearlyPrice: "15.99",
      popular: false,
      features: ["Unlimited Websites", "250GB SSD Storage", "Unlimited Bandwidth", "All Professional Features", "Dedicated Resources", "SLA Guarantee", "Personal Account Manager"]
    }
  ];

  const technologies = [
    { name: "WordPress", icon: " WP" },
    { name: "cPanel", icon: " CP" },
    { name: "LiteSpeed", icon: " LS" },
    { name: "Cloudflare", icon: " CF" },
    { name: "PHP", icon: " PHP" },
    { name: "MySQL", icon: " SQL" },
    { name: "SSL", icon: " SSL" },
    { name: "CDN", icon: " CDN" }
  ];

  const faqs = [
    {
      question: "What's included in the hosting plans?",
      answer: "All plans include SSD storage, free SSL certificates, daily backups, 24/7 support, and a 99.9% uptime guarantee. Higher-tier plans offer additional features like CDN, staging environments, and dedicated resources."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes! You can upgrade or downgrade your hosting plan at any time. When upgrading, you'll only pay the prorated difference. Downgrades take effect at the next billing cycle."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied, contact our support team for a full refund within 30 days of purchase."
    },
    {
      question: "How long does it take to set up my hosting?",
      answer: "Your hosting account is activated instantly! You'll receive login credentials within minutes and can start building your website right away."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 support via live chat, email, and phone. Our expert team is always ready to help with technical issues, migrations, or general questions about your hosting."
    },
    {
      question: "Can I host multiple websites?",
      answer: "Yes! Our Business, Professional, and Enterprise plans support multiple websites. The Starter plan is limited to 1 website but can be upgraded anytime."
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Flarelax made it so easy to get my business online. The setup was instant and the performance is excellent!"
    },
    {
      name: "Sarah Williams",
      role: "Web Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      text: "I've tried many hosting providers, but Flarelax's reliability and support stand out. My clients' websites have never been faster."
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      text: "The uptime guarantee is real with Flarelax. Our online store has been running smoothly without any downtime for over a year."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Flarelax - Cheap VPS Hosting India, Best VPS Hosting India, Ryzen VPS Hosting | Flarelax Technologies</title>
        <meta name="description" content="Leading cheap VPS hosting India provider. Best VPS hosting India with Ryzen CPUs, Minecraft server hosting India, Discord bot hosting India. Affordable VPS hosting starting ₹999/month." />
        <meta name="keywords" content="cheap vps hosting india, best vps hosting india, affordable vps hosting, ryzen vps hosting india, minecraft server hosting india, discord bot hosting india, cloud vps india, indian game server hosting, flarelax hosting, flarelax vps, cheap linux vps, vps for developers india, ddos protected vps india, vps with ryzen cpu, best vps for gaming servers, low latency vps india, windows vps hosting india, vps with ipv6, ssd vps hosting india, virtual private server india, minecraft hosting india, cheap minecraft server hosting, best minecraft host india, minecraft vps india, game hosting india, vps for minecraft server, budget minecraft host, discord bot hosting india, free discord bot hosting trial, cheap discord bot host, discord python bot host, nodejs bot hosting india" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Flarelax Technologies",
            "url": "https://flarelax.com",
            "logo": "https://flarelax.com/logo.png",
            "description": "Affordable game hosting, VPS hosting, and web hosting solutions with 99.9% uptime guarantee.",

            "serviceType": ["Game Hosting", "VPS Hosting", "Web Hosting"],
            "areaServed": "Worldwide",
            "priceRange": "₹"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-32 px-4 top-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 rounded-full mb-6 md:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold text-blue-800">Trusted by 100,000+ customers worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 leading-tight"
            >
              Cheap VPS Hosting India
              <br />
              <span className="text-blue-600">Best VPS Hosting India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Get the best VPS hosting India with Ryzen CPUs, Minecraft server hosting India, and Discord bot hosting India.
              <span className="block mt-2 font-semibold text-gray-900">Starting ₹999/month with 99.9% uptime guarantee and 24/7 expert support.</span>
            </motion.p>

            {/* Stats - Enhanced with icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4 sm:px-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Professional Hosting Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, deploy, and grow your online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all">
                  <div className={`inline-flex p-3 rounded-lg mb-4 text-blue-600 ${hoveredCard === index ? 'bg-blue-100' : 'bg-gray-100'} transition-colors`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Technologies */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Works With Your Favorite Tools
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Support for all major platforms and technologies
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-all w-24 md:w-32 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{tech.icon}</div>
                <div className="text-xs md:text-sm font-semibold text-gray-900">{tech.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 lg:p-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-gray-900">
              Why Choose Flarelax?
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">Powered by LiteSpeed servers for unmatched performance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">24/7 Expert Support</h3>
                <p className="text-gray-600">Our team is always ready to help you succeed</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Instant Setup</h3>
                <p className="text-gray-600">Get your website online in minutes, not hours</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Daily Backups</h3>
                <p className="text-gray-600">Automatic daily backups to protect your data</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Global CDN</h3>
                <p className="text-gray-600">Deliver content faster with our global network</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Trusted by Thousands
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Join thousands of satisfied customers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4 border-2 border-blue-500"
                  />
                  <div>
                    <div className="font-bold text-base md:text-lg text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs md:text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1 mt-3 md:mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Everything you need to know about our hosting services
            </p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 md:px-8 py-4 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-all"
                >
                  <span className="text-base md:text-lg font-bold text-gray-900 pr-4 md:pr-8">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 md:w-6 md:h-6 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-8 pb-4 md:pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-32 px-4 relative mb-0">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 lg:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto">
                Join thousands of businesses who trust Flarelax for their hosting needs. Start your free trial today!
              </p>
              <a href="https://portal.flarelax.com/register.php" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 md:px-12 md:py-6 bg-white text-blue-600 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial →
                </motion.button>
              </a>
              <p className="text-blue-100 text-xs md:text-sm mt-6 font-semibold">
                ✓ No credit card required  •  ✓ 30-day money-back guarantee  •  ✓ Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Home;