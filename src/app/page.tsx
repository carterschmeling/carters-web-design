export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* CLEANER NAV */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <h1 className="font-black text-xl tracking-tight">CARTER</h1>
          </div>
          <div className="flex items-center gap-10">
            <a href="#services" className="text-gray-300 hover:text-white transition font-medium">Services</a>
            <a href="#work" className="text-gray-300 hover:text-white transition font-medium">Work</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <p className="text-sm font-semibold text-blue-400">🚀 Web Design That Converts</p>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Build Your Dream
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Website Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Premium websites for small businesses. Fast turnaround, transparent pricing, and results that speak for themselves.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition"></div>
              <span className="relative flex items-center justify-center gap-2">
                Start Your Project
                <span className="group-hover:translate-x-1 transition">→</span>
              </span>
            </a>
            <a
              href="#work"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition"
            >
              View Portfolio
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex justify-center gap-12 text-center">
            <div>
              <div className="text-4xl font-black text-blue-400">10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-400">24hr</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                What I Build
              </span>
            </h2>
            <p className="text-xl text-gray-400">Services designed to help your business grow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Optimized for speed. Your site loads in under 1 second. Google rewards fast sites with better rankings.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                  📱
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile First</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  70% of your customers browse on mobile. Every site I build looks perfect on any device, any screen size.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-4">Built to Convert</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Strategic design with clear CTAs, booking forms, and contact systems that turn visitors into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black">$10</span>
                  <span className="text-2xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">+ $75 one-time setup</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">1-page website</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Mobile responsive</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Contact form</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Free hosting</span>
                </li>
              </ul>

              <a href="#contact" className="block text-center py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition">
                Get Started
              </a>
            </div>

            {/* Growth - FEATURED */}
            <div className="relative p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl scale-105 shadow-2xl shadow-purple-500/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-black text-sm font-black">
                MOST POPULAR
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black">$29</span>
                  <span className="text-2xl opacity-80">/month</span>
                </div>
                <p className="opacity-80">+ $199 one-time setup</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-xl">✓</span>
                  <span>Up to 5 pages</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-xl">✓</span>
                  <span>Booking system</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-xl">✓</span>
                  <span>Photo gallery</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-xl">✓</span>
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-xl">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>

              <a href="#contact" className="block text-center py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-xl font-bold transition">
                Get Started
              </a>
            </div>

            {/* Boss */}
            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Boss</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black">$59</span>
                  <span className="text-2xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">+ $499 one-time setup</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Unlimited pages</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">E-commerce ready</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Advanced SEO</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Monthly updates</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">24/7 support</span>
                </li>
              </ul>

              <a href="#contact" className="block text-center py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Recent Work
              </span>
            </h2>
            <p className="text-xl text-gray-400">Real projects. Real results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="h-80 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black mb-2">KJ CUTS</div>
                  <div className="text-blue-400 text-sm uppercase tracking-widest">Barbershop</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">KJ Cuts Barbershop</h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Modern booking system with Calendly integration, service tiers, and mobile-optimized design.
                </p>
                <a href="https://kj-cuts.vercel.app" target="_blank" className="inline-flex items-center gap-2 text-blue-400 font-bold text-lg hover:gap-4 transition-all">
                  View Live Site
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center p-12 hover:border-white/40 transition">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-2xl font-bold text-gray-400 mb-2">Your Project Here</div>
                <p className="text-gray-500">Let's build something amazing together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-600/10 to-transparent"></div>
        
        <div className="max-w-2xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Talk
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Ready to grow your business? Fill out the form and I'll respond within 24 hours.
            </p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="627e215a-1165-4526-8d83-23674a7a4a94" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-6 py-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:border-blue-500 focus:outline-none transition text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:border-blue-500 focus:outline-none transition text-lg"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={6}
              required
              className="w-full px-6 py-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:border-blue-500 focus:outline-none transition text-lg resize-none"
            ></textarea>
            <button type="submit" className="w-full py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition">
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="font-black text-xl">CARTER</span>
          </div>
          <p className="text-gray-400">© 2025 Carter Web Design. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
