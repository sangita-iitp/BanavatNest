import React, { useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Legal Pages (Named Exports)
const DisclaimerPage = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.DisclaimerPage })));
const PrivacyPolicyPage = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfUsePage = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.TermsOfUsePage })));

// About Subpages
const OurName = React.lazy(() => import('./pages/about/OurName'));
const Philosophy = React.lazy(() => import('./pages/about/Philosophy'));
const Mission = React.lazy(() => import('./pages/about/Mission'));
const Team = React.lazy(() => import('./pages/about/Team'));
const Board = React.lazy(() => import('./pages/about/Board'));

// What We Do Subpages
const FocusAreas = React.lazy(() => import('./pages/what-we-do/FocusAreas'));
const Domains = React.lazy(() => import('./pages/what-we-do/Domains'));

// Bridge Subpages
const Collaboration = React.lazy(() => import('./pages/bridge/Collaboration'));
const Opportunities = React.lazy(() => import('./pages/bridge/Opportunities'));
const FacultyEngagement = React.lazy(() => import('./pages/bridge/FacultyEngagement'));
const IndustryPartnerships = React.lazy(() => import('./pages/bridge/IndustryPartnerships'));


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fix: Added React.FC type to handle children correctly in TypeScript
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />

          {/* Redirects for top-level routes */}
          <Route path="/about" element={<Navigate to="/about/name" replace />} />
          <Route path="/services" element={<Navigate to="/what-we-do/focus" replace />} />
          <Route path="/what-we-do" element={<Navigate to="/what-we-do/focus" replace />} />
          <Route path="/bridge" element={<Navigate to="/bridge/collaboration" replace />} />

          {/* About Sub-routes */}
          <Route path="/about/name" element={<PageWrapper><OurName /></PageWrapper>} />
          <Route path="/about/philosophy" element={<PageWrapper><Philosophy /></PageWrapper>} />
          <Route path="/about/mission" element={<PageWrapper><Mission /></PageWrapper>} />
          <Route path="/about/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/about/board" element={<PageWrapper><Board /></PageWrapper>} />

          {/* What We Do Sub-routes */}
          <Route path="/what-we-do/focus" element={<PageWrapper><FocusAreas /></PageWrapper>} />
          <Route path="/what-we-do/domains" element={<PageWrapper><Domains /></PageWrapper>} />

          {/* Bridge Sub-routes */}
          <Route path="/bridge/collaboration" element={<PageWrapper><Collaboration /></PageWrapper>} />
          <Route path="/bridge/opportunities" element={<PageWrapper><Opportunities /></PageWrapper>} />
          <Route path="/bridge/faculty" element={<PageWrapper><FacultyEngagement /></PageWrapper>} />
          <Route path="/bridge/partnerships" element={<PageWrapper><IndustryPartnerships /></PageWrapper>} />

          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/disclaimer" element={<PageWrapper><DisclaimerPage /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><TermsOfUsePage /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
