import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, ShoppingBag, Pill, Factory, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { cn } from '../lib/utils';

export function Industries() {
  const industries = [
    {
      id: 'restaurants',
      title: 'Restaurants & Food Businesses',
      icon: UtensilsCrossed,
      stats: '100+ Clients Served',
      img: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: 'The food industry requires packaging that is not only attractive but also highly functional, grease-resistant, and food-safe.',
      solutions: [
        'Takeaway corrugated boxes & paper bags',
        'Grease-proof wrappers & butter paper',
        'Custom printed cups & sleeves',
        'QR code menu stands (Acrylic/Wood)',
        'Table tents & promotional displays',
        'Brand identity & logo design'
      ]
    },
    {
      id: 'retail',
      title: 'Retail Stores & E-commerce',
      icon: ShoppingBag,
      stats: '80+ Clients Served',
      img: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: 'For retail, packaging is the silent salesman. We create packaging that enhances the unboxing experience and builds brand loyalty.',
      solutions: [
        'Premium rigid gift boxes',
        'Custom printed mailer boxes',
        'Luxury paper shopping bags',
        'Tissue paper with logo printing',
        'Thank you cards & inserts',
        'Die-cut stickers & security labels'
      ]
    },
    {
      id: 'pharmacy',
      title: 'Pharmacies & Healthcare',
      icon: Pill,
      stats: '50+ Clients Served',
      img: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: 'Healthcare packaging demands precision, compliance, and trust. We ensure all materials meet strict industry standards.',
      solutions: [
        'Folding cartons for medicines',
        'Tamper-evident sealing labels',
        'Information leaflets & inserts',
        'Prescription envelopes',
        'Medical grade paper bags',
        'Promotional materials for doctors'
      ]
    },
    {
      id: 'manufacturing',
      title: 'Industrial & Manufacturing',
      icon: Factory,
      stats: '60+ Clients Served',
      img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: 'Industrial products need robust protection during transit. We provide heavy-duty packaging solutions that prevent damage.',
      solutions: [
        'Heavy-duty master cartons',
        'Die-cut industrial boxes',
        'Barcode & logistics labels',
        'Instruction manuals',
        'Product catalogs & brochures',
        'Corporate stationery'
      ]
    },
    {
      id: 'startups',
      title: 'Startups & D2C Brands',
      icon: Rocket,
      stats: '120+ Clients Served',
      img: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: 'Stand out in a crowded market with unique, Instagram-worthy packaging that tells your startup\'s story.',
      solutions: [
        'Complete brand identity design',
        'Custom dieline creation',
        'Low MOQ initial runs',
        'Vibrant printed mailers',
        'Founder thank you notes',
        'Promotional swag materials'
      ]
    },
    {
      id: 'fmcg',
      title: 'FMCG Brands',
      icon: TrendingUp,
      stats: '40+ Clients Served',
      img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: 'High volume, consistent quality, and shelf-impact are crucial for FMCG. We deliver on all fronts reliably.',
      solutions: [
        'High-volume folding cartons',
        'Product labels & shrink sleeves',
        'Shelf talkers & danglers',
        'Display dispenser boxes',
        'Outer shipping cartons',
        'Marketing flyers & posters'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Industries We Serve</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Specialized Solutions for Every Industry</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We understand that different industries have unique requirements. Our expertise spans across sectors to provide tailored packaging and branding.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industries Detailed Sections */}
      <div className="bg-white">
        {industries.map((ind, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={ind.id} className={cn("py-24", !isEven ? "bg-slate-50" : "bg-white")}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isEven ? "lg:flex-row-reverse" : "")}>
                  
                  {/* Content */}
                  <AnimateOnScroll direction={isEven ? "left" : "right"} className={cn(!isEven ? "lg:order-2" : "")}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                        <ind.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <span className="px-3 py-1 bg-navy-50 text-navy-700 text-xs font-bold rounded-full border border-navy-100 uppercase tracking-wider">
                        {ind.stats}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">{ind.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {ind.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {ind.solutions.map((sol, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mr-3 mt-0.5" />
                          <span className="text-slate-700 font-medium text-sm">{sol}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors group">
                      Discuss Your Industry Needs 
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </AnimateOnScroll>

                  {/* Image */}
                  <AnimateOnScroll direction={isEven ? "right" : "left"} className={cn("relative", !isEven ? "lg:order-1" : "")}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                      <img 
                        src={ind.img} 
                        alt={ind.title} 
                        className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Industry, Our Expertise</h2>
            <p className="text-primary-100 text-lg mb-10">
              Partner with a team that understands the nuances and compliance requirements of your specific market sector.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-primary-600 bg-white hover:scale-105 transition-transform shadow-xl">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
