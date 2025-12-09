interface ImageCarouselProps {
  images: string[];
  onImageClick?: (src: string) => void;
}

export default function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  // Quadrupling the images array to ensure absolutely seamless looping
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden bg-neutral-50 py-12">
      <div
        className="flex w-max animate-marqueeCarousel whitespace-nowrap will-change-transform"
        style={{ animationDuration: '80s' }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            onClick={() => onImageClick?.(src)}
            className={`w-[200px] h-[300px] md:w-[300px] md:h-[450px] flex-shrink-0 mx-4 overflow-hidden transition-all duration-300 bg-white ${onImageClick ? 'cursor-pointer hover:scale-[1.02] hover:shadow-2xl' : ''}`}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
