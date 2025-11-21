import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Portfolio() {
  const items = [
    { img: '/project1.jpg', title: 'Fashion E-commerce Website', desc: 'Bold, clean, and mobile-ready' },
    { img: '/project2.jpg', title: 'Creative Photographer Portfolio', desc: 'Stunning visuals and smooth UX' },
    { img: '/project3.jpg', title: 'Marketing Landing Page', desc: 'High conversion rate design' },
    { img: '/project4.jpg', title: 'Tech SaaS Website', desc: 'Modern UI and clear messaging' },
    { img: '/project2.jpg', title: 'Artist Portfolio', desc: 'Striking gallery and smooth navigation' },
    { img: '/project3.jpg', title: 'Startup Landing', desc: 'Fast, responsive, and conversion-focused' },
  ]
  return (
    <div className="bg-black min-h-screen text-zinc-100">
      <SEO title="Portfolio | SamEst Web Dev"
        description="Selected projects: e-commerce websites, portfolio websites, landing pages, and more."
        keywords={["web development","portfolio websites","e-commerce websites","landing pages"]}
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold">Projects</h1>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((it) => (
                <a key={it.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
                  <img src={it.img} alt={it.title} className="w-full h-60 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{it.title}</h3>
                    <p className="text-zinc-400 text-sm">{it.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
