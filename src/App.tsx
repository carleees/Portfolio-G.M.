import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import Films from './pages/Films';
import Info from './pages/Info';
import FashionImageDetail from './pages/FashionImageDetail';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'fashion' | 'films' | 'info'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsScrolled(false);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  if (selectedImage) {
    return <FashionImageDetail imageSrc={selectedImage} onBack={() => setSelectedImage(null)} />;
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
