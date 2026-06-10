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
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1589363460779-cd717fc244ac?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 2:
      return [
        'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1534432182989-17aa70d64309?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1548695607-9c73430ba065?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 3:
      return [
        'https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1579888944880-d98341148720?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1563865436874-9aef32095ffd?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1526367790999-015078648c7e?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 4:
      return [
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 5:
      return [
        'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1572044162444-ad60f128bdec?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-161662818859-7a11abb6fcc9?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1603514285044-3d0774a5d898?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1562654267-21b44c57c86a?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 6:
      return [
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1572243521255-a2267b2d287b?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1625083750919-fd3d99601121?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1618005198143-d528f28c21a4?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 7:
      return [
        'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 8:
      return [
        'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1587573089734-09cb6b4422e3?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1564758564527-b97d79cd27c1?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600&q=80'
      ];
    case 9:
      return [
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1562654267-21b44c57c86a?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1626785774625-ddc7c8241314?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-161662818859-7a11abb6fcc9?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&h=600&q=80',
        'https://images.unsplash.com/photo-1572044162444-ad60f128bdec?auto=format&fit=crop&w=600&h=600&q=80'
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
