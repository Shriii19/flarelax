import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DomainRegistration = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Wide TLD Selection',
      description: 'Choose from .com, .net, .org, .io, and 100+ extensions',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Activation',
      description: 'Domain registered and active within minutes',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Free WHOIS Privacy',
      description: 'Protect your personal information from public view',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Domain Lock',
      description: 'Prevent unauthorized transfers with domain locking',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Easy Management',
      description: 'User-friendly control panel for DNS and settings',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Free DNS Service',
      description: 'Reliable DNS hosting included with every domain',
    },
  ];

  const popularDomains = [
    { extension: '.com', price: '₹999', period: '/year', description: 'Most popular and trusted' },
    { extension: '.net', price: '₹1,199', period: '/year', description: 'Great for networks' },
    { extension: '.org', price: '₹1,099', period: '/year', description: 'Perfect for organizations' },
    { extension: '.io', price: '₹3,199', period: '/year', description: 'Tech startup favorite' },
    { extension: '.co', price: '₹2,399', period: '/year', description: 'Short and memorable' },
    { extension: '.info', price: '₹959', period: '/year', description: 'Informational sites' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <Navbar />

      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Find Your Perfect Domain</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#9a00ff] via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Domain Registration
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Register your domain name today and establish your online presence. Over 100+ domain extensions available with free WHOIS privacy protection.
            </p>

            {/* Domain Search Bar */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-purple-100">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Search for your perfect domain name..."
                    className="flex-1 px-6 py-4 bg-white rounded-xl border-2 border-purple-200 focus:border-[#9a00ff] outline-none text-gray-800 placeholder-gray-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Search Domain
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#9a00ff] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200"
                >
                  View All Extensions
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Popular Domain Extensions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDomains.map((domain, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-purple-100 text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text mb-3">
                    {domain.extension}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{domain.description}</p>
                  <div className="flex items-end justify-center gap-1 mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                      {domain.price}
                    </span>
                    <span className="text-gray-500 mb-1">{domain.period}</span>
                  </div>
                  <Link to="/signup">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-purple-50 text-[#9a00ff] rounded-xl font-bold border-2 border-purple-200 hover:bg-purple-100 transition-all"
                    >
                      Register Now
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Domain Features
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-purple-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Ready to Register Your Domain?
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Start building your online presence today with a professional domain name.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all"
                >
                  Get Started →
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#9a00ff] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200"
                >
                  Sign In
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DomainRegistration;
