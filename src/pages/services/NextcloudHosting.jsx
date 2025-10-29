import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const NextcloudHosting = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const plans = [
    {
      name: 'Nextcloud Basic',
      subtitle: 'S',
      description: 'Perfect for personal use or light file sharing.',
      price: 120,
      popular: false,
      features: [
        '50 GB NVMe Storage',
        '1 Gbit Uplink',
        'Shared IPv4',
        'Own Domain Support',
        'Free Ticket Support',
        'Easy Upgrades',
        'Automatic Backups',
        'SSL Certificate Included'
      ],
      color: 'from-blue-500 to-cyan-500',
      accent: 'border-blue-500',
      bgAccent: 'bg-blue-500'
    },
    {
      name: 'Nextcloud Standard',
      subtitle: 'M',
      description: 'Ideal for small teams or heavier personal use.',
      price: 310,
      popular: true,
      features: [
        '250 GB NVMe Storage',
        '1 Gbit Uplink',
        'Shared IPv4',
        'Own Domain Support',
        'Free Ticket Support',
        'Seamless Upgrade Options',
        'Priority Support',
        'Advanced Security Features',
        'Automatic Backups',
        'SSL Certificate Included'
      ],
      color: 'from-blue-600 to-indigo-600',
      accent: 'border-blue-600',
      bgAccent: 'bg-blue-600'
    },
    {
      name: 'Nextcloud Traffic+',
      subtitle: 'L',
      description: 'Designed for users who need more bandwidth than storage.',
      price: 620,
      popular: false,
      features: [
        '4 TB Traffic',
        '1 Gbit Uplink',
        'Shared IPv4',
        'Free Ticket Support',
        'Upgrade Flexibility',
        'Enhanced Performance',
        'Advanced Monitoring',
        'SSL Certificate Included'
      ],
      color: 'from-indigo-600 to-purple-600',
      accent: 'border-indigo-600',
      bgAccent: 'bg-indigo-600'
    },
    {
      name: 'Nextcloud Premium',
      subtitle: 'XL',
      description: 'Best for businesses or power users.',
      price: 1250,
      popular: false,
      features: [
        '1000 GB NVMe Storage',
        '1 Gbit Uplink',
        'Shared IPv4',
        'Own Domain Support',
        'Free Ticket Support',
        'Easy Upgrade Path',
        'Priority Support 24/7',
        'Enterprise Features',
        'Advanced Security',
        'Automatic Backups',
        'SSL Certificate Included',
        'Dedicated Resources'
      ],
      color: 'from-purple-700 to-indigo-800',
      accent: 'border-purple-700',
      bgAccent: 'bg-purple-700'
    }
  ];

  const faqs = [
    {
      question: 'Can I create more users in my Nextcloud?',
      answer: 'Yes, you can create unlimited users in your Nextcloud instance. There are no restrictions on the number of users you can add to your account.'
    },
    {
      question: 'How fast is my Nextcloud ready for use?',
      answer: 'Your Nextcloud is normally provisioned within 60 seconds of receipt of payment. You\'ll receive an email with all access details as soon as it\'s ready.'
    },
    {
      question: 'What happens when the traffic limit is reached?',
      answer: 'When the traffic limit of your server is reached, the speed of your server will be temporarily limited to 1 Mbps until the next billing cycle. You can upgrade your plan at any time to increase your traffic allowance.'
    },
    {
      question: 'Do I have to cancel my product?',
      answer: 'No, you do not have to cancel your product. Our services are prepaid, so your server will be automatically locked after the end of the term and deleted after 5 days if not renewed.'
    },
    {
      question: 'Can I upgrade my Nextcloud?',
      answer: 'Yes, you can upgrade your Nextcloud plan at any time through our customer portal or by contacting support. The upgrade process is seamless and doesn\'t require any downtime.'
    },
    {
      question: 'In which data centre is my server located?',
      answer: 'Your server is located in the EQ FR7 or EQ FR5 data centre in Frankfurt am Main, Germany. These state-of-the-art facilities offer excellent connectivity, security, and redundancy.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230082C9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-lg p-1">
                <img 
                  src="/nextcloud_header.png" 
                  alt="Nextcloud Logo" 
                  className="h-24 w-24 object-contain"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Nextcloud Hosting
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your own dedicated Nextcloud. Perfect for enterprise use.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: '🔒', text: 'Enterprise Security' },
                { icon: '⚡', text: 'High Performance' },
                { icon: '🌐', text: 'Own Domain' },
                { icon: '💬', text: 'Free Support' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full filter blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect Nextcloud hosting solution for your needs
            </p>
          </motion.div>
          
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1 shadow-inner">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  billingCycle === 'annually'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annually
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide"
                    >
                      ⭐ Most Popular
                    </motion.div>
                  </div>
                )}

                {/* Card */}
                <motion.div 
                  whileHover={{ y: -8 }}
                  className={`relative h-full bg-white rounded-3xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                    plan.popular 
                      ? `${plan.accent} shadow-2xl shadow-blue-100 scale-105` 
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-2xl'
                  }`}
                >
                  
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-br ${plan.color} p-6 text-white relative overflow-hidden`}>
                    {/* Decorative elements */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute right-4 bottom-4 w-8 h-8 bg-white/5 rounded-lg rotate-12"></div>
                    
                    {/* Plan badge */}
                    <div className="relative z-10 mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl text-2xl font-bold border border-white/30">
                        {plan.subtitle}
                      </span>
                    </div>
                    
                    <div className="relative z-10 mb-2">
                      <h3 className="text-xl font-bold mb-1">{plan.name.replace('Nextcloud ', '')}</h3>
                      <p className="text-xs opacity-90 leading-relaxed">{plan.description}</p>
                    </div>
                    
                    {/* Price section with better spacing */}
                    <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm opacity-75">₹</span>
                        <span className="text-4xl font-extrabold tracking-tight">
                          {billingCycle === 'annually' ? Math.floor(plan.price * 0.8 * 12) : plan.price}
                        </span>
                        <span className="text-sm opacity-75 ml-1">
                          /{billingCycle === 'annually' ? 'yr' : 'mo'}
                        </span>
                      </div>
                      {billingCycle === 'annually' && (
                        <p className="text-xs mt-1 opacity-75">
                          ₹{Math.floor(plan.price * 0.8)}/month • Save 20%
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    {/* Features header */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">What's included</h4>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.bgAccent} flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform`}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to="/signup"
                      className={`group/btn block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                          : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 hover:scale-[1.02]'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nextcloud Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Benefit from a dedicated Nextcloud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
                title: 'Admin access',
                description: 'You have full admin access to your Nextcloud.',
                bg: 'from-blue-500 to-blue-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Encryption',
                description: 'Encrypt your data with Nextcloud encryption.',
                bg: 'from-blue-600 to-indigo-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: 'Own domain',
                description: 'Use your own domain for your Nextcloud.',
                bg: 'from-indigo-600 to-purple-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                ),
                title: 'Share files',
                description: 'Share files with your friends and colleagues.',
                bg: 'from-blue-500 to-cyan-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: 'Instant online',
                description: 'Our servers are available at lightning speed! After ordering, they are online and ready for use within 60 seconds.',
                bg: 'from-indigo-500 to-blue-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'No cost traps, everything pre-paid',
                description: 'Our prepaid products offer full cost control: no contract, no hidden costs, no surprise bills. Simply top up and get going!',
                bg: 'from-purple-500 to-indigo-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.bg} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Everything you need to know about our Nextcloud hosting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  expandedFaq === index 
                    ? 'border-blue-500/50 shadow-lg' 
                    : 'border-slate-700/50 hover:border-blue-400/50'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 flex justify-between items-start gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center mt-1">
                      <span className="text-blue-300 font-bold text-sm">?</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  </div>
                  <div className="flex-shrink-0 text-blue-400">
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" opacity="20"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Your Own Nextcloud?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Start with our Basic plan and upgrade anytime as you grow. All plans include a 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 group"
              >
                Get Started Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Sales
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: '🚀', text: '60-second setup' },
                { icon: '🔒', text: '30-day money-back' },
                { icon: '👥', text: '24/7 support' },
                { icon: '⬆️', text: 'Free upgrades' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-blue-100">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default NextcloudHosting;