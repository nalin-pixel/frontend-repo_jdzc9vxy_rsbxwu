export default function Testimonials(){
  const items = [
    { avatar: '/avatar1.png', text: '"SamEst Web Dev transformed our website into a modern powerhouse!" – Jane D.' },
    { avatar: '/avatar2.png', text: '"Professional, fast, and creative. Our e-commerce store is thriving!" – Mark A.' },
  ]
  return (
    <section className="py-20 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-white/10 bg-slate-900/50 flex gap-4">
              <img src={i.avatar} alt="Client avatar" className="w-14 h-14 rounded-full object-cover" />
              <p className="text-slate-300">{i.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-black font-semibold hover:brightness-110">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
