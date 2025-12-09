
import BottomTicker from '../components/BottomTicker';
import ImageCarousel from '../components/ImageCarousel';

interface FashionProps {
  onImageClick?: (src: string) => void;
}

export default function Fashion({ onImageClick }: FashionProps) {
  const fashionImages = [
    '/images/slide%20fashion/IMG_0009.JPG',
    '/images/slide%20fashion/IMG_0043.JPG',
    '/images/slide%20fashion/IMG_0100.JPG',
    '/images/slide%20fashion/IMG_0171.JPG',
    '/images/slide%20fashion/IMG_0284.JPG',
    '/images/slide%20fashion/IMG_0488.JPG',
  ];

  return (
    <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto pb-8 md:pb-10 min-h-screen font-['Arial']">
      <div className="mb-16 md:mb-24">
        <ImageCarousel images={fashionImages} onImageClick={onImageClick} />
      </div>
      <div className="mt-6">
        <BottomTicker />
      </div>
    </div>
  );
}
