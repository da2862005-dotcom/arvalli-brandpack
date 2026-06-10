import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen ? 'bg-navy-950 shadow-lg py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-white tracking-tight">Arvalli BrandPack</span>
            <span className="text-xs font-medium text-primary-500 uppercase tracking-widest">Packaging & Branding</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-slate-300 hover:text-primary-400 hover:bg-white/5'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:scale-105 transition-transform shadow-[0_4px_24px_rgba(249,115,22,0.3)]"
            >
              Request a Quote
            </Link>
            
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-navy-950 border-t border-white/10 transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0 border-transparent'
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  isActive
                    ? 'text-primary-500 bg-primary-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="block w-full text-center mt-4 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
