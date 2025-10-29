import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    category: "Hosting",
    links: [
      { name: "Shared Hosting", path: "/services/web-hosting" },
      { name: "VPS Hosting", path: "/services/vps-hosting" },
      { name: "Dedicated Servers", path: "/services/dedicated-server" },
      { name: "WordPress Hosting", path: "/services/wordpress-hosting" },
      { name: "Reseller Hosting", path: "/services/reseller-hosting" },
      { name: "Email Hosting", path: "/services/email-hosting" }
    ]
  },
  {
    category: "Services",
    links: [
      { name: "Domain Registration", path: "/services/domain-registration" },
      { name: "SSL Certificates", path: "/services/ssl-certificates" },
      { name: "AI Website Builder", path: "/resources/ai-website-builder" },
      { name: "Website Security", path: "/resources/website-security" }
    ]
  },
  {
    category: "Gaming",
    links: [
      { name: "Minecraft Hosting", path: "/services/minecraft-hosting" },
      { name: "CS GO Hosting", path: "/services/csgo-hosting" },
      { name: "Five M Hosting", path: "/services/fivem-hosting" }
    ]
  },
  {
    category: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Nextcloud Hosting", path: "/services/nextcloud-hosting" },
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Refund Policy", path: "/refund-policy" }
    ]
  }
];

const socialIcons = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];



const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Flarelax
                </h2>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium hosting solutions trusted by thousands worldwide. Fast, secure, and reliable services for your online success.
              </p>
            </div>
           
            
            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Follow Us</h3>
              <div className="flex space-x-2.5">
                {socialIcons.map(({ name, href, icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/30 border border-gray-700 hover:border-transparent"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
            {footerLinks.map(({ category, links }, idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider border-b border-gray-800 pb-2">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map(({ name, path }) => (
                    <li key={name}>
                      <Link 
                        to={path} 
                        className="group text-sm text-gray-400 hover:text-purple-400 transition-all duration-200 inline-flex items-center"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-10"></div>

        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 text-center">
            Secure Payment Methods
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Visa */}
            <div className="group bg-white rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 48 16" fill="none">
                <path d="M18.5 1.5L15 14.5h-3l3.5-13h3zm11 8.5c0-3.5-5-3.7-5-5.3 0-.5.5-1 1.5-1.2.5-.1 2-.2 3.5.6l.6-3c-.8-.3-2-.6-3.4-.6-3.6 0-6.1 1.9-6.1 4.6 0 2 1.8 3.1 3.2 3.8 1.4.7 1.9 1.1 1.9 1.7 0 1-1.2 1.4-2.3 1.4-1.9 0-3-.5-3.9-.9l-.7 3.2c.9.4 2.5.7 4.2.8 3.8 0 6.3-1.9 6.3-4.8l.2-.3zm9.3-8.5h-2.8c-.9 0-1.5.2-1.9 1.1l-5.4 12.4h3.8l.8-2h4.6l.4 2h3.4l-3-13zm-4.5 8.5l1.9-5.2.9 5.2h-2.8zm-16-8.5l-3 8.9-.3-1.6c-.6-1.8-2.3-3.8-4.2-4.8l2.7 10h3.8l5.7-13h-3.7v.5z" fill="#1434CB"/>
                <path d="M8.8 1.5H3l-.1.3c4.5 1.1 7.5 3.9 8.7 7.2l-1.3-6.4c-.2-.9-.8-1.1-1.6-1.1h.1z" fill="#FCAE11"/>
              </svg>
            </div>
            
            {/* Mastercard */}
            <div className="group bg-white rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 48 30" fill="none">
                <circle cx="18" cy="15" r="10" fill="#EB001B"/>
                <circle cx="30" cy="15" r="10" fill="#F79E1B"/>
                <path d="M24 7.5c-1.9 1.7-3 4.2-3 7s1.1 5.3 3 7c1.9-1.7 3-4.2 3-7s-1.1-5.3-3-7z" fill="#FF5F00"/>
              </svg>
            </div>

            {/* PayPal */}
            <div className="group bg-[#003087] rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 48 16" fill="none">
                <path d="M6.5 1h7.1c2.4 0 4.3 1.9 4.3 4.3 0 2.4-1.9 4.3-4.3 4.3h-3.3l-.8 3.9H6.5L9 1zm13.2 0h3l-2.5 12.5h-3L19.7 1zm5.5 0h7.1c2.4 0 4.3 1.9 4.3 4.3 0 2.4-1.9 4.3-4.3 4.3h-3.3l-.8 3.9h-3L27.2 1zm13.2 0h3l-2.5 12.5h-3L37.9 1z" fill="white"/>
                <path d="M10.8 3.5h2.8c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4h-2.8l.8-2.8zm14.4 0h2.8c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4h-2.8l.8-2.8z" fill="#009CDE"/>
              </svg>
            </div>

            {/* RuPay */}
            <div className="group bg-white rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 48 16" fill="none">
                <rect width="48" height="16" rx="2" fill="#097939"/>
                <circle cx="12" cy="8" r="5" fill="#086839"/>
                <circle cx="24" cy="8" r="5" fill="#ED7C31"/>
                <text x="30" y="11" fill="white" fontSize="7" fontWeight="bold">RuPay</text>
              </svg>
            </div>

            {/* Discover */}
            <div className="group bg-white rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 48 16" fill="none">
                <rect width="48" height="16" rx="2" fill="#FF6000"/>
                <circle cx="42" cy="8" r="4" fill="white"/>
                <text x="2" y="11" fill="white" fontSize="7" fontWeight="bold">DISCOVER</text>
              </svg>
            </div>

            {/* Diners Club */}
            <div className="group bg-white rounded-lg px-5 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <svg className="h-6" viewBox="0 0 40 16" fill="none">
                <circle cx="12" cy="8" r="7" fill="#0079BE"/>
                <circle cx="20" cy="8" r="7" fill="#0079BE"/>
                <path d="M12 2c-3 0-5.5 2.2-6 5h4c.5-1.7 2.1-3 4-3V2zm0 12c-1.9 0-3.5-1.3-4-3h-4c.5 2.8 3 5 6 5v-2z" fill="white"/>
              </svg>
            </div>

            <Link to="#" className="text-xs text-gray-500 hover:text-purple-400 font-medium px-3 py-2 transition-colors duration-200">+ more</Link>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left max-w-2xl"
            >
              © 2024-{currentYear} <span className="font-semibold text-white">Flarelax</span> - Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-5 items-center justify-center"
            >
              <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium">
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/refund-policy" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium">
                Refund Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium">
                Terms of Service
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs text-gray-500 italic">
              * Project by Shrinivas Mudabe
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;