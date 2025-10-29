import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Choose the Best VPS in India for Developers',
      excerpt: 'Discover the key factors developers should consider when selecting a VPS in India, including performance, pricing, and support for coding projects.',
      category: 'Hosting',
      date: 'Oct 15, 2025',
      readTime: '8 min read',
      image: '💻',
      slug: 'how-to-choose-the-best-vps-in-india-for-developers',
    },
    {
      title: 'Top 5 Cheap VPS Providers in India (Flarelax Featured)',
      excerpt: 'Compare the best affordable VPS hosting providers in India, featuring Flarelax\'s competitive Ryzen-powered plans for developers and businesses.',
      category: 'Hosting',
      date: 'Oct 14, 2025',
      readTime: '6 min read',
      image: '⭐',
      slug: 'top-5-cheap-vps-providers-in-india-flarelax-featured',
    },
    {
      title: 'Why Ryzen VPS is Better Than Intel VPS',
      excerpt: 'Explore the advantages of Ryzen processors in VPS hosting, including better multi-core performance and cost-effectiveness for modern applications.',
      category: 'Hosting',
      date: 'Oct 13, 2025',
      readTime: '5 min read',
      image: '🔧',
      slug: 'why-ryzen-vps-is-better-than-intel-vps',
    },
    {
      title: 'Host Your Minecraft Server Under ₹100 — Flarelax Guide',
      excerpt: 'Learn how to set up and host a Minecraft server for less than ₹100/month with Flarelax\'s affordable gaming hosting solutions.',
      category: 'Gaming',
      date: 'Oct 12, 2025',
      readTime: '7 min read',
      image: '🎮',
      slug: 'host-your-minecraft-server-under-100-flarelax-guide',
    },
    {
      title: 'How to Protect Your VPS from DDoS Attacks in India',
      excerpt: 'Essential security measures and best practices to safeguard your VPS from DDoS attacks, including firewall configuration and monitoring tools.',
      category: 'Security',
      date: 'Oct 11, 2025',
      readTime: '6 min read',
      image: '🛡️',
      slug: 'how-to-protect-your-vps-from-ddos-attacks-in-india',
    },
    {
      title: '10 Essential Tips for WordPress Website Security',
      excerpt: 'Learn how to protect your WordPress site from hackers with these proven security measures and best practices.',
      category: 'Security',
      date: 'Oct 12, 2025',
      readTime: '5 min read',
      image: '🔒',
    },
    {
      title: 'How to Choose the Right Hosting Plan for Your Business',
      excerpt: 'Compare different hosting types and find the perfect solution for your business needs and budget.',
      category: 'Hosting',
      date: 'Oct 10, 2025',
      readTime: '7 min read',
      image: '🚀',
    },
    {
      title: 'Website Speed Optimization: Complete Guide 2025',
      excerpt: 'Boost your website performance with these advanced optimization techniques and caching strategies.',
      category: 'Performance',
      date: 'Oct 8, 2025',
      readTime: '10 min read',
      image: '⚡',
    },
    {
      title: 'Understanding DNS: A Beginner\'s Guide',
      excerpt: 'Learn what DNS is, how it works, and how to manage your domain DNS settings effectively.',
      category: 'Domains',
      date: 'Oct 5, 2025',
      readTime: '6 min read',
      image: '🌐',
    },
    {
      title: 'Email Marketing Best Practices for 2025',
      excerpt: 'Master email marketing with professional email hosting and proven strategies to boost engagement.',
      category: 'Email',
      date: 'Oct 3, 2025',
      readTime: '8 min read',
      image: '📧',
    },
    {
      title: 'VPS vs Dedicated Server: Which is Right for You?',
      excerpt: 'Compare VPS and dedicated server hosting to determine the best option for your growing business.',
      category: 'Hosting',
      date: 'Oct 1, 2025',
      readTime: '6 min read',
      image: '🖥️',
    },
  ];

  const categories = ['All', 'Hosting', 'Security', 'Performance', 'Domains', 'Email', 'Gaming', 'Tutorials'];

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
              <span className="text-sm font-medium text-gray-700">Latest News & Updates</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#9a00ff] via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Our Blog
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Stay updated with the latest hosting tips, tutorials, industry news, and expert insights to help your website succeed.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    idx === 0
                      ? 'bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100 overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-[#9a00ff] text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">• {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9a00ff] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                     <Link to={`/resources/blog/${post.slug}`} className="text-[#9a00ff] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                       Read More
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                     </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <button className="px-8 py-4 bg-white text-[#9a00ff] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200">
              Load More Articles
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20 text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#9a00ff] to-purple-600 text-transparent bg-clip-text">
                Subscribe to Our Newsletter
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest hosting tips, tutorials, and exclusive offers delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-6 py-4 bg-white rounded-xl border-2 border-purple-200 focus:border-[#9a00ff] outline-none text-gray-800"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-[#9a00ff] to-[#7c00cc] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
