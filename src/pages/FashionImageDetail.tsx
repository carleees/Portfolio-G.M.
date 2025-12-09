
import { ArrowLeft } from 'lucide-react';

interface FashionImageDetailProps {
    imageSrc: string;
    onBack: () => void;
}

export default function FashionImageDetail({ imageSrc, onBack }: FashionImageDetailProps) {
    return (
        <div className="fixed inset-0 z-50 bg-neutral-50 flex flex-col items-center justify-center p-4 font-['Arial']">
            <button
                onClick={onBack}
                className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-2 text-sm tracking-widest hover:opacity-60 transition-opacity uppercase z-50"
            >
                <ArrowLeft size={20} />
                Back
            </button>

            <div className="w-full h-full p-4 md:p-12 flex items-center justify-center overflow-hidden">
                <img
                    src={imageSrc}
                    alt="Fashion Detail"
                    className="max-w-full max-h-full object-contain shadow-2xl"
                />
            </div>
        </div>
    );
}
