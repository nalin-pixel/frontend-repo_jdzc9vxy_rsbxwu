import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-black min-h-screen text-zinc-100">
      <SEO title="About SamEst Web Dev | Professional Web Development"
        description="Learn about SamEst Web Dev: mission-driven web development, modern design, SEO, and client-focused solutions."
        keywords={["web development","professional websites","website design","SEO","portfolio websites"]}
      />
      <Navbar />
      <main className="pt-16">
        <section className="relative">
          <img src="/hero_about.jpg" alt="Dark professional office background" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold">About SamEst Web Dev</h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-zinc-300">At SamEst Web Dev, our mission is to craft bold, modern, and fully functional websites that elevate businesses and personal brands. We create digital experiences that impress, engage, and convert visitors into loyal customers.</p>
            <p className="text-zinc-400">We specialize in web development, design systems, e-commerce builds, SEO, and performance optimization. Our process is collaborative and transparent, putting your goals at the center.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold">Founder</h2>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
              <img src="/avatar1.png" alt="Sam Est headshot" className="w-24 h-24 rounded-full" />
              <div>
                <h3 className="text-white font-semibold">Sam Est – Founder & Lead Developer</h3>
                <p className="text-zinc-400">Focused on building fast, accessible, and visually striking websites that deliver results.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
