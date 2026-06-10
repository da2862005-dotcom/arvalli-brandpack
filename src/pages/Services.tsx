import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Palette, Megaphone, ArrowRight, ShoppingBag, Eye } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { ServiceGalleryModal } from '../components/ServiceGalleryModal';

type Category = 'All Services' | 'Packaging Solutions' | 'Branding Solutions' | 'Promotional Products';

export function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Services');
  const [selectedService, setSelectedService] = useState<any>(null);

  const categories: Category[] = ['All Services', 'Packaging Solutions', 'Branding Solutions', 'Promotional Products'];

  const services = [
    {
      id: 1,
      category: 'Packaging Solutions',
      title: 'Paper & Garment Bags',
      desc: 'Premium quality custom printed paper carry bags and garment bags for retail and boutiques.',
      icon: ShoppingBag,
      img: '/images/packaging_bags.png',
      badge: 'Most Popular',
      features: ['High durability', 'Custom printing', 'Various sizes', 'Eco-friendly options']
    },
    {
      id: 2,
      category: 'Packaging Solutions',
      title: 'Sweet Boxes',
      desc: 'Beautifully designed and printed sweet boxes perfect for festivals, gifting, and bakeries.',
      icon: Box,
      img: '/portfolio/sweet_moments.png',
      badge: 'Custom',
      features: ['Gloss/Matte lamination', 'Spot UV & Foiling', 'Custom dielines', 'Vibrant colors']
    },
    {
      id: 3,
      category: 'Packaging Solutions',
      title: 'Food Takeaway & Paper Cups',
      desc: 'Safe, hygienic, and attractive packaging solutions specifically designed for the food industry.',
      icon: ShoppingBag,
      img: '/images/food_packaging.png',
      badge: 'Food Safe',
      features: ['Food-grade materials', 'Grease-resistant', 'Takeaway boxes', 'Branded paper cups']
    },
    {
      id: 4,
      category: 'Branding Solutions',
      title: 'Logo & Identity Design',
      desc: 'Complete brand identity design from logos to color palettes and typography guidelines.',
      icon: Palette,
      img: '/images/brand_identity.png',
      badge: 'Design Service',
      features: ['Custom logo concepts', 'Brand guidelines', 'Vector files', 'Unlimited revisions']
    },
    {
      id: 5,
      category: 'Branding Solutions',
      title: 'Business Cards & Stationery',
      desc: 'Professional corporate stationery that leaves a lasting impression on your clients.',
      icon: Palette,
      img: '/images/business_cards.png',
      features: ['Premium paper stocks', 'Letterheads & Envelopes', 'Foil stamping', 'Embossing options']
    },
    {
      id: 6,
      category: 'Branding Solutions',
      title: 'Labels & Stickers',
      desc: 'High-quality custom labels and stickers for products, packaging, and promotions.',
      icon: Palette,
      img: '/images/labels_stickers.png',
      features: ['Die-cut stickers', 'Roll labels', 'Waterproof options', 'Clear decals']
    },
    {
      id: 7,
      category: 'Promotional Products',
      title: 'QR Payment Stands',
      desc: 'Custom branded acrylic or wooden QR code stands for retail counters and restaurants.',
      icon: Megaphone,
      img: '/images/qr_stands.png',
      badge: 'Trending',
      features: ['Acrylic/Wood material', 'Full color printing', 'Scratch resistant', 'Custom shapes']
    },
    {
      id: 8,
      category: 'Promotional Products',
      title: 'Menu Holders & Table Tents',
      desc: 'Attractive table-top displays for restaurants and cafes to showcase specials and menus.',
      icon: Megaphone,
      img: '/images/menu_holders.png',
      features: ['Durable acrylic', 'Easy to change inserts', 'Multi-sided prints', 'Various sizes']
    },
    {
      id: 9,
      category: 'Promotional Products',
      title: 'Marketing Flyers & Brochures',
      desc: 'Effective printed marketing materials to communicate your offerings to customers.',
      icon: Megaphone,
      img: '/images/marketing_flyers.png',
      features: ['Bi-fold & Tri-fold', 'Various paper weights', 'High-res printing', 'Bulk quantities']
    }
  ];

  const filteredServices = activeCategory === 'All Services'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Complete Packaging & Branding Solutions</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Explore our comprehensive range of services designed to elevate your brand from concept to customer's hands.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 min-h-[800px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filters */}
          <AnimateOnScroll direction="up" className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, i) => (
              <AnimateOnScroll key={service.id} direction="up" delay={(i % 3) * 100}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-primary-50 text-primary-600 text-xs font-bold px-3 py-1 rounded-full border border-primary-100 z-10 shadow-sm">
                        {service.badge}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg z-10">
                      <service.icon className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy-950 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>

                    <div className="mt-auto">
                      <div className="h-px w-full bg-slate-100 mb-6" />
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full py-3 px-4 rounded-xl text-sm font-bold text-primary-600 bg-primary-50 hover:bg-primary-100 dark:bg-primary-950/20 dark:hover:bg-primary-950/40 dark:text-primary-400 border border-primary-100 dark:border-primary-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Designs
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-primary-100 text-lg mb-10">
              Don't see exactly what you're looking for? We specialize in custom manufacturing to meet your unique requirements.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-primary-600 bg-white hover:scale-105 transition-transform shadow-xl">
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedService && (
        <ServiceGalleryModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          serviceId={selectedService.id}
          serviceTitle={selectedService.title}
          serviceCategory={selectedService.category}
        />
      )}
    </div>
  );
}
