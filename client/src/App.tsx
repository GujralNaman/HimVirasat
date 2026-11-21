import { PageLoader } from '@/components/layout/PageLoader';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { BrandIntro } from '@/components/sections/BrandIntro';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { BrandStory } from '@/components/sections/BrandStory';
import { BrandPromise } from '@/components/sections/BrandPromise';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/footer/Footer';
import { Recipe } from '@/pages/Recipe';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-forest focus:px-4 focus:py-2 focus:text-ivory">
          Skip to content
        </a>
        <PageLoader />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <main id="main">
                <Hero />
                <BrandIntro />
                <ProductShowcase />
                <BrandStory />
                <BrandPromise />
                <CTASection />
              </main>
              <Footer />
            </>
          } />
          <Route path="/recipe" element={
            <>
              <Recipe />
            </>
          } />
        </Routes>
      </Router>
    </MotionConfig>
  );
}
