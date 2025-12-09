import { useRef, useEffect, useState, useCallback } from 'react';

interface ImageCarouselProps {
  images: string[];
  onImageClick?: (src: string) => void;
}

export default function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  // Quadrupling the images array to ensure absolutely seamless looping
  const duplicatedImages = [...images, ...images, ...images, ...images];

  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const positionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const previousXRef = useRef(0);
  const isClickRef = useRef(true);

  const widthRef = useRef(0);

  // State for cursor style
  const [isGrabbing, setIsGrabbing] = useState(false);

  const calculateWidth = useCallback(() => {
    if (containerRef.current) {
      // Create a temporary hidden element to measure the true content width if needed,
      // but since we use w-max, offsetWidth should be efficient and correct.
      // However, we need to be careful. The scrolling div changes position.
      // But its width shouldn't change.
      widthRef.current = containerRef.current.scrollWidth / 4;
    }
  }, []);

  useEffect(() => {
    calculateWidth();

    // Observer for resize
    const resizeObserver = new ResizeObserver(() => {
      calculateWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [calculateWidth]);

  const animate = useCallback(() => {
    // If width isn't calculated yet, try to calculate
    if (widthRef.current === 0) calculateWidth();

    const singleSetWidth = widthRef.current;
    if (singleSetWidth === 0) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!isDraggingRef.current) {
      positionRef.current -= 0.5;
    }

    if (positionRef.current <= -singleSetWidth) {
      positionRef.current += singleSetWidth;
    }
    else if (positionRef.current > 0) {
      positionRef.current -= singleSetWidth;
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [calculateWidth]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.clientX;
    previousXRef.current = e.clientX;
    isClickRef.current = true;

    // Capture pointer to handle dragging even if mouse leaves the element
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const currentX = e.clientX;
    const delta = currentX - previousXRef.current;
    previousXRef.current = currentX;

    positionRef.current += delta;

    // If moved significantly, it's not a click
    if (Math.abs(currentX - startXRef.current) > 5) {
      isClickRef.current = false;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleImageClick = (src: string) => {
    if (isClickRef.current && onImageClick) {
      onImageClick(src);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-neutral-50 py-12 touch-none">
      <div
        ref={containerRef}
        className="flex w-max whitespace-nowrap will-change-transform"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp} // Handle cancellation (e.g. alt-tab)
        style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(src)}
            className={`w-[200px] h-[300px] md:w-[300px] md:h-[450px] flex-shrink-0 mx-4 overflow-hidden transition-all duration-300 bg-white select-none ${isGrabbing ? '' : 'hover:scale-[1.02] hover:shadow-2xl'}`}
            draggable={false} // Prevent native drag
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover pointer-events-none" // Prevent image drag behavior
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
