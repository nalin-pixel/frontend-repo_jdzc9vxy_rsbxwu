import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/samest_logo.png" alt="SamEst logo" className="w-16 h-16" />
            <p className="text-zinc-400 text-sm">Modern. Bold. Professional.</p>
            <div className="flex items-center gap-4">
              <img src="/icon_linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              <img src="/icon_instagram.png" alt="Instagram" className="w-6 h-6" />
              <img src="/icon_twitter.png" alt="Twitter" className="w-6 h-6" />
              <img src="/icon_facebook.png" alt="Facebook" className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-zinc-400 text-sm">
              {['Home','About','Services','Portfolio','Blog','Contact'].map(label => (
                <li key={label}>
                  <Link to={`/${label.toLowerCase()==='home'?'':label.toLowerCase()}`} className="hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-zinc-400 text-sm">Email: contact@samestwebdev.com</p>
            <p className="text-zinc-400 text-sm">Phone: +233 24 000 0000</p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-zinc-500 text-xs">
          <p>© 2025 SamEst Web Dev</p>
          <p>Modern. Bold. Professional.</p>
        </div>
      </div>
    </footer>
  )
}
