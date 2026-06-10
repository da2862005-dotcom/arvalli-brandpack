import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

interface ServiceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: number;
  serviceTitle: string;
  serviceCategory: string;
}

const serviceImages: Record<number, string[]> = {
  1: [
    "/images/Paper & Garment Bags/ChatGPT Image Jun 10, 2026, 07_01_56 PM.png",
    "/images/Paper & Garment Bags/ChatGPT Image Jun 10, 2026, 07_02_25 PM.png",
    "/images/Paper & Garment Bags/ChatGPT Image Jun 10, 2026, 07_02_29 PM.png",
    "/images/Paper & Garment Bags/ChatGPT Image Jun 10, 2026, 07_02_33 PM.png",
    "/images/Paper & Garment Bags/ChatGPT Image Jun 10, 2026, 07_03_16 PM.png",
    "/images/Paper & Garment Bags/printed-sweet-bag.jpeg",
    "/images/Paper & Garment Bags/DryFruits-Paper-Bags.webp",
    "/images/Paper & Garment Bags/Designer-Paper-Bags-thumbs-375X375.jpg",
    "/images/Paper & Garment Bags/MG_5770-Edited.webp",
    "/images/Paper & Garment Bags/51mAGjt9mDL._AC_UF1000,1000_QL80_.jpg",
    "/images/Paper & Garment Bags/81+0j5kS2qL._AC_UF350,350_QL80_.jpg",
    "/images/Paper & Garment Bags/Harvest-Brand-Gift-Bags-with-Clear-Window-Kraft-Paper-for-Candy-Large-Brown-Paper-Bags-Biscuits-Cake-Packaging-Boxes-New-Year-Wedding-Gift-Paper-Bags-Supplier.avif",
    "/images/Paper & Garment Bags/images.jpg",
    "/images/Paper & Garment Bags/images (1).jpg",
    "/images/Paper & Garment Bags/images (2).jpg",
    "/images/Paper & Garment Bags/images (3).jpg",
    "/images/Paper & Garment Bags/images (4).jpg"
  ],
  2: [
    "/images/Sweet Boxes/51mAGjt9mDL._AC_UF1000,1000_QL80_.jpg",
    "/images/Sweet Boxes/81+0j5kS2qL._AC_UF350,350_QL80_.jpg",
    "/images/Sweet Boxes/Designer-Paper-Bags-thumbs-375X375.jpg",
    "/images/Sweet Boxes/DryFruits-Paper-Bags.webp",
    "/images/Sweet Boxes/Harvest-Brand-Gift-Bags-with-Clear-Window-Kraft-Paper-for-Candy-Large-Brown-Paper-Bags-Biscuits-Cake-Packaging-Boxes-New-Year-Wedding-Gift-Paper-Bags-Supplier.avif",
    "/images/Sweet Boxes/MG_5770-Edited.webp",
    "/images/Sweet Boxes/images (1).jpg",
    "/images/Sweet Boxes/images (2).jpg",
    "/images/Sweet Boxes/images (3).jpg",
    "/images/Sweet Boxes/printed-sweet-bag.jpeg"
  ],
  3: [
    "/images/Food Takeaway & Paper Cups/3-01-1024x583.png",
    "/images/Food Takeaway & Paper Cups/PaperTo-GoContainer_01.jpg",
    "/images/Food Takeaway & Paper Cups/sustainable-packaging.webp",
    "/images/Food Takeaway & Paper Cups/image-5-1024x1024.webp",
    "/images/Food Takeaway & Paper Cups/Carry_Bag_Canva_.webp",
    "/images/Food Takeaway & Paper Cups/Customized-Flat-Bottom-Stand-up-Kraft-Printed-Paper-Snack-Food-Packaging-Bag.avif",
    "/images/Food Takeaway & Paper Cups/Square-Bottom-Bag-Coffee-Design-Bag-Square-Box-Bottom-Color-Food-Grade-Kraft-Paper-Bag.avif",
    "/images/Food Takeaway & Paper Cups/custom-nuts-packaging-manufacturer-blog-3.webp",
    "/images/Food Takeaway & Paper Cups/7bfee18e3b5ec6d99bb10659e149b6b6.jpg",
    "/images/Food Takeaway & Paper Cups/images.jpg"
  ],
  4: [
    "/images/Logo & Identity Design/Impressive-Logo-Design-Banner-image.webp",
    "/images/Logo & Identity Design/birdland_banner-scaled.jpg",
    "/images/Logo & Identity Design/1520065082309.jpg",
    "/images/Logo & Identity Design/eight-diverse-logo-designs-showcasing-brand-identity-and-creative-visual-solutions-vector.jpg",
    "/images/Logo & Identity Design/HowDoesLogoDesignAffectBrandIdentity_02.webp",
    "/images/Logo & Identity Design/Custom-Logo-Design.jpg",
    "/images/Logo & Identity Design/logo-designs-1024x439.jpg",
    "/images/Logo & Identity Design/GlWOT0N437Rgdw9PK99H.jpg",
    "/images/Logo & Identity Design/original-5df11a928f55dc6ff0b624d29e82b749.webp",
    "/images/Logo & Identity Design/gettyimages-2149372731-612x612.jpg"
  ],
  5: [
    "/images/Business Cards & Stationery/ChatGPT Image Jun 10, 2026, 07_04_51 PM.png",
    "/images/Business Cards & Stationery/design-business-card-letterhead-stationery-items-and-corporate-identity.jpg",
    "/images/Business Cards & Stationery/A10669-The-art-of-stationery-design-history-trends-and-modern-approaches-Image-5.webp",
    "/images/Business Cards & Stationery/elegant-professional-business-card-template-mockup-two.webp",
    "/images/Business Cards & Stationery/professional-business-card-template-with-a-creative-flair-mockup-one.webp",
    "/images/Business Cards & Stationery/364f95d7be1906b9f8cc69353f0774d5.jpg",
    "/images/Business Cards & Stationery/Business-stationary-design-by-graphic-design-company-qf3soeczg275aycjlkj7hdfiez5aejc1h8753hvtl0.webp",
    "/images/Business Cards & Stationery/Visiting-Card_10484711202403.jpg",
    "/images/Business Cards & Stationery/stationery_shop_visiting_card_design_7_.jpg",
    "/images/Business Cards & Stationery/square.jpg"
  ],
  6: [
    "/images/Labels & Stickers/Labels-Stickers.jpg",
    "/images/Labels & Stickers/7101W7LkfTL.jpg",
    "/images/Labels & Stickers/birdland_banner-scaled.jpg",
    "/images/Labels & Stickers/Bottle-Label.jpeg",
    "/images/Labels & Stickers/coca-cola-label-1024x459.png",
    "/images/Labels & Stickers/sale-price-tags-promotional-supermarket-discoun-stickers-advertising-offer-banner-ribbons-paper-promotion-sales-label-sale-price-150688355.webp",
    "/images/Labels & Stickers/label-design-soft-drink-bottle-260nw-2690251655.webp",
    "/images/Labels & Stickers/1520065082309.jpg",
    "/images/Labels & Stickers/1753268171.webp",
    "/images/Labels & Stickers/coca-cola-label-1024x459.png"
  ],
  7: [
    "/images/QR Payment Stands/QR_code_standee_02.jpg",
    "/images/QR Payment Stands/acrylic-qr-code-stand-black-gold.jpg",
    "/images/QR Payment Stands/paytm-google-pay-scanner-stand-gold.jpg",
    "/images/QR Payment Stands/personalized-qr-code-standee-tapmo-branding.webp",
    "/images/QR Payment Stands/81BQD4TMjzL._AC_UF1000,1000_QL80_.jpg",
    "/images/QR Payment Stands/71ouLitHPlL.jpg",
    "/images/QR Payment Stands/FrostedQR2.webp",
    "/images/QR Payment Stands/Blackwhatsappqr2.webp",
    "/images/QR Payment Stands/Printedq.webp",
    "/images/QR Payment Stands/ChatGPT_Image_Jan_20_2026_01_14_56_PM.webp"
  ],
  8: [
    "/images/Menu Holders & Table Tents/71-ixf6-PyL.jpg",
    "/images/Menu Holders & Table Tents/71aEd6BmGFL._AC_UF1000,1000_QL80_.jpg",
    "/images/Menu Holders & Table Tents/e6c492765f478448548fb830492114c4.jpg",
    "/images/Menu Holders & Table Tents/acrylic-led-table-tent.webp",
    "/images/Menu Holders & Table Tents/il_1080xN.5246846896_17rp.webp",
    "/images/Menu Holders & Table Tents/menu-holders-vs-table-stands-vs-table-tents-differences-pros-best-use-cases-8450057.webp",
    "/images/Menu Holders & Table Tents/71fiknvI0uL._AC_UF894,1000_QL80_.jpg",
    "/images/Menu Holders & Table Tents/creative-restaurant-table-tent-stand-menu-design-template_619059-758.avif",
    "/images/Menu Holders & Table Tents/elegant-table-tent-card-mockup-marketing-promotion_15431-794.avif",
    "/images/Menu Holders & Table Tents/table-tent-mockups-restaurant-menu-display_460658-831.avif"
  ],
  9: [
    "/images/Marketing Flyers & Brochures/2023-04-13_15-00-06_FP-Calculator-A4-Premium-Flyer Spot.png",
    "/images/Marketing Flyers & Brochures/trifold-brochure-vs-flyer.jpg",
    "/images/Marketing Flyers & Brochures/Professional-Trifold-Marketing-Brochure-Example.jpg",
    "/images/Marketing Flyers & Brochures/Leave-a-lasting-impression.jpg",
    "/images/Marketing Flyers & Brochures/bar-resturant-flyer.png",
    "/images/Marketing Flyers & Brochures/Distributing-Your-Flyers-Effectively-1024x683.jpg",
    "/images/Marketing Flyers & Brochures/360_F_373934650_DF3ErczAPD5OguFfy87l1HX61UT8EO3I.jpg",
    "/images/Marketing Flyers & Brochures/cd03d6acdbcaa90886bf28cf2e7190d7.jpg",
    "/images/Marketing Flyers & Brochures/ChatGPT-Image-Apr-24-2026-01_55_44-PM.webp",
    "/images/Marketing Flyers & Brochures/rack-card-1.webp"
  ]
};

const getGalleryImages = (serviceId: number): string[] => {
  return serviceImages[serviceId] ?? [];
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
                  {images.length} Designs
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
