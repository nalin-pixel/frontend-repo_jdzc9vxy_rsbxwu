import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
  const posts = [
    { img: '/blog1.jpg', title: '5 Tips for Modern Website Design in 2025', excerpt: 'Design smarter with hierarchy, motion, and accessibility.' },
    { img: '/blog2.jpg', title: 'How to Optimize Your Website for SEO', excerpt: 'Core practices to rank higher and drive traffic.' },
    { img: '/blog3.jpg', title: 'Why Responsive Design is Critical for Business', excerpt: 'Mobile-first is no longer optional.' },
  ]

  return (
    <div className="bg-black min-h-screen text-zinc-100">
      <SEO title="Blog & Insights | SamEst Web Dev"
        description="Insights on website design, web development, SEO optimization, and responsive design."
        keywords={["web development","website design","SEO","responsive design"]}
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold">Insights</h1>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article key={p.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="text-zinc-400 text-sm">{p.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
            <a href="#" className="inline-block mt-10 px-6 py-3 rounded-full bg-white text-black font-bold">Read More Articles</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
