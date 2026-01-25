'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-black text-white selection:bg-purple-500/30">
      {/* FIXED NAV - Services & Work buttons positioned far right */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shrink-0"></div>
            <h1 className="font-black text-lg md:text-xl tracking-tight leading-none text-white">
              <span className="block md:hidden">CARTER</span>
              <span className="hidden md:block">CARTER'S WEB DESIGN</span>
            </h1>
          </div>

          {/* Services and Work buttons - positioned FAR RIGHT on desktop */}
          <div className="hidden md:flex items-center gap-12 ml-auto mr-16">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">Services</a>
            <a href="#work" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">Work</a>
          </div>

          {/* Mobile Services and Work - positioned far right */}
          <div className="flex md:hidden items-center gap-6 mr-6">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition">Services</a>
            <a href="#work" className="text-sm font-medium text-gray-300 hover:text-white transition">Work</a>
          </div>

          {/* CTA Button - positioned as far right as possible */}
          <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-full font-bold text-sm md:text-base text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"></div>
        <div className="absolute top-20 left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <p className="text-xs md:text-sm font-semibold text-blue-400 uppercase tracking-wider">🚀 Web Design That Converts</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Build Your Dream
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Website Today
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-2">
            Premium websites for small businesses. Fast turnaround, transparent pricing, and results that speak for themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition"
            >
              Start Your Project
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition"
            >
              View Portfolio
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex justify-center gap-8 md:gap-16 text-center border-t border-white/10 pt-8 mx-4">
            <div>
              <div className="text-3xl md:text-4xl font-black text-blue-400">10+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-purple-400">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-pink-400">24hr</div>
              <div className="text-xs md:text-sm text-gray-400">Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                What I Build
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Services designed to help your business grow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimized for speed. Your site loads in under 1 second. Google rewards fast sites.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                📱
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile First</h3>
              <p className="text-gray-400 leading-relaxed">
                Looks perfect on every phone. 70% of web traffic is mobile — be ready for it.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">Built to Convert</h3>
              <p className="text-gray-400 leading-relaxed">
                Clear booking forms and call-to-action buttons that turn visitors into paying clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 relative bg-white/5">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black">$10</span>
                  <span className="text-xl text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400 text-sm">+ $75 setup</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex gap-3"><span>✓</span> 1-page website</li>
                <li className="flex gap-3"><span>✓</span> Mobile responsive</li>
                <li className="flex gap-3"><span>✓</span> Contact form</li>
                <li className="flex gap-3"><span>✓</span> Free hosting</li>
              </ul>
              <a href="#contact" className="block text-center py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition">Get Started</a>
            </div>

            {/* Growth */}
            <div className="relative p-8 bg-gradient-to-br from-blue-600/90 to-purple-600/90 rounded-3xl shadow-2xl scale-105 border border-white/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 rounded-full text-black text-xs font-black uppercase">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black">$29</span>
                  <span className="text-xl text-white/80">/mo</span>
                </div>
                <p className="text-white/80 text-sm">+ $199 setup</p>
              </div>
              <ul className="space-y-3 mb-8 font-medium">
                <li className="flex gap-3"><span>✓</span> Up to 5 pages</li>
                <li className="flex gap-3"><span>✓</span> Booking system</li>
                <li className="flex gap-3"><span>✓</span> Photo gallery</li>
                <li className="flex gap-3"><span>✓</span> SEO Optimized</li>
              </ul>
              <a href="#contact" className="block text-center py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-bold transition">Get Started</a>
            </div>

            {/* Boss */}
            <div className="p-8 bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Boss</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black">$59</span>
                  <span className="text-xl text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400 text-sm">+ $499 setup</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex gap-3"><span>✓</span> Unlimited pages</li>
                <li className="flex gap-3"><span>✓</span> E-commerce ready</li>
                <li className="flex gap-3"><span>✓</span> Advanced SEO</li>
                <li className="flex gap-3"><span>✓</span> Monthly updates</li>
              </ul>
              <a href="#contact" className="block text-center py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Recent Work
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* KJ Cuts */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all">
              <div className="h-64 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
                <h3 className="text-white text-4xl font-black tracking-tighter">KJ CUTS</h3>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-2">KJ Cuts Barbershop</h4>
                <p className="text-gray-400 mb-6">Modern booking site with Calendly integration.</p>
                <a href="https://kj-cuts.vercel.app" target="_blank" className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2">
                  View Live Site <span>→</span>
                </a>
              </div>
            </div>

            {/* Key to Massage */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="h-64 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
                <h3 className="text-white text-4xl font-black tracking-tighter">KEY TO MASSAGE</h3>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-2">Key to Massage</h4>
                <p className="text-gray-400 mb-6">A site designed for wellness and relaxation.</p>
                <a href="https://key-to-massage.vercel.app" target="_blank" className="text-purple-400 font-bold hover:text-purple-300 flex items-center gap-2">
                  View Live Site <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Let's Talk</h2>
            <p className="text-gray-400">Fill out the form and I'll respond within 24 hours.</p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="627e215a-1165-4526-8d83-23674a7a4a94" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required 
              className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 outline-none transition" />
            
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required 
              className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 outline-none transition" />
            
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={4} required 
              className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:border-blue-500 outline-none transition resize-none" />
            
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        © 2025 Carter's Web Design
      </footer>
    </main>
  );
}
