import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

export function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">About Arvalli BrandPack</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Building Brands That Last</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We are more than just a packaging company. We are your partners in creating tangible brand experiences that resonate with your customers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll direction="up" delay={0}>
              <div className="bg-primary-50/50 border border-primary-200 p-10 rounded-2xl h-full">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-950 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To empower businesses of all sizes with premium, sustainable, and innovative packaging and branding solutions that elevate their market presence and drive growth.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={100}>
              <div className="bg-navy-50/50 border border-navy-200 p-10 rounded-2xl h-full">
                <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-navy-800" />
                </div>
                <h2 className="text-2xl font-bold text-navy-950 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To become India's most trusted and preferred partner for end-to-end packaging and branding, recognized for our commitment to quality, creativity, and customer success.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Arvalli BrandPack Workshop"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-xl">
                <p className="text-primary-400 font-bold text-xl mb-1">Since 2016</p>
                <p className="text-white font-medium">Serving businesses across India with excellence in print and packaging.</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 font-semibold text-sm mb-4">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">8 Years of Building Brands Together</h2>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Arvalli BrandPack began with a simple observation: many great products were failing in the market simply because their packaging didn't reflect their true value.
                  </p>
                  <p>
                    Started in Gujarat, we set out on a mission to bridge the gap between premium design and affordable manufacturing. Over the past 8 years, we have grown from a small design studio into a comprehensive packaging manufacturing and branding hub.
                  </p>
                  <p>
                    Today, we proudly serve over 500 businesses across various industries, from local startups to established FMCG brands, ensuring their products not only reach safely but also make a lasting impression.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <p className="text-3xl font-bold text-navy-950 mb-1">15+</p>
                  <p className="text-sm text-slate-500 font-medium">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-navy-950 mb-1">2</p>
                  <p className="text-sm text-slate-500 font-medium">Facilities</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-navy-950 mb-1">100%</p>
                  <p className="text-sm text-slate-500 font-medium">Commitment</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-975 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <AnimateOnScroll direction="up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Core Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Drives Us</h2>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Customer First', desc: 'Your success is our success. We go above and beyond to meet your needs.' },
              { icon: Award, title: 'Quality Excellence', desc: 'We never compromise on the materials or the final output.' },
              { icon: Users, title: 'Long-term Partnerships', desc: 'We build relationships, not just client lists.' },
              { icon: TrendingUp, title: 'Continuous Innovation', desc: 'Always adopting the latest technologies in print and design.' }
            ].map((value, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 100}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 font-semibold text-sm mb-4">Why Businesses Trust Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-8">The Arvalli BrandPack Advantage</h2>

              <div className="space-y-4">
                {[
                  "500+ businesses trust us across Gujarat",
                  "ISO-compliant production processes",
                  "In-house design and production team",
                  "Food-safe and eco-friendly materials available",
                  "Dedicated account manager for every client",
                  "Free consultation and design advice",
                  "Transparent pricing with no hidden charges",
                  "After-sales support and reorder convenience"
                ].map((point, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:scale-105 transition-transform shadow-lg">
                  Partner With Us Today
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" className="hidden lg:block relative">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Collaboration"
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll direction="up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 font-semibold text-sm mb-4">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">Meet The Team</h2>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Darsh Patel', role: 'Founder & CEO', exp: '12+ Years', img: '/images/WhatsApp Image 2026-06-04 at 3.58.11 PM.jpeg' },
              { name: 'Om Patel', role: 'Founder', exp: '8+ Years', img: '/images/WhatsApp Image 2026-06-04 at 3.57.04 PM.jpeg' },
              { name: 'Divya Patel', role: 'Sales Director', exp: '10+ Years', img: '/images/WhatsApp Image 2026-06-04 at 3.46.05 PM.jpeg' },
              { name: 'Dev Patel', role: 'Operations Manager', exp: '6+ Years', img: '/images/WhatsApp Image 2026-06-04 at 3.46.48 PM.jpeg' }
            ].map((member, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {member.exp}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-navy-950 mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-primary-600">{member.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
