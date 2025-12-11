import BottomTicker from '../components/BottomTicker';
import ImageCarousel from '../components/ImageCarousel';

export default function Films() {
    const filmImages = [
        '/images/slide%20film/DSC00167.JPEG',
        '/images/slide%20film/DSC00329.JPEG',
        '/images/slide%20film/DSC00573.JPEG',
        '/images/slide%20film/DSC00581.JPEG',
        '/images/slide%20film/DSC00638.JPEG',
        '/images/slide%20film/DSC00643.JPEG',
        '/images/slide%20film/DSC00662.JPEG',
        '/images/slide%20film/DSC00723.JPEG',
        '/images/slide%20film/DSC00742.JPEG',
        '/images/slide%20film/DSC00765.JPEG',
        '/images/slide%20film/DSC00967.JPEG',
        '/images/slide%20film/DSC00975.JPEG',
        '/images/slide%20film/DSC08108.JPG',
        '/images/slide%20film/DSC08959.JPEG',
        '/images/slide%20film/DSC09593.JPEG',
        '/images/slide%20film/DSC09657.JPEG',
    ];

    return (
        <div className="min-h-screen font-['Arial'] pb-8 md:pb-10">
            <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto mb-8 md:mb-12">
                <div className="mb-1 text-[10px] md:text-[11px] font-normal pl-4">
                    Styling by me
                </div>
                <ImageCarousel images={filmImages} speed={1} landscape={true} />
            </div>
            <BottomTicker fixedPosition={false} />
        </div>
    );
}
