export default function WhyUs(){
  const items = [
    { title: 'Professional Design & UX', desc: 'Pixel-perfect, user-centric interfaces.' },
    { title: 'Fast Delivery & Launch', desc: 'Efficient processes for quick turnaround.' },
    { title: 'SEO Optimized & Performance-Ready', desc: 'Clean code, fast loads, and best practices.' },
    { title: 'Fully Responsive', desc: 'Beautiful on mobile, tablet, and desktop.' },
  ]
  return (
    <section className="py-20 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Us</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-xl border border-white/10 bg-slate-900/50">
              <h3 className="text-white font-semibold">{i.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
