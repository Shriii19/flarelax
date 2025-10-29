import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const KnowledgeBase = () => {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'How do I get started with web hosting?',
          answer: 'Sign up for an account, choose your hosting plan, and follow our setup wizard to get your website online in minutes.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time from your account dashboard. Changes take effect immediately.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'How do I access my control panel?',
          answer: 'Log in to your account and click on the "Control Panel" button. You can access cPanel directly from there.',
        },
        {
          question: 'How do I install WordPress?',
          answer: 'Use our one-click installer in cPanel under "Softaculous Apps Installer" to install WordPress automatically.',
        },
        {
          question: 'What PHP version do you support?',
          answer: 'We support PHP 7.4, 8.0, 8.1, and 8.2. You can switch versions from your control panel.',
        },
      ],
    },
    {
      category: 'Email',
      questions: [
        {
          question: 'How do I create an email account?',
          answer: 'Go to cPanel > Email Accounts, enter the desired email address and password, then click Create.',
        },
        {
          question: 'What are the email server settings?',
          answer: 'Incoming: mail.yourdomain.com (IMAP: 993, POP3: 995) | Outgoing: mail.yourdomain.com (SMTP: 465)',
        },
        {
          question: 'How much email storage do I get?',
          answer: 'Email storage depends on your plan. Starter: 5GB, Business: 25GB, Professional: 50GB per mailbox.',
        },
      ],
    },
    {
      category: 'Domains',
      questions: [
        {
          question: 'How long does domain registration take?',
          answer: 'Domain registration is instant. You can start using your domain within minutes of purchase.',
        },
        {
          question: 'How do I transfer my domain to you?',
          answer: 'Unlock your domain at your current registrar, get the authorization code, and initiate transfer from our domain transfer page.',
        },
        {
          question: 'What is WHOIS privacy protection?',
          answer: 'WHOIS privacy hides your personal information from the public WHOIS database to prevent spam and identity theft.',
        },
      ],
    },
    {
      category: 'Billing',
      questions: [
        {
          question: 'When will I be billed?',
          answer: 'You are billed at the start of each billing cycle (monthly or annually) based on your chosen plan.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee on all hosting plans. Domain registrations are non-refundable.',
        },
        {
          question: 'How do I cancel my account?',
          answer: 'You can cancel your account anytime from your account dashboard under "Billing > Cancel Service".',
        },
      ],
    },
    {
      category: 'Security',
      questions: [
        {
          question: 'Do you provide SSL certificates?',
          answer: 'Yes, we provide free SSL certificates with all hosting plans. Premium SSL options are also available.',
        },
        {
          question: 'How often are backups performed?',
          answer: 'We perform daily automated backups. You can also create manual backups anytime from cPanel.',
        },
        {
          question: 'What security measures do you have?',
          answer: 'We use firewalls, DDoS protection, malware scanning, and regular security updates to keep your data safe.',
        },
      ],
    },
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
              <span className="text-sm font-medium text-gray-700">Answers to Common Questions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#9a00ff] via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Knowledge Base
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Find quick answers to frequently asked questions. Browse by category or search for specific topics.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-purple-100">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl hover:shadow-lg transition-all">
                    Search
                  </button>
                </div>
              </div>
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
                Frequently Asked Questions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-purple-100"
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text mb-6">
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.questions.map((item, i) => (
                      <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#9a00ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item.question}</span>
                        </h4>
                        <p className="text-gray-600 ml-7">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Still Have Questions?
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is available 24/7 to help you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all"
                >
                  Contact Support
                </motion.button>
              </a>
              <Link to="/resources/documentation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#9a00ff] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200"
                >
                  View Documentation
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

export default KnowledgeBase;
