import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyUs from '../components/WhyUs'
import PortfolioHighlights from '../components/PortfolioHighlights'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SEO
        title="SamEst Web Dev | Modern Web Development & Website Design"
        description="SamEst Web Dev builds professional websites: web development, e-commerce websites, portfolio websites, landing pages, SEO-optimized and responsive."
        keywords="web development, website design, professional websites, e-commerce websites, portfolio websites, responsive design, SEO"
      />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img src="/hero_home.jpg" alt="Abstract tech background" className="rounded-xl border border-white/10 w-full h-64 object-cover" loading="lazy" />
            <div>
              <h2 className="text-3xl font-bold">Bold, modern, and performance-ready websites</h2>
              <p className="mt-3 text-slate-400">We craft websites that look stunning and load fast. Optimized for SEO, built for conversions, and fully responsive across devices.</p>
            </div>
          </div>
        </section>
        <Features />
        <WhyUs />
        <PortfolioHighlights />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
