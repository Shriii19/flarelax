import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const VPSHosting = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Dedicated Resources',
      description: 'Get guaranteed CPU, RAM, and storage resources for consistent performance',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Ultra-Fast NVMe SSD',
      description: 'Lightning-fast NVMe SSD storage for maximum performance',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Full Root Access',
      description: 'Complete control over your server with full root/administrator access',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Scalable Resources',
      description: 'Easily upgrade CPU, RAM, and storage as your needs grow',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'DDoS Protection',
      description: 'Enterprise-grade DDoS protection keeps your server secure',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Instant Setup',
      description: 'Get your VPS deployed and ready within minutes',
    },
  ];

  const plans = [
    {
      name: 'KVM-1',
      price: '₹999.00',
      period: '/mo',
      description: 'Entry-level VPS hosting',
      url: 'https://portal.flarelax.com/index.php/store/vps-hosting/kvm-1',
      features: [
        '8 GB DDR5 RAM',
        '2vCore (Amd Ryzen 7 7700X)',
        '3.80 GHz Base clock',
        '5.30 GHz Max Boost (Turbo)',
        '50 GB NVMe Storage',
        'Delhi IN Located',
        '200GB Bandwidth',
        '1 Dedicated IPv4 IP Config',
        '(Linux) Operating System',
      ],
    },
    {
      name: 'KVM-2',
      price: '₹1,650.00',
      period: '/mo',
      description: 'Balanced performance VPS',
      popular: true,
      url: 'https://portal.flarelax.com/index.php/store/vps-hosting/kvm-2',
      features: [
        '16 GB DDR5 RAM',
        '4vCore (Amd Ryzen 7 7700X)',
        '3.80 GHz Base clock',
        '5.30 GHz Max Boost (Turbo)',
        '80 GB NVMe Storage',
        'Delhi IN Located',
        '200GB Bandwidth',
        '1 Dedicated IPv4 IP Config',
        '(Linux) Operating System',
      ],
    },
    {
      name: 'KVM-3',
      price: '₹2,400.00',
      period: '/mo',
      description: 'High-performance VPS',
      url: 'https://portal.flarelax.com/index.php/store/vps-hosting/kvm-3',
      features: [
        '24 GB DDR5 RAM',
        '6vCore (Amd Ryzen 7 7700X)',
        '3.80 GHz Base clock',
        '5.30 GHz Max Boost (Turbo)',
        '100 GB NVMe Storage',
        'Delhi IN Located',
        '200GB Bandwidth',
        '1 Dedicated IPv4 IP Config',
        '(Linux) Operating System',
      ],
    },
    {
      name: 'KVM-4',
      price: '₹3,100.00',
      period: '/mo',
      description: 'Enterprise VPS solution',
      url: 'https://portal.flarelax.com/index.php/store/vps-hosting/kvm-4',
      features: [
        '32 GB DDR5 RAM',
        '8vCore (Amd Ryzen 7 7700X)',
        '3.80 GHz Base clock',
        '5.30 GHz Max Boost (Turbo)',
        '120 GB NVMe Storage',
        'Delhi IN Located',
        '200GB Bandwidth',
        '1 Dedicated IPv4 IP Config',
        '(Linux) Operating System',
      ],
    },
    {
      name: 'KVM-5',
      price: '₹5,740.00',
      period: '/mo',
      description: 'Maximum power VPS',
      url: 'https://portal.flarelax.com/index.php/store/vps-hosting/kvm-5',
      features: [
        '64 GB DDR5 RAM',
        '12vCore (Amd Ryzen 7 7700X)',
        '3.80 GHz Base clock',
        '5.30 GHz Max Boost (Turbo)',
        '150 GB NVMe Storage',
        'Delhi IN Located',
        '200GB Bandwidth',
        '1 Dedicated IPv4 IP Config',
        '(Linux) Operating System',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cheap VPS Hosting India - Best VPS Hosting India with Ryzen CPUs | Flarelax</title>
        <meta name="description" content="Get the best VPS hosting India with Ryzen 7 7700X processors. Cheap VPS hosting India starting ₹999/month. NVMe SSD, DDoS protection, full root access for developers and gamers." />
        <meta name="keywords" content="cheap vps hosting india, best vps hosting india, ryzen vps hosting india, vps for developers india, ddos protected vps india, vps with ryzen cpu, low latency vps india, ssd vps hosting india, virtual private server india, flarelax vps, cheap linux vps, windows vps hosting india, vps with ipv6" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <Navbar />

      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Powerful & Scalable VPS Hosting</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#9a00ff] via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Cheap VPS Hosting India
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Best VPS hosting India with Ryzen 7 7700X processors. Affordable VPS servers starting ₹999/month for developers, gamers, and businesses. Full root access, NVMe SSD, DDoS protection.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://portal.flarelax.com/register.php" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all"
                >
                  Get Started Now →
                </motion.button>
              </a>
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#9a00ff] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Why Choose Our VPS Hosting?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
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

          {/* Pricing Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Choose Your VPS Plan
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl transition-all ${
                    plan.popular
                      ? 'border-2 border-[#9a00ff] scale-105'
                      : 'border border-purple-100 hover:border-purple-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 mb-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={plan.url} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-xl font-bold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white shadow-lg shadow-purple-500/30'
                          : 'bg-purple-50 text-[#9a00ff] border-2 border-purple-200 hover:bg-purple-100'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Ready for Full Control?
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Experience the power of dedicated resources with our VPS hosting. Get started with full root access and dedicated support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://portal.flarelax.com/register.php" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all"
                >
                  Get Started →
                </motion.button>
              </a>
              <a href="https://portal.flarelax.com/login.php" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#9a00ff] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200"
                >
                  Sign In
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default VPSHosting;
