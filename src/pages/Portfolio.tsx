import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

type Category = 'All Projects' | 'Food Packaging' | 'Retail Packaging' | 'Branding Materials' | 'Promotional Products';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Projects');

  const categories: Category[] = ['All Projects', 'Food Packaging', 'Retail Packaging', 'Branding Materials', 'Promotional Products'];

  const projects = [
    {
      id: 1,
      category: 'Food Packaging',
      title: 'Fresh Bites Bakery',
      desc: 'Custom food boxes and grease-resistant paper bags for a premium artisanal bakery.',
      tags: ['Corrugated', 'Food Safe', 'Offset Print'],
      img: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      category: 'Food Packaging',
      title: 'SpiceRoute Restaurant',
      desc: 'Eco-friendly takeaway packaging and branded QR stands for tables.',
      tags: ['Takeaway', 'QR Stands', 'Eco-friendly'],
      img: 'https://images.pexels.com/photos/6849313/pexels-photo-6849313.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      category: 'Retail Packaging',
      title: 'StyleKart Fashion',
      desc: 'Luxury rigid gift boxes and premium paper shopping bags with foil stamping.',
      tags: ['Rigid Box', 'Foil Stamping', 'Retail Bags'],
      img: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      category: 'Retail Packaging',
      title: 'GreenLeaf Pharmacy',
      desc: 'Secure medicine folding cartons and tamper-evident labels.',
      tags: ['Folding Carton', 'Labels', 'Healthcare'],
      img: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      category: 'Branding Materials',
      title: 'TechVision Startup',
      desc: 'Complete brand identity including logo design, business cards, and letterheads.',
      tags: ['Logo Design', 'Stationery', 'Corporate'],
      img: 'https://images.pexels.com/photos/4015399/pexels-photo-4015399.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      category: 'Retail Packaging',
      title: 'Sunrise FMCG',
      desc: 'High-volume product packaging and moisture-resistant label designs.',
      tags: ['FMCG', 'Labels', 'Bulk Run'],
      img: 'https://images.pexels.com/photos/4197561/pexels-photo-4197561.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      category: 'Promotional Products',
      title: 'QuickPay Solutions',
      desc: 'Durable acrylic QR payment stands deployed across 1000+ retail outlets.',
      tags: ['Acrylic Stand', 'UV Print', 'Bulk Distribution'],
      img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      category: 'Promotional Products',
      title: 'MegaMart Hyperstore',
      desc: 'In-store promotional danglers, shelf talkers, and discount banners.',
      tags: ['POSM', 'Retail Displays', 'Large Format'],
      img: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 9,
      category: 'Food Packaging',
      title: 'Sweet Moments Confectionery',
      desc: 'Intricate sweet boxes with spot UV and metallic accents for festive seasons.',
      tags: ['Festive', 'Spot UV', 'Sweets Box'],
      img: 'https://images.pexels.com/photos/835825/pexels-photo-835825.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Work Speaks for Itself</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Browse through our recent projects to see how we've helped businesses across various industries enhance their brand presentation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-slate-50 min-h-[800px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <AnimateOnScroll direction="up" className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
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
            {filteredProjects.map((project, i) => (
              <AnimateOnScroll key={project.id} direction="up" delay={(i % 3) * 100}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-975 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want Your Project Here?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Let's create something beautiful and functional together. Get in touch with our team to start your project.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-navy-950 bg-white hover:scale-105 transition-transform shadow-xl">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
