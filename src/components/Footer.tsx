import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-975 text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">Arvalli BrandPack</span>
              <span className="text-xs font-medium text-primary-500 uppercase tracking-widest">Packaging & Branding</span>
            </Link>
            <p className="text-sm text-slate-400">
              Complete packaging and branding solutions for growing businesses. We don't just make packaging — we create brand experiences.
            </p>
            <div className="flex space-x-4">
              {['FB', 'IG', 'LI', 'TW'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-semibold text-sm hover:bg-primary-500 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Paper Carry Bags', 'Garment Bags', 'Sweet Boxes', 'Food Takeaway Boxes', 'Business Cards', 'Brochures & Flyers', 'Logo Design', 'Marketing Materials'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Portfolio', 'Industries', 'Contact', 'Admin Dashboard'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Admin Dashboard' ? '/admin' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary-500 shrink-0 mt-0.5" size={20} />
                <span className="text-sm">Modasa, Gujarat, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-primary-500 shrink-0 mt-0.5" size={20} />
                <a href="tel:+917863871861" className="text-sm hover:text-white transition-colors">+91 7863871861</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-primary-500 shrink-0 mt-0.5" size={20} />
                <a href="mailto:[EMAIL_ADDRESS]" className="text-sm hover:text-white transition-colors">[EMAIL_ADDRESS]</a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-primary-500/10 border border-primary-500/20">
              <p className="text-sm text-primary-100 font-medium">Business Hours</p>
              <p className="text-sm text-slate-300 mt-1">Mon–Sat: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Arvalli BrandPack. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs text-slate-500 text-center">
              Proudly serving businesses across India from Gujarat.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-semibold text-primary-500 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              Go to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
