import React, { useEffect, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import OnboardingModal from './components/OnboardingModal';


// Lazy load other components
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./components/portal/Login'));
const AdminDashboard = React.lazy(() =>
  import('./components/portal/admin/AdminDashboard')
);
const ClientDashboard = React.lazy(() =>
  import('./components/portal/client/ClientDashboard')
);
const ProtectedRoute = React.lazy(() =>
  import('./components/portal/ProtectedRoute')
);

// Service Pages
const SEOServices = React.lazy(() => import('./pages/services/SEOServices'));
const PPCManagement = React.lazy(() =>
  import('./pages/services/PPCManagement')
);
const SocialMedia = React.lazy(() => import('./pages/services/SocialMedia'));
const ContentMarketing = React.lazy(() =>
  import('./pages/services/ContentMarketing')
);
const Analytics = React.lazy(() => import('./pages/services/Analytics'));
const BrandStrategy = React.lazy(() =>
  import('./pages/services/BrandStrategy')
);
const WebDesign = React.lazy(() => import('./pages/services/WebDesign'));
const CustomDevelopment = React.lazy(() =>
  import('./pages/services/CustomDevelopment')
);
const AIConsulting = React.lazy(() => import('./pages/services/AIConsulting'));

// Solution Pages
const Enterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SmallBusiness = React.lazy(() =>
  import('./pages/solutions/SmallBusiness')
);
const Healthcare = React.lazy(() => import('./pages/solutions/Healthcare'));
const Ecommerce = React.lazy(() => import('./pages/solutions/Ecommerce'));
const FurnitureStore = React.lazy(() => import('./pages/solutions/FurnitureStore'));
const Restaurant = React.lazy(() => import('./pages/solutions/Restaurant'));

// Resource Pages
const Blog = React.lazy(() => import('./pages/resources/Blog'));
const BlogPost = React.lazy(() => import('./pages/resources/BlogPost'));
const CaseStudies = React.lazy(() => import('./pages/resources/CaseStudies'));
const Webinars = React.lazy(() => import('./pages/resources/Webinars'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);


const App: React.FC = () => {
  useEffect(() => {
    // Initialize the data layer before GTM loads
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // Google Tag Manager Script
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-P5R66VR'; // GTM ID
    document.head.appendChild(gtmScript);

    // Google Tag Manager NoScript fallback
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5R66VR"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(gtmNoscript);

    // Optional Cleanup on component unmount
    return () => {
      document.head.removeChild(gtmScript);
      document.body.removeChild(gtmNoscript);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <ScrollToTop />
        <Toaster position="top-right" />
        <OnboardingModal />
        <Routes>
          {/* Portal Routes */}
          <Route path="/portal">
            <Route index element={<Navigate to="/portal/login" replace />} />
            <Route
              path="login"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="admin/*"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <ProtectedRoute allowedRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                </Suspense>
              }
            />
            <Route
              path="client/*"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <ProtectedRoute allowedRole="client">
                    <ClientDashboard />
                  </ProtectedRoute>
                </Suspense>
              }
            />
          </Route>

          {/* Main Website Routes */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="flex-grow">

                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route index element={<Home />} />

                      {/* Service Routes */}
                      <Route path="services" element={<Services />} />
                      <Route path="services/seo" element={<SEOServices />} />
                      <Route path="services/ppc" element={<PPCManagement />} />
                      <Route
                        path="services/social-media"
                        element={<SocialMedia />}
                      />
                      <Route
                        path="services/content-marketing"
                        element={<ContentMarketing />}
                      />
                      <Route
                        path="services/analytics"
                        element={<Analytics />}
                      />
                      <Route
                        path="services/brand-strategy"
                        element={<BrandStrategy />}
                      />
                      <Route
                        path="services/web-design"
                        element={<WebDesign />}
                      />
                      <Route
                        path="services/custom-development"
                        element={<CustomDevelopment />}
                      />
                      <Route
                        path="services/ai-consulting"
                        element={<AIConsulting />}
                      />

                      {/* Solution Routes */}
                      <Route path="solutions" element={<Solutions />} />
                      <Route
                        path="solutions/enterprise"
                        element={<Enterprise />}
                      />
                      <Route
                        path="solutions/small-business"
                        element={<SmallBusiness />}
                      />
                      <Route
                        path="solutions/healthcare"
                        element={<Healthcare />}
                      />
                      <Route
                        path="solutions/ecommerce"
                        element={<Ecommerce />}
                      />
                      <Route
                        path="solutions/furniture-store"
                        element={<FurnitureStore />}
                      />
                      <Route
                        path="solutions/restaurant"
                        element={<Restaurant />}
                      />

                      {/* Resource Routes */}
                      <Route path="resources" element={<Resources />} />
                      <Route path="resources/blog" element={<Blog />} />
                      <Route path="resources/blog/:id" element={<BlogPost />} />
                      <Route
                        path="resources/case-studies"
                        element={<CaseStudies />}
                      />
                      <Route path="resources/webinars" element={<Webinars />} />

                      <Route path="contact" element={<Contact />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </Suspense>
                  <Footer />
                </main>
              </>
            }
          />
        </Routes>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default App;