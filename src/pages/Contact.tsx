import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { db } from '../lib/db';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company_name: z.string().min(1, 'Company Name is required'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  requirement: z.string().min(10, 'Please provide more details (min 10 chars)'),
  budget: z.string().min(1, 'Please select a budget range'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Format the message for WhatsApp FIRST
      const message = `*New Inquiry from Website*

*Name:* ${data.name}
*Company:* ${data.company_name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Budget:* ${data.budget}

*Requirement:* 
${data.requirement}`;

      // 2. Open WhatsApp immediately so the user doesn't have to wait
      const whatsappUrl = `https://wa.me/917863871861?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setIsSuccess(true);
      
      // 3. Try to save to database in the background (don't block WhatsApp if it fails)
      await db.insertInquiry(data).catch(err => {
        console.error("Database save failed, but WhatsApp was opened", err);
      });
      
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-975 via-navy-950 to-navy-800 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <AnimateOnScroll direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Let's Start a Conversation</h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether you need a quick quote or want to discuss a complex custom project, our team is ready to assist you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Left Column (Info) */}
            <AnimateOnScroll direction="left" className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-navy-950 mb-6">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Fill out the form to request a quote or reach out to us directly through any of the channels below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                      <p className="text-navy-950 font-semibold">Modasa, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:+917863871861" className="text-navy-950 font-semibold hover:text-primary-600 transition-colors">+91 7863871861</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@arvallibrandpack.com" className="text-navy-950 font-semibold hover:text-primary-600 transition-colors">info@arvallibrandpack.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</p>
                      <p className="text-navy-950 font-semibold">Mon–Sat: 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/917863871861?text=Hello%20Arvalli%20BrandPack,%20I%20would%20like%20to%20inquire%20about..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-white bg-[#25d366] hover:scale-[1.02] transition-transform shadow-lg">
                Chat on WhatsApp
              </a>

              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                <h4 className="text-primary-800 font-bold mb-4">Why Inquire with us?</h4>
                <ul className="space-y-3">
                  {['Free customized quote within 24 hours', 'Expert consultation on materials & design', 'Samples available upon request', 'Transparent pricing structure'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mr-2" />
                      <span className="text-primary-900 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Right Column (Form) */}
            <AnimateOnScroll direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                {isSuccess ? (
                  <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy-950 mb-4">Inquiry Submitted!</h3>
                    <p className="text-slate-600 mb-8 max-w-sm">
                      Thank you for reaching out. One of our packaging experts will get back to you within 24 hours with a tailored solution.
                    </p>
                    <button
                      onClick={() => {
                        reset();
                        setIsSuccess(false);
                      }}
                      className="px-8 py-3 bg-navy-50 text-navy-900 font-bold rounded-xl hover:bg-navy-100 transition-colors border border-navy-200"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                      <input
                        {...register('name')}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow ${errors.name ? 'border-red-500' : 'border-slate-200 focus:border-primary-500'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Name <span className="text-red-500">*</span></label>
                      <input
                        {...register('company_name')}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow ${errors.company_name ? 'border-red-500' : 'border-slate-200 focus:border-primary-500'}`}
                        placeholder="Your Company"
                      />
                      {errors.company_name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company_name.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone <span className="text-red-500">*</span></label>
                      <input
                        {...register('phone')}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow ${errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-primary-500'}`}
                        placeholder="+91 78638 71861"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                      <input
                        {...register('email')}
                        type="email"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow ${errors.email ? 'border-red-500' : 'border-slate-200 focus:border-primary-500'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Budget <span className="text-red-500">*</span></label>
                    <select
                      {...register('budget')}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow appearance-none ${errors.budget ? 'border-red-500' : 'border-slate-200 focus:border-primary-500'}`}
                    >
                      <option value="">Select a budget range</option>
                      <option value="Under ₹10,000">Under ₹10,000</option>
                      <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000 – ₹5,00,000">₹1,00,000 – ₹5,00,000</option>
                      <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-xs mt-1 font-medium">{errors.budget.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Requirements <span className="text-red-500">*</span></label>
                    <textarea
                      {...register('requirement')}
                      rows={4}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow resize-none ${errors.requirement ? 'border-red-500' : 'border-slate-200 focus:border-primary-500'}`}
                      placeholder="Please describe your product, quantity needed, and any specific packaging requirements..."
                    />
                    {errors.requirement && <p className="text-red-500 text-xs mt-1 font-medium">{errors.requirement.message}</p>}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </button>
                  </div>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
