import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Please read these terms carefully before using our services
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
                 Welcome to Flarelax Technologies. By using our hosting, VPS, or related services, you agree to comply with these Terms of Service. Please read them carefully before using our services.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Service Usage</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Our services are provided for lawful purposes only. You agree not to use them for activities that violate any local, national, or international law, including but not limited to DDoS attacks, phishing, spamming, or malware hosting.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Account Responsibility</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you detect unauthorized use or suspicious activity.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Payment and Billing</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 All services are prepaid unless otherwise agreed. Late or failed payments may lead to suspension or termination of services. We may update pricing or plans with prior notice via email or our website.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We strive to maintain 99.9% uptime. However, temporary outages may occur for maintenance or unforeseen issues. We are not liable for losses caused by downtime beyond our reasonable control.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Your data privacy is important to us. We do not sell, monitor, or access customer systems or data, including Domain, VPS, or VDS services. For details, refer to our <Link to="/privacy-policy" className="text-purple-600 hover:underline">Privacy Policy</Link>.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Prohibited Activities</h2>
               <ul className="space-y-2 text-gray-700 mb-4">
                 <li>• Hosting illegal or copyrighted content without authorization</li>
                 <li>• Running spam, phishing, or malware distribution servers</li>
                 <li>• Using our servers for network attacks or abuse</li>
               </ul>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Suspension or Termination</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We reserve the right to suspend or terminate accounts violating these terms. In case of repeated or severe abuse, services may be terminated without refund.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Flarelax Technologies is not responsible for indirect, incidental, or consequential damages resulting from service use, downtime, or data loss.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Refund Policy</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 Refunds are processed only for eligible cases as per our refund policy. Setup fees and promotional offers are non-refundable.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Modifications</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 We may update these Terms at any time. Any changes will be reflected on this page with the updated date. Continued use of our services after updates indicates acceptance of the new terms.
               </p>
             </div>

             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
               <p className="text-gray-700 leading-relaxed mb-4">
                 For any questions regarding these Terms, please contact us:
               </p>
               <div className="space-y-2">
                 <p>📧 <a href="mailto:support@flare.com" className="text-purple-600 hover:underline">support@flare.com</a></p>
                 <p>🌐 <a href="https://portal.flarelax.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://portal.flarelax.com</a></p>
               </div>
             </div>
           </motion.div>
         </div>
       </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
