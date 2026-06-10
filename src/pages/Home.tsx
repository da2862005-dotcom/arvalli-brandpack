import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Palette, Megaphone, ShieldCheck, Truck, Users, BadgeCheck, Headphones, Zap, Star, ChevronDown, MapPin, Phone, Mail, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our MOQ varies depending on the product. For standard paper carry bags, it's typically 500 units. For premium sweet boxes or custom packaging, the MOQ might be lower. We always try to accommodate small businesses, so please reach out with your specific needs." },
    { q: "How long does production take?", a: "Standard production time is 7-10 business days after artwork approval. For complex custom jobs, it may take 12-15 days. We also offer expedited services for urgent requirements." },
    { q: "Do you provide design services?", a: "Yes! We have an in-house team of expert designers who can help create everything from your logo to the final packaging dielines. We ensure your brand looks professional and stands out." },
    { q: "Can I get a sample before placing a bulk order?", a: "Absolutely. We can provide blank structural samples free of charge, and printed prototypes for a nominal fee that gets adjusted against your final bulk order." },
    { q: "What materials do you use? Are they eco-friendly?", a: "We offer a wide range of materials including kraft paper, standard paperboard, rigid board, and specialty papers. We have a dedicated line of 100% recyclable and biodegradable eco-friendly packaging options." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,#f97316,transparent)] opacity-10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,#1d4ed8,transparent)] opacity-10 rounded-full blur-3xl mix-blend-screen" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimateOnScroll direction="left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-300">Trusted by 500+ Businesses Across Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                Complete <span className="text-primary-500">Packaging & Branding</span> Solutions For Growing Businesses
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                Helping businesses build strong brands through quality packaging and professional branding materials. From concept to delivery — we handle it all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:scale-105 transition-transform shadow-[0_4px_24px_rgba(249,115,22,0.3)]">
                  Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-slate-200 bg-white/5 border-2 border-white/20 hover:bg-white/10 transition-colors">
                  Contact Us
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Quality Guaranteed', 'On-time Delivery', 'Bulk Orders Welcome'].map((text, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-primary-500 w-5 h-5 shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Right Visual */}
            <AnimateOnScroll direction="right" delay={200} className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent z-10" />
                <img
                  src="/images/brandpack_products.png"
                  alt="Arvalli BrandPack Products - Paper bags, Garment bags, Sweet boxes, Food boxes, Paper cups"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-8 -right-8 z-20 bg-navy-950 border border-primary-500/30 p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-[bounce_4s_infinite]">
                <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-500">8+</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Years</p>
                  <p className="text-sm text-white font-semibold">Experience</p>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 z-20 bg-navy-950 border border-primary-500/30 p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-[bounce_5s_infinite_reverse]">
                <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-500">500+</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Happy</p>
                  <p className="text-sm text-white font-semibold">Clients</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-975 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 divide-x divide-white/10">
            {[
              { label: 'Happy Clients', value: '500+' },
              { label: 'Product Types', value: '50+' },
              { label: 'Years Experience', value: '8+' },
              { label: 'Orders Delivered', value: '10k+' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <AnimateOnScroll direction="up" delay={i * 100}>
                  <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateOnScroll direction="up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 font-semibold text-sm mb-4">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">Everything Your Brand Needs</h2>
              <p className="text-lg text-slate-600">From the box that holds your product to the brochure that tells your story, we provide end-to-end solutions under one roof.</p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'Packaging Solutions',
                desc: 'Protect and present your products with our high-quality custom packaging options.',
                features: ['Paper Carry Bags', 'Garment Bags', 'Sweet Boxes', 'Food Takeaway Boxes'],
                img: '/images/packaging_bags.png'
              },
              {
                icon: Palette,
                title: 'Branding Solutions',
                desc: 'Build a cohesive and professional brand identity with our design and print services.',
                features: ['Business Cards', 'Brochures & Flyers', 'Logo Design', 'Labels & Stickers'],
                img: '/images/brand_identity.png'
              },
              {
                icon: Megaphone,
                title: 'Promotional Products',
                desc: 'Get your brand noticed with functional and attractive marketing materials.',
                features: ['QR Stands', 'Table Tents', 'Menu Holders', 'Marketing Materials'],
                img: '/images/qr_stands.png'
              }
            ].map((service, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 150} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg z-10">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-navy-950 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>

                  <div className="mt-auto">
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      View All Services <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left" className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 font-semibold text-sm mb-4">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">The Trusted Partner for Your Packaging & Branding Needs</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With over 8 years of experience, we understand that your packaging is the first physical touchpoint your customer has with your brand. We ensure it's a memorable one.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-primary-50 border border-primary-500/20">
                <p className="text-primary-800 font-medium italic leading-relaxed text-lg">
                  "We don't just make packaging — we create brand experiences that leave lasting impressions on your customers."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '500+', label: 'Clients' },
                  { value: '10k+', label: 'Orders' },
                  { value: '50+', label: 'Products' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-medium uppercase mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous checks at every production stage.' },
                  { icon: Truck, title: 'On-Time Delivery', desc: 'We respect your deadlines, always.' },
                  { icon: Users, title: 'Expert Team', desc: 'Skilled professionals dedicated to your success.' },
                  { icon: BadgeCheck, title: 'Competitive Pricing', desc: 'Premium quality at honest, transparent rates.' },
                  { icon: Headphones, title: 'Dedicated Support', desc: 'Always available to assist with your queries.' },
                  { icon: Zap, title: 'Fast Turnaround', desc: 'Quick execution from design to delivery.' }
                ].map((feature, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-600 mb-4" />
                    <h4 className="text-lg font-bold text-navy-950 mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-975 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimateOnScroll direction="up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Client Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-lg text-slate-400">Don't just take our word for it. Hear from the businesses that trust Arvalli BrandPack with their brand.</p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Rajesh Patel', role: 'Founder, Patel Food Industries', initials: 'RP', text: 'Arvalli BrandPack transformed our food packaging. The print quality is exceptional, and their team helped us design boxes that stand out on retail shelves.' },
              { name: 'Priya Shah', role: 'Owner, StyleMart Retail', initials: 'PS', text: 'We source all our premium shopping bags and tissue papers from them. Always on time, and the finishing is top-notch. Highly recommended!' },
              { name: 'Dr. Amit Desai', role: 'Director, HealthFirst', initials: 'AD', text: 'Finding a reliable packaging partner for pharmaceutical products was tough until we met the Arvalli BrandPack team. Their QA processes are fantastic.' },
              { name: 'Mehul Joshi', role: 'Manager, QuickBite Chain', initials: 'MJ', text: 'From takeaway boxes to table tents and menu QR stands, they handle everything for our 5 branches. Great pricing and service.' },
              { name: 'Kavita Mehta', role: 'Marketing Head, Sunrise FMCG', initials: 'KM', text: 'Their turnaround time for urgent product launches is unbeatable. They delivered 10,000 custom labels in record time without compromising quality.' },
              { name: 'Nitin Agrawal', role: 'CEO, TechStart India', initials: 'NA', text: 'We got all our corporate branding materials designed and printed here. The business cards and presentation folders look incredibly premium.' }
            ].map((testimonial, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 100} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-primary-500 text-primary-500" />)}
                </div>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center font-bold text-white shadow-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-slate-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll direction="up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 font-semibold text-sm mb-4">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Got questions? We've got answers. If you don't see your question here, feel free to contact us.</p>
            </AnimateOnScroll>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 50}>
                <div
                  className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openFaq === i ? 'bg-primary-50/50 border-primary-200' : 'bg-white border-slate-200'}`}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-bold text-navy-950 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary-600 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-950 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Get In Touch</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Elevate Your Brand?</h2>
              <p className="text-lg text-slate-400 mb-8 max-w-lg">
                Let's discuss how our packaging and branding solutions can help your business stand out in the market.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <MapPin className="text-primary-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-white font-medium">Modasa, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <Phone className="text-primary-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <a href="tel:+917863871861" className="text-white font-medium hover:text-primary-400">+91 7863871861</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <Mail className="text-primary-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a href="mailto:info@arvallibrandpack.com" className="text-white font-medium hover:text-primary-400">info@arvallibrandpack.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:scale-105 transition-transform shadow-lg">
                  Request a Quote
                </Link>
                <a href="https://wa.me/917863871861?text=Hello%20Arvalli%20BrandPack,%20I%20would%20like%20to%20inquire%20about..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-white bg-[#25d366] hover:scale-105 transition-transform shadow-lg">
                  WhatsApp Us
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { value: '500+', label: 'Happy Clients', desc: 'across Gujarat' },
                  { value: '50+', label: 'Product Types', desc: 'packaging & branding' },
                  { value: '8+', label: 'Years Experience', desc: 'in the industry' },
                  { value: '24hrs', label: 'Response Time', desc: 'for all inquiries' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <p className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">{stat.value}</p>
                    <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
                    <p className="text-slate-400 text-xs">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
