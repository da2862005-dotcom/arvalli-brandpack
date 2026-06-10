import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

interface ServiceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: number;
  serviceTitle: string;
  serviceCategory: string;
}

const getGalleryImages = (serviceId: number): string[] => {
  switch (serviceId) {
    case 1:
      return [
        '/services_gallery/s1_1.png',
        '/services_gallery/s1_2.png',
        '/services_gallery/s1_3.png',
        '/services_gallery/s1_4.png',
        '/services_gallery/s1_5.png',
        '/services_gallery/s1_6.png',
        '/services_gallery/s1_7.png',
        '/services_gallery/s1_8.png',
        'https://loremflickr.com/600/600/paperbag,packaging/all?lock=9',
        'https://loremflickr.com/600/600/paperbag,packaging/all?lock=10'
      ];
    case 2:
      return [
        '/portfolio/sweet_moments.png',
        '/portfolio/fresh_bites.png',
        'https://loremflickr.com/600/600/box,pastry/all?lock=11',
        'https://loremflickr.com/600/600/box,pastry/all?lock=12',
        'https://loremflickr.com/600/600/box,pastry/all?lock=13',
        'https://loremflickr.com/600/600/box,pastry/all?lock=14',
        'https://loremflickr.com/600/600/box,pastry/all?lock=15',
        'https://loremflickr.com/600/600/box,pastry/all?lock=16',
        'https://loremflickr.com/600/600/box,pastry/all?lock=17',
        'https://loremflickr.com/600/600/box,pastry/all?lock=18'
      ];
    case 3:
      return [
        '/portfolio/spiceroute.png',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=21',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=22',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=23',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=24',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=25',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=26',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=27',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=28',
        'https://loremflickr.com/600/600/cup,packaging/all?lock=29'
      ];
    case 4:
      return [
        '/portfolio/techvision.png',
        'https://loremflickr.com/600/600/logo,branding/all?lock=31',
        'https://loremflickr.com/600/600/logo,branding/all?lock=32',
        'https://loremflickr.com/600/600/logo,branding/all?lock=33',
        'https://loremflickr.com/600/600/logo,branding/all?lock=34',
        'https://loremflickr.com/600/600/logo,branding/all?lock=35',
        'https://loremflickr.com/600/600/logo,branding/all?lock=36',
        'https://loremflickr.com/600/600/logo,branding/all?lock=37',
        'https://loremflickr.com/600/600/logo,branding/all?lock=38',
        'https://loremflickr.com/600/600/logo,branding/all?lock=39'
      ];
    case 5:
      return [
        'https://loremflickr.com/600/600/card,stationery/all?lock=41',
        'https://loremflickr.com/600/600/card,stationery/all?lock=42',
        'https://loremflickr.com/600/600/card,stationery/all?lock=43',
        'https://loremflickr.com/600/600/card,stationery/all?lock=44',
        'https://loremflickr.com/600/600/card,stationery/all?lock=45',
        'https://loremflickr.com/600/600/card,stationery/all?lock=46',
        'https://loremflickr.com/600/600/card,stationery/all?lock=47',
        'https://loremflickr.com/600/600/card,stationery/all?lock=48',
        'https://loremflickr.com/600/600/card,stationery/all?lock=49',
        'https://loremflickr.com/600/600/card,stationery/all?lock=50'
      ];
    case 6:
      return [
        '/portfolio/sunrise.png',
        'https://loremflickr.com/600/600/sticker,label/all?lock=51',
        'https://loremflickr.com/600/600/sticker,label/all?lock=52',
        'https://loremflickr.com/600/600/sticker,label/all?lock=53',
        'https://loremflickr.com/600/600/sticker,label/all?lock=54',
        'https://loremflickr.com/600/600/sticker,label/all?lock=55',
        'https://loremflickr.com/600/600/sticker,label/all?lock=56',
        'https://loremflickr.com/600/600/sticker,label/all?lock=57',
        'https://loremflickr.com/600/600/sticker,label/all?lock=58',
        'https://loremflickr.com/600/600/sticker,label/all?lock=59'
      ];
    case 7:
      return [
        '/portfolio/quickpay.png',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=61',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=62',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=63',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=64',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=65',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=66',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=67',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=68',
        'https://loremflickr.com/600/600/qrcode,stand/all?lock=69'
      ];
    case 8:
      return [
        'https://loremflickr.com/600/600/menu,holder/all?lock=71',
        'https://loremflickr.com/600/600/menu,holder/all?lock=72',
        'https://loremflickr.com/600/600/menu,holder/all?lock=73',
        'https://loremflickr.com/600/600/menu,holder/all?lock=74',
        'https://loremflickr.com/600/600/menu,holder/all?lock=75',
        'https://loremflickr.com/600/600/menu,holder/all?lock=76',
        'https://loremflickr.com/600/600/menu,holder/all?lock=77',
        'https://loremflickr.com/600/600/menu,holder/all?lock=78',
        'https://loremflickr.com/600/600/menu,holder/all?lock=79',
        'https://loremflickr.com/600/600/menu,holder/all?lock=80'
      ];
    case 9:
      return [
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=81',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=82',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=83',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=84',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=85',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=86',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=87',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=88',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=89',
        'https://loremflickr.com/600/600/flyer,brochure/all?lock=90'
      ];
    default:
      return [];
  }
};

export function ServiceGalleryModal({
  isOpen,
  onClose,
  serviceId,
  serviceTitle,
  serviceCategory
}: ServiceGalleryModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const images = getGalleryImages(serviceId);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Key listeners for escaping and lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      } else if (lightboxIndex !== null) {
        if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, lightboxIndex, images.length]);

  if (!isOpen) return null;

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null));
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
        <div
          className="bg-white dark:bg-navy-900 rounded-3xl w-full max-w-5xl shadow-2xl relative border border-slate-200 dark:border-navy-800 flex flex-col my-8 overflow-hidden max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-slate-100 dark:border-navy-800 flex items-start justify-between bg-gradient-to-r from-slate-50 to-white dark:from-navy-950 dark:to-navy-900 shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-xs font-bold border border-primary-200 dark:border-primary-900/50">
                  {serviceCategory}
                </span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-medium">
                  <ImageIcon className="w-3.5 h-3.5" />
                  10 Designs
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-950 dark:text-white">
                {serviceTitle} Gallery
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Browse our premium design portfolio and past projects for inspiration.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-600 dark:text-slate-350 hover:text-navy-950 dark:hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Grid Container */}
          <div className="p-6 md:p-8 overflow-y-auto flex-grow">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-800 bg-slate-100 dark:bg-navy-950 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Skeleton Loader */}
                  {!loadedImages[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-navy-950 animate-pulse">
                      <ImageIcon className="w-8 h-8 text-slate-300 dark:text-navy-800" />
                    </div>
                  )}

                  <img
                    src={imgUrl}
                    alt={`${serviceTitle} Design Sample ${idx + 1}`}
                    onLoad={() => handleImageLoad(idx)}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      loadedImages[idx] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg text-primary-600 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge Label */}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Design #{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 dark:border-navy-800 bg-slate-50 dark:bg-navy-950 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
            <span>Click any design to view full screen.</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-navy-950 hover:bg-navy-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-navy-950 font-bold rounded-xl shadow transition-all duration-300"
            >
              Close Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 z-50 disabled:opacity-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 z-50 disabled:opacity-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-full max-h-[80vh] px-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={`${serviceTitle} Full Design Sample ${lightboxIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-scale-up"
            />
          </div>

          {/* Lightbox Info */}
          <div className="mt-6 text-center text-white z-50">
            <h3 className="text-lg font-bold">{serviceTitle} Design Details</h3>
            <p className="text-sm text-slate-400 mt-1">
              Sample {lightboxIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
