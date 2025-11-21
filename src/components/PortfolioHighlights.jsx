export default function PortfolioHighlights(){
  const projects = [
    { img: '/project1.jpg', title: 'Fashion E-commerce Website', desc: 'Bold, clean, and mobile-ready' },
    { img: '/project2.jpg', title: 'Creative Photographer Portfolio', desc: 'Stunning visuals and smooth UX' },
    { img: '/project3.jpg', title: 'Marketing Landing Page', desc: 'High conversion rate design' },
  ]
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio Highlights</h2>
            <p className="mt-2 text-slate-400">Portfolio websites, e-commerce websites, landing pages</p>
          </div>
          <a href="/portfolio" className="text-sm text-orange-400 hover:text-orange-300">View All</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden border border-white/10 bg-slate-900/40">
              <img src={p.img} alt={`${p.title} preview`} className="w-full h-64 object-cover" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
