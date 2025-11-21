import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Building Modern and Bold Websites for Everyone
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300">
            SamEst Web Dev turns ideas into professional, high-impact digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="px-6 py-3 rounded-full bg-white text-black font-bold hover:opacity-90">Our Services</Link>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
