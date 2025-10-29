import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Lazy load all components
const Home = React.lazy(() => import('./components/home'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const WebHosting = React.lazy(() => import('./pages/services/WebHosting'));
const VPSHosting = React.lazy(() => import('./pages/services/VPSHosting'));
const DedicatedServer = React.lazy(() => import('./pages/services/DedicatedServer'));
const WordPressHosting = React.lazy(() => import('./pages/services/WordPressHosting'));
const CloudHosting = React.lazy(() => import('./pages/services/CloudHosting'));
const ResellerHosting = React.lazy(() => import('./pages/services/ResellerHosting'));
const EmailHosting = React.lazy(() => import('./pages/services/EmailHosting'));
const SSLCertificates = React.lazy(() => import('./pages/services/SSLCertificates'));
const DomainRegistration = React.lazy(() => import('./pages/services/DomainRegistration'));
const DomainTransfer = React.lazy(() => import('./pages/services/DomainTransfer'));
const DomainManagement = React.lazy(() => import('./pages/services/DomainManagement'));
const MinecraftHosting = React.lazy(() => import('./pages/services/MinecraftHosting'));
const CSGOHosting = React.lazy(() => import('./pages/services/CSGOHosting'));
const NextcloudHosting = React.lazy(() => import('./pages/services/NextcloudHosting'));
const GameHosting = React.lazy(() => import('./pages/GameHosting'));
const About = React.lazy(() => import('./pages/About'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const Documentation = React.lazy(() => import('./pages/Resources/Documentation'));
const KnowledgeBase = React.lazy(() => import('./pages/Resources/KnowledgeBase'));
const Blog = React.lazy(() => import('./pages/Resources/Blog'));
const BlogPost = React.lazy(() => import('./pages/Resources/BlogPost'));
const Community = React.lazy(() => import('./pages/Resources/Community'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services/web-hosting" element={<WebHosting />} />
        <Route path="/services/vps-hosting" element={<VPSHosting />} />
        <Route path="/services/dedicated-server" element={<DedicatedServer />} />
        <Route path="/services/wordpress-hosting" element={<WordPressHosting />} />
        <Route path="/services/cloud-hosting" element={<CloudHosting />} />
        <Route path="/services/reseller-hosting" element={<ResellerHosting />} />
        <Route path="/services/email-hosting" element={<EmailHosting />} />
        <Route path="/services/ssl-certificates" element={<SSLCertificates />} />
        <Route path="/services/domain-registration" element={<DomainRegistration />} />
        <Route path="/services/domain-transfer" element={<DomainTransfer />} />
        <Route path="/services/domain-management" element={<DomainManagement />} />
        <Route path="/services/minecraft-hosting" element={<MinecraftHosting />} />
        <Route path="/services/csgo-hosting" element={<CSGOHosting />} />
        <Route path="/services/nextcloud-hosting" element={<NextcloudHosting />} />
        <Route path="/games" element={<GameHosting />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/resources/documentation" element={<Documentation />} />
        <Route path="/resources/knowledgebase" element={<KnowledgeBase />} />
         <Route path="/resources/blog" element={<Blog />} />
         <Route path="/resources/blog/:slug" element={<BlogPost />} />
         <Route path="/resources/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
