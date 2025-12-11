import { useEffect } from 'react';
import { FashionItem } from '../lib/types';

interface FashionImageDetailProps {
    item: string | FashionItem;
    onBack: () => void;
    onNext?: () => void;
    onPrev?: () => void;
}

export default function FashionImageDetail({ item, onBack, onNext, onPrev }: FashionImageDetailProps) {
    const isObject = typeof item !== 'string';
    const src = isObject ? (item as FashionItem).src : (item as string);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' && onNext) {
                onNext();
            } else if (e.key === 'ArrowLeft' && onPrev) {
                onPrev();
            } else if (e.key === 'Escape') {
                onBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext, onPrev, onBack]);

    return (
        <div className="fixed inset-0 z-[100] bg-white animate-fadeIn flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-black hover:opacity-60 transition-opacity z-50 p-2"
                aria-label="Close detail view"
            >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Image Container */}
            <div className="w-full h-[65vh] shrink-0 md:h-full md:w-auto md:flex-1 relative flex items-center justify-center p-4 md:p-12 md:pr-0 bg-white">
                {/* Navigation Arrows */}
                {onPrev && (
                    <button
                        onClick={onPrev}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 md:p-4 hover:opacity-60 transition-opacity z-50 text-black"
                        aria-label="Previous image"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
                {onNext && (
                    <button
                        onClick={onNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 md:p-4 hover:opacity-60 transition-opacity z-50 text-black"
                        aria-label="Next image"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}

                <img
                    src={src}
                    alt="Fashion detail"
                    className="max-w-full max-h-full object-contain shadow-2xl"
                />
            </div>

            {/* Credits Sidebar (Only for FashionItem) */}
            {isObject && (
                <div className="w-full md:w-[300px] shrink-0 bg-white md:bg-neutral-50 p-6 md:p-12 flex flex-col justify-end md:justify-center border-t md:border-t-0 md:border-l border-neutral-200">
                    <div className="space-y-1 text-sm text-black font-normal font-['Arial']">
                        {(item as FashionItem).credits.photographer && (
                            <p>Photographer: {(item as FashionItem).credits.photographer}</p>
                        )}
                        {(item as FashionItem).credits.stylist && (
                            <p>Stylist: {(item as FashionItem).credits.stylist}</p>
                        )}
                        {(item as FashionItem).credits.mua && (
                            <p>Mua: {(item as FashionItem).credits.mua}</p>
                        )}
                        {(item as FashionItem).credits.model && (
                            <p>Model: {(item as FashionItem).credits.model}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
