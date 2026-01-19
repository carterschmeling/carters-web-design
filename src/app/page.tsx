import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile-first navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Carter's Web Design
            </h1>
            <div className="flex space-x-4">
              <a href="#work" className="text-sm font-medium text-gray-700 hover:text-blue-600">Work</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Mobile optimized */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            I build websites that
            <span className="block">get clients</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Simple, fast, mobile-first sites for local businesses. 
            Starting at $1,200. Ready in 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Quote
            </a>
            <a 
              href="#work"
              className="border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
            >
              See Work
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-16">Recent Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Key to Massage */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">Key to Massage</h3>
                  <p className="text-blue-100 text-sm">Live booking demo</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Mobile-first booking site. Square integration ready.
                </p>
                <a href="https://key-to-massage.vercel.app" 
                   className="text-blue-600 font-semibold hover:text-blue-800 text-sm flex items-center gap-1 group-hover:underline"
                   target="_blank" rel="noopener noreferrer">
                  View Live →
                </a>
              </div>
            </div>

            {/* Portfolio Card 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Local Plumber</h3>
                <p className="text-gray-600 mb-4">Emergency calls 24/7</p>
                <a href="#" className="text-emerald-600 font-semibold hover:text-emerald-800 text-sm flex items-center gap-1 group-hover:underline">
                  Coming Soon →
                </a>
              </div>
            </div>

            {/* Portfolio Card 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">Roofing Pro</h3>
                <p className="text-gray-600 mb-4">Free quote calculator</p>
                <a href="#" className="text-orange-600 font-semibold hover:text-orange-800 text-sm flex items-center gap-1 group-hover:underline">
                  Coming Soon →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">$1,200</h3>
              <p className="text-xl font-semibold text-gray-600 mb-6">1-Page Site</p>
              <ul className="text-left space-y-3 mb-8 text-gray-600">
                <li className="flex items-center gap-2">✅ Mobile-first design</li>
                <li className="flex items-center gap-2">✅ Contact forms</li>
                <li className="flex items-center gap-2">✅ Fast loading</li>
                <li className="flex items-center gap-2">✅ SEO ready</li>
              </ul>
              <a href="#contact" className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 block">
                Start Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Let's Build Yours</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Text or call. I'll send mockups same day.
          </p>
          <div className="space-y-4">
            <a href="tel:+15551234567" className="block bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl mx-auto max-w-sm">
              📱 Call / Text: (555) 123-4567
            </a>
            <a href="mailto:carter@carterswebdesign.com" className="block border-2 border-gray-200 text-gray-800 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 mx-auto max-w-sm">
              ✉️ Email: carter@yourdomain.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Carter's Web Design</h3>
          <p className="text-gray-400 mb-6">Simple sites that get clients. Starting at $1,200.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
            <span>•</span>
            <a href="tel:+15551234567" className="hover:text-white transition-colors">Call Now</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
