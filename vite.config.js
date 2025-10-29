import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'react-helmet-async'],

          // Feature chunks
          'services': [
            './src/pages/services/WebHosting',
            './src/pages/services/VPSHosting',
            './src/pages/services/DedicatedServer',
            './src/pages/services/WordPressHosting',
            './src/pages/services/CloudHosting',
            './src/pages/services/ResellerHosting',
            './src/pages/services/EmailHosting',
            './src/pages/services/SSLCertificates',
            './src/pages/services/DomainRegistration',
            './src/pages/services/DomainTransfer',
            './src/pages/services/DomainManagement',
            './src/pages/services/MinecraftHosting',
            './src/pages/services/CSGOHosting',
            './src/pages/services/NextcloudHosting',
          ],
          'resources': [
            './src/pages/Resources/Documentation',
            './src/pages/Resources/KnowledgeBase',
            './src/pages/Resources/Blog',
            './src/pages/Resources/BlogPost',
            './src/pages/Resources/Community',
          ],
          'pages': [
            './src/pages/Login',
            './src/pages/Signup',
            './src/pages/GameHosting',
            './src/pages/About',
            './src/pages/PrivacyPolicy',
            './src/pages/TermsOfService',
            './src/pages/RefundPolicy',
            './src/pages/Contact',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1000kb
  },
})
