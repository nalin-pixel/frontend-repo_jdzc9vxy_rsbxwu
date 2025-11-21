export function Features() {
  const items = [
    { img: '/icon_web_design.png', title: 'Web Design', desc: 'Bold, modern, and conversion-focused websites.' },
    { img: '/icon_ecommerce.png', title: 'E-commerce', desc: 'High-performing online stores ready for growth.' },
    { img: '/icon_portfolio.png', title: 'Portfolio', desc: 'Showcase your work with style and clarity.' },
    { img: '/icon_landing.png', title: 'Landing Page', desc: 'Launch campaigns with high-converting pages.' },
    { img: '/icon_custom.png', title: 'Custom Solutions', desc: 'Tailored features for your unique needs.' },
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Services that ship results</h2>
        <p className="text-zinc-400 mt-2">Web development, website design, professional online services.</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
              <img src={it.img} alt={`${it.title} icon`} className="w-10 h-10" />
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="text-zinc-400 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  const items = [
    { title: 'Professional Design & UX', desc: 'Clean layouts and bold typography for impact.' },
    { title: 'Fast Delivery & Launch', desc: 'Efficient process to get you live quickly.' },
    { title: 'SEO Optimized & Performance-Ready', desc: 'Best practices for visibility and speed.' },
    { title: 'Fully Responsive', desc: 'Perfect on mobile, tablet, and desktop.' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why choose us</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-zinc-400 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PortfolioHighlights() {
  const items = [
    { img: '/project1.jpg', title: 'Fashion E-commerce Website', desc: 'Bold, clean, and mobile-ready' },
    { img: '/project2.jpg', title: 'Creative Photographer Portfolio', desc: 'Stunning visuals and smooth UX' },
    { img: '/project3.jpg', title: 'Marketing Landing Page', desc: 'High conversion rate design' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Portfolio highlights</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <img src={it.img} alt={it.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="text-zinc-400 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { avatar: '/avatar1.png', text: '"SamEst Web Dev transformed our website into a modern powerhouse!"', name: 'Jane D.' },
    { avatar: '/avatar2.png', text: '"Professional, fast, and creative. Our e-commerce store is thriving!"', name: 'Mark A.' },
  ]
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What clients say</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.name} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <img src={it.avatar} alt={`${it.name} avatar`} className="w-10 h-10 rounded-full" />
                <div className="text-white font-semibold">{it.name}</div>
              </div>
              <p className="text-zinc-300 mt-3">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FooterCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Build Your Website?</h2>
        <a href="/contact" className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold">Contact Us</a>
      </div>
    </section>
  )
}
