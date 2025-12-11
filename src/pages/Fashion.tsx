
import { fashionImages } from '../lib/data';
import { FashionItem } from '../lib/types';
import BottomTicker from '../components/BottomTicker';
import ImageCarousel from '../components/ImageCarousel';

interface FashionProps {
  onImageClick?: (item: string | FashionItem) => void;
}

export default function Fashion({ onImageClick }: FashionProps) {

  return (
    <div className="min-h-screen font-['Arial'] pb-8 md:pb-10">
      <div className="pt-28 md:pt-32 px-0 md:px-12 max-w-[1600px] mx-auto mb-8 md:mb-12">
        <ImageCarousel items={fashionImages} onImageClick={onImageClick} speed={1} />
      </div>
      <BottomTicker fixedPosition={false} />
    </div>
  );
}
