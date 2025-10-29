import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicy = () => {
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-2xl"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              Refund Policy
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
              Clear and transparent refund guidelines for all Flarelax Technologies hosting services
            </p>

            <p className="text-sm text-gray-500">
              Effective: September 2025 Last Updated: October 2025
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. VPS, RDP, and Domain Refunds</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
                <h3 className="font-bold text-red-900 mb-2">No Refund Policy</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• <strong>No refunds</strong> will be issued for VPS, RDP, or Domain purchases once activated.</li>
                  <li>• Refunds are not applicable for misuse, misconfiguration, or user error.</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> All VPS, RDP, and Domain services are considered activated immediately upon successful payment processing.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Minecraft Hosting Refunds</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                <h3 className="font-bold text-blue-900 mb-2">48-Hour Refund Window</h3>
                <p className="text-sm text-blue-700 mb-2">
                  Refunds are available <strong>within 48 hours</strong> of purchase only if there is a <strong>technical issue from our side</strong> that cannot be resolved.
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• No refunds after 48 hours under any circumstances.</li>
                  <li>• No refunds for configuration errors, plugin issues, or user mistakes.</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-2">Refund Eligible</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Server fails to start due to our technical issues</li>
                    <li>• Persistent connectivity problems on our end</li>
                    <li>• Hardware failures affecting service delivery</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h3 className="font-bold text-gray-900 mb-2">Not Eligible</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Plugin compatibility issues</li>
                    <li>• User configuration mistakes</li>
                    <li>• Performance not meeting expectations</li>
                    <li>• Change of mind or requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Dedicated Server Refunds</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-1">Before Activation</h3>
                  <p className="text-sm text-gray-600">Refunds for dedicated servers will only be provided <strong>if the service is not delivered or activated</strong>.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50 rounded-r-xl">
                  <h3 className="font-bold text-gray-900 mb-1">After Activation</h3>
                  <p className="text-sm text-gray-600">Once activated, refunds are not possible under any circumstances.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Service Suspension or Ban</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
                <h3 className="font-bold text-red-900 mb-2">No Refunds for Violations</h3>
                <p className="text-sm text-red-700 mb-2">
                  If your service is terminated due to policy violations, <strong>no refunds</strong> will be issued.
                </p>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Policy violations include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Use of abuse, DDoS tools, or stress testing software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Illegal activities (hacking, phishing, spam, malware)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Network abuse or excessive resource usage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Payment Disputes</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-yellow-900 mb-2">Chargeback Warning</h3>
                <p className="text-sm text-yellow-700 mb-2">
                  Raising false chargebacks or disputes may result in immediate account termination and blacklisting from future services.
                </p>
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> Always contact our support team before initiating any payment disputes to resolve issues amicably.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. How to Request a Refund</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-blue-900 mb-2">Contact Information</h3>
                <p className="text-sm text-blue-700 mb-2">
                  All refund-related queries must be made via ticket or email at:
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">support@flarelax.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      <a href="https://discord.gg/flarelax" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Discord Support</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Create a support ticket</h3>
                    <p className="text-sm text-gray-600">with your order details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Our team will review</h3>
                    <p className="text-sm text-gray-600">your refund request</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Processing time</h3>
                    <p className="text-sm text-gray-600">3-5 business days</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• All refund requests must include detailed information about the issue</li>
                  <li>• Screenshots or error logs may be required for technical issues</li>
                  <li>• Refunds will be processed to the original payment method</li>
                  <li>• Processing may take 3-7 business days depending on your payment provider</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with a Refund?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our support team is here to help you with any refund-related questions or concerns.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email Support</p>
                    <p className="font-semibold text-gray-900">
                      <a href="mailto:support@flarelax.com" className="text-green-600 hover:underline">support@flarelax.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Discord Support</p>
                    <p className="font-semibold text-gray-900">
                      <a href="https://discord.gg/flarelax" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Discord Support</a>
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

export default RefundPolicy;