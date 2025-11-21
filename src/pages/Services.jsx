import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  const items = [
    { img: '/icon_web_design.png', title: 'Web Design & Development', desc: 'Custom websites built with modern tech and clean UX.' },
    { img: '/icon_ecommerce.png', title: 'E-commerce Websites', desc: 'Scalable online stores ready for conversion and growth.' },
    { img: '/icon_portfolio.png', title: 'Portfolio & Personal Websites', desc: 'Showcase your work with bold, elegant visuals.' },
    { img: '/icon_landing.png', title: 'Landing Pages', desc: 'High-impact pages for campaigns and product launches.' },
    { img: '/icon_support.png', title: 'Website Maintenance & Support', desc: 'Ongoing updates, security, and performance checks.' },
    { img: '/icon_seo.png', title: 'SEO & Performance Optimization', desc: 'Get found on search and load fast everywhere.' },
  ]

  return (
    <div className="bg-black min-h-screen text-zinc-100">
      <SEO title="Services | SamEst Web Dev"
        description="Web design, e-commerce websites, portfolio websites, landing pages, maintenance, SEO optimization."
        keywords={["web development","website design","e-commerce websites","portfolio websites","SEO"]}
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold">Services</h1>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((it) => (
                <div key={it.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition group">
                  <img src={it.img} alt={`${it.title} icon`} className="w-10 h-10" />
                  <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
                  <p className="text-zinc-400 text-sm">{it.desc}</p>
                </div>
              ))}
            </div>
            <a href="/contact" className="inline-block mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold">Learn More About Our Services</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
