import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Web Design', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){
        setStatus('Message sent! We will reach out shortly.')
        setForm({ name: '', email: '', phone: '', service: 'Web Design', message: '' })
      } else {
        setStatus(data.detail || 'Failed to send. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <SEO title="Contact | SamEst Web Dev" description="Contact SamEst Web Dev for web development, e-commerce, portfolio websites, and landing page projects." keywords="contact web development agency, build website" />
      <Navbar />

      <section className="relative">
        <img src="/hero_contact.jpg" alt="Contact background" className="w-full h-[40vh] object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white" />
              <select name="service" value={form.service} onChange={handleChange} className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white">
                <option>Web Design</option>
                <option>E-commerce</option>
                <option>Portfolio</option>
                <option>Landing Page</option>
                <option>Custom Solutions</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="6" className="sm:col-span-2 bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white" />
              <button className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-black font-semibold hover:brightness-110">Send Message</button>
            </form>
            {status && <p className="mt-4 text-slate-300">{status}</p>}
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <p className="text-slate-400 text-sm">Email: contact@samestwebdev.com</p>
            <p className="text-slate-400 text-sm">Phone: +233 24 000 0000</p>
            <div className="flex items-center gap-3">
              <img src="/icon_linkedin.png" alt="LinkedIn" className="w-6 h-6" loading="lazy" />
              <img src="/icon_instagram.png" alt="Instagram" className="w-6 h-6" loading="lazy" />
              <img src="/icon_twitter.png" alt="Twitter" className="w-6 h-6" loading="lazy" />
              <img src="/icon_facebook.png" alt="Facebook" className="w-6 h-6" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
