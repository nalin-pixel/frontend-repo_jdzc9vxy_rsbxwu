export default function Features(){
  const items = [
    { title: 'Web Design', img: '/icon_web_design.png', desc: 'Professional UI/UX with bold, modern aesthetics.' },
    { title: 'E-commerce', img: '/icon_ecommerce.png', desc: 'Sales-ready storefronts with secure checkout.' },
    { title: 'Portfolio', img: '/icon_portfolio.png', desc: 'Showcase your work with style and clarity.' },
    { title: 'Landing Page', img: '/icon_landing.png', desc: 'High-converting pages built to perform.' },
    { title: 'Custom Solutions', img: '/icon_custom.png', desc: 'Tailored features for your unique needs.' },
  ]
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-slate-400">Web development, website design, professional online services</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group p-6 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-900 transition">
              <img src={item.img} alt={`${item.title} icon`} className="w-10 h-10" />
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
