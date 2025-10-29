import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-2xl"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Your privacy is important to us
            </p>

            <p className="text-sm text-gray-500">
              Last updated: October 17, 2025
            </p>
          </motion.div>
        </div>
      </section>

       {/* Content Section */}
       <section className="py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="prose prose-lg max-w-none"
           >
             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 This Privacy Policy outlines how Flarelax Technologies ("we", "our", or "us") collects, uses, and safeguards the information of our clients and visitors ("you", "your"). By accessing or using our services, you agree to this policy.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
               <ul className="space-y-2 text-gray-700 mb-4">
                 <li>• Personal data: Name, email, billing address, payment details.</li>
                 <li>• Technical data: IP addresses, server logs, and usage analytics.</li>
                 <li>• Cookies: For session management and analytics improvement.</li>
               </ul>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We use your data to provide, improve, and secure our services. Specifically:
               </p>
               <ul className="space-y-2 text-gray-700 mb-4">
                 <li>• To process orders and deliver services.</li>
                 <li>• To send notifications about updates, outages, or invoices.</li>
                 <li>• To enhance security and prevent fraud or abuse.</li>
                 <li>• To comply with legal and regulatory obligations.</li>
               </ul>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Protection & Security</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We use encryption, firewalls, and restricted access controls to ensure your data remains protected. Sensitive information, including payment data, is encrypted using industry-standard SSL protocols.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Sharing</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We do not sell or rent your data. Limited sharing may occur with:
               </p>
               <ul className="space-y-2 text-gray-700 mb-4">
                 <li>• Payment gateways (for billing processing).</li>
                 <li>• Trusted partners (for support or maintenance).</li>
                 <li>• Law enforcement (when legally required).</li>
               </ul>
               <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                 <p className="text-sm text-gray-700">
                   <strong>🔒 Transparency Statement:</strong> As part of our strict privacy policy, Flarelax Technologies does not monitor, access, or spy on customers' personal services — including but not limited to domains, VPS, or VDS environments. All hosted services and user data remain completely private and confidential.
                 </p>
               </div>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cookies</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Our website uses cookies to store preferences and analyze traffic. You can disable cookies in your browser, though some features may not function properly without them.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 You have the right to access, correct, delete, or restrict your personal data. To make a request, contact our support team at <a href="mailto:support@flare.com" className="text-purple-600 hover:underline">support@flare.com</a>.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">8. International Transfers</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Your data may be transferred to servers located outside your country. We ensure appropriate data protection standards in all jurisdictions we operate.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">9. GDPR Compliance</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Flarelax Technologies complies with GDPR and related data protection laws. We process data lawfully, fairly, and transparently.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We may update this policy from time to time. Changes will be posted on this page, and significant updates may be notified via email or dashboard alerts.
               </p>
               <div className="mt-6">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-sm text-gray-600">Need Help or Have Questions?</p>
                     <p className="font-semibold text-gray-900">
                       <a href="mailto:support@flare.com" className="text-purple-600 hover:underline">Email Support</a> |
                       <a href="https://discord.gg/flarelax" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline ml-1">Discord Support</a>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
