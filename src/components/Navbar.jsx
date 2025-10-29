import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect with smooth behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Promotional Stripe */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#9a00ff] via-purple-600 to-[#9a00ff] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold">
            Now get a 20% discount on gaming hosting!{' '}
            <a href="/games" className="underline hover:text-purple-200 transition-colors font-bold">
              Click here
            </a>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`} style={{ top: '40px' }}>
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* LEFT: Logo and brand */}
          <Link to="/" className="flex items-center space-x-3 md:space-x-4 group/logo flex-shrink-0 cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl md:rounded-2xl blur-md opacity-30 group-hover/logo:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl md:rounded-2xl shadow-lg">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
                Flarelax
              </span>
              <span className="text-[8px] md:text-[10px] text-purple-600 font-semibold tracking-widest uppercase -mt-1 whitespace-nowrap">Professional Hosting</span>
            </div>
          </Link>

          {/* CENTER: Navigation links */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
            
            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="group/nav relative px-3 py-2 overflow-hidden rounded-lg transition-all duration-300 text-gray-700 hover:text-[#9a00ff] font-medium">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9a00ff] scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-1">
                  <span className="text-sm">Services</span>
                  <svg className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Services Dropdown Menu - Professional design */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] md:w-[900px] transition-all duration-300 ${
                activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="relative bg-white border border-gray-200 rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Hosting Services Column */}
                    <div>
                      <h3 className="text-xs font-bold text-black-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        Hosting Services
                      </h3>
                      <ul className="space-y-1">
                        <li>
                          <Link to="/services/web-hosting" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Web Hosting</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Fast & reliable shared hosting</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/vps-hosting" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">VPS Hosting</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Scalable virtual servers</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/dedicated-server" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Dedicated Server</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Enterprise-grade hardware</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/cloud-hosting" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Cloud Hosting</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Scalable cloud infrastructure</p>
                          </Link>
                        </li>              
                      </ul>
                    </div>

                    {/* Domain Services Column */}
                    <div>
                      <h3 className="text-xs font-bold text-black-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Domain Services
                      </h3>
                      <ul className="space-y-1">
                        <li>
                          <Link to="/services/domain-registration" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Register a New Domain</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Find your perfect domain</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/domain-transfer" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Transfer Domains to Us</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Easy domain migration</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/domain-management" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Domain Management</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Manage all your domains</p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Game Hosting Column */}
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                        Game Hosting
                      </h3>
                      <ul className="space-y-1">
                        <li>
                          <Link to="/services/minecraft-hosting" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Minecraft</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Optimized Minecraft servers</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/csgo-hosting" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">CS GO</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Counter-Strike game servers</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/fivem-hosting" className="group block p-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Five M</div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1 ml-4">Gta V RP server</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="group/nav relative px-3 py-2 overflow-hidden rounded-lg transition-all duration-300 text-gray-700 hover:text-[#9a00ff] font-medium">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9a00ff] scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-1">
                  <span className="text-sm">Resources</span>
                  <svg className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Resources Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] md:w-[600px] transition-all duration-300 ${
                activeDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="relative bg-white border border-gray-200 rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/resources/documentation" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="font-medium text-gray-900">Documentation</div>
                            <p className="text-sm text-gray-600 mt-1">Guides and tutorials</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/knowledgebase" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="font-medium text-gray-900">Knowledge Base</div>
                            <p className="text-sm text-gray-600 mt-1">Answers to common questions</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/resources/blog" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="font-medium text-gray-900">Blog</div>
                            <p className="text-sm text-gray-600 mt-1">Latest news and updates</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/community" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="font-medium text-gray-900">Community</div>
                            <p className="text-sm text-gray-600 mt-1">Connect with other users</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Status */}
            <a
              href="#"
              className="group/nav relative px-3 py-2 overflow-hidden rounded-lg transition-all duration-300 text-gray-700 hover:text-[#9a00ff] font-medium"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9a00ff] scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300"></div>
              <span className="text-sm">Network Status</span>
            </a>

          </div>

          {/* RIGHT: Contact Us, Sign In, and Get Started */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Contact Us */}
            <Link
              to="/contact"
              className="group/nav relative px-3 py-2 overflow-hidden rounded-lg transition-all duration-300 text-gray-700 hover:text-[#9a00ff] font-medium"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9a00ff] scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300"></div>
              <span className="text-sm">Contact Us</span>
            </Link>

            {/* Client Portal */}
            <a
              href="https://portal.flarelax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/nav relative px-3 py-2 overflow-hidden rounded-lg transition-all duration-300 text-gray-700 hover:text-[#9a00ff] font-medium"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9a00ff] scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300"></div>
              <span className="text-sm">Client Portal</span>
            </a>

            {/* Sign In button */}
            <a 
              href="https://portal.flarelax.com/index.php/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 hover:text-[#9a00ff] transition-colors font-medium text-sm"
            >
              Sign In
            </a>
            
            {/* Get Started button - #9a00ff background */}
            <a 
              href="https://portal.flarelax.com/register.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#9a00ff] hover:bg-[#8000dd] text-white font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300" 
              style={{borderRadius: '8px'}}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button - Always visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors menu-button z-50 relative"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white rounded-lg shadow-lg absolute top-full left-4 right-4 mt-2 border border-gray-200 mobile-menu z-40 ${
          isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1">
            {/* Services Section */}
            <div className="px-6 py-2">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Services</div>
              <div className="space-y-1">
                <Link
                  to="/services/web-hosting"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Web Hosting
                </Link>
                <Link
                  to="/services/vps-hosting"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VPS Hosting
                </Link>
                <Link
                  to="/services/minecraft-hosting"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Minecraft Hosting
                </Link>
                <Link
                  to="/services/dedicated-server"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dedicated Server
                </Link>
                <Link
                  to="/services/cloud-hosting"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cloud Hosting
                </Link>
                <Link
                  to="/services/wordpress-hosting"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WordPress Hosting
                </Link>
              </div>
            </div>

            {/* Resources Section */}
            <div className="px-6 py-2 border-t border-gray-100">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Resources</div>
              <div className="space-y-1">
                <Link
                  to="/resources/blog"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/resources/documentation"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  to="/resources/knowledgebase"
                  className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Knowledge Base
                </Link>
              </div>
            </div>

            {/* Other Links */}
            <div className="px-6 py-2 border-t border-gray-100 space-y-1">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Network Status
              </a>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a
                href="https://portal.flarelax.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </a>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 border-t border-gray-100 mt-2 space-y-3 px-6">
              <a
                href="https://portal.flarelax.com/index.php/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center text-gray-700 hover:text-[#9a00ff] transition-colors font-medium border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                Sign In
              </a>
              <a
                href="https://portal.flarelax.com/register.php"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center bg-[#9a00ff] hover:bg-[#8000dd] text-white rounded-lg font-medium shadow-sm text-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;