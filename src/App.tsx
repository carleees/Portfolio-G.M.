import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import Films from './pages/Films';
import Info from './pages/Info';
import FashionImageDetail from './pages/FashionImageDetail';
import Navigation from './components/Navigation';

import { FashionItem } from './lib/types';
import { fashionImages } from './lib/data';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'fashion' | 'films' | 'info'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | FashionItem | null>(null);

  useEffect(() => {
    setIsScrolled(false);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNext = () => {
    if (!selectedImage || typeof selectedImage === 'string') return;
    const currentIndex = fashionImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % fashionImages.length;
    setSelectedImage(fashionImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage || typeof selectedImage === 'string') return;
    const currentIndex = fashionImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + fashionImages.length) % fashionImages.length;
    setSelectedImage(fashionImages[prevIndex]);
  };

  if (selectedImage) {
    return (
      <FashionImageDetail
        item={selectedImage}
        onBack={() => setSelectedImage(null)}
        onNext={typeof selectedImage !== 'string' ? handleNext : undefined}
        onPrev={typeof selectedImage !== 'string' ? handlePrev : undefined}
      />
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} isScrolled={isScrolled} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'fashion' && <Fashion onImageClick={setSelectedImage} />}
      {currentPage === 'films' && <Films />}
      {currentPage === 'info' && <Info />}
    </div>
  );
}

export default App;
